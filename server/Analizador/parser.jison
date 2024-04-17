// ################### ANALIZADOR LEXICO #######################
%{
    var cadena="";
    var listaDeErrores=[];
    const Error = require("../Interprete/instruccion/Errores.js");
%}

%lex
%options case-insensitive
%x string 

// ---------> Expresiones Regulares
numerodecimal ([0-9]+[.][0-9]+);
entero  [0-9]+;
id [a-zA-Z][a-zA-Z0-9_]*;


%%

"//".*							                // comentario de linea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]                     // comentario multiples lineas

// -----> Reglas Lexicas

//---------METODOS Y FUNCIONES-------------------------
"cout"                      { return 'COUT'; }
"endl"                      { return 'ENDL'; }
"pow"                       { return 'POW'; }
"std"                       { return 'STD'; }

//---------TIPOS DE DATOS------------------------------
"true"                      { return 'TRUE'; }
"false"                     { return 'FALSE'; }
"int"                       { return 'INT'; }
"std"                       { return 'STD'; }
"string"                    { return 'STRING'; }
"char"                      { return 'CHAR'; }
"bool"                      { return 'BOOL'; }
"double"                    { return 'DOUBLE'; }


//---------OPERADORES RELACIONALES---------------------
"!="                        { return 'DIFERENCIACION'; }
"=="                        { return 'DOBLEIGUAL'; }
"="                         { return 'IGUAL'; }
"<="                        { return 'MENORIGUAL'; }
"<<"                        { return 'DOBLEMENOR'; }
"<"                         { return 'MENOR'; }
">="                        { return 'MAYORIGUAL'; }
">"                         { return 'MAYOR'; }

//---------OPERADORES LOGICOS--------------------------
"||"                        { return 'OR'; }
"&&"                        { return 'AND'; }
"!"                         { return 'NOT'; }

//---------SIGNOS DEL LENGUAJE-------------------------
"::"                        { return 'DOBLEDOSPUNTOS'; }
":"                         { return 'DOSPUNTOS'; }
";"                         { return 'PUNTOYCOMA'; }
","                         { return 'COMA'; }
"("                         { return 'PARENTESIS_A'; }
")"                         { return 'PARENTESIS_C'; }
"+"                         { return 'MAS'; }
"-"                         { return 'MENOS'; }
"*"                         { return 'MULTI'; }
"/"                         { return 'DIVICION'; }
"%"                         { return 'MODULO'; }
"?"                         { return 'INTEROGACION'; }

//-------------INDENTIFICADORES-------------------------
{numerodecimal}			     { return 'NUMERODECIMA'; }
{entero}                	 { return 'ENTERO'; }
{id}						 { return 'ID'; }

["]                             { cadena=""; this.begin("string"); }
<string>[^"\\]+                 { cadena+=yytext; }
<string>"\\\""                  { cadena+="\""; }
<string>"\\n"                   { cadena+="\n"; }
<string>\s                      { cadena+=" ";  }
<string>"\\t"                   { cadena+="\t"; }
<string>"\\\\"                  { cadena+="\\"; }
<string>"\\\'"                  { cadena+="\'"; }
<string>["]                     { yytext=cadena; this.popState(); return 'TEXTO'; }

["\'"]([^"\'"])?["\'"]          { return 'CARACTER' }   

//------------>Espacios en Blanco-----------------------
[ \s\r\n\t]             {/* Espacios se ignoran */}

//-----------> FIN DE CADENA Y ERRORES------------------
<<EOF>>               return 'EOF';
.  { var nuevo_error = new Error("Error Léxico","Caracter Incorrecto: "+yytext, yylloc.first_line, yylloc.first_column); listaDeErrores.push(nuevo_error); 
    console.error('Error léxico: \"' + yytext + '\", linea: ' + yylloc.first_line + ', columna: ' + yylloc.first_column);
    return 'INVALIDO' }

// console.error('Error léxico: \"' + yytext + '\", linea: ' + yylloc.first_line + ', columna: ' + yylloc.first_column);

/lex
// ################## ANALIZADOR SINTACTICO ######################
// -------> Precedencia
%{
    //Dato Asociado
    const {TipoDato} = require("../Interprete/Expresion.js");

    //Expresion:
    const Dato = require("../Interprete/exprecion/Dato.js");
    const Aritmetica = require("../Interprete/exprecion/Aritmeticas.js");
    const Ternario = require("../Interprete/exprecion/Ternarios.js");
    const Negativo = require("../Interprete/exprecion/Negativo.js");

    //Instruccion:
    const Print = require("../Interprete/instruccion/Print.js");
    const Declarar = require("../Interprete/instruccion/Declarar.js");
%}

%left 'INTEROGACION' cast
%left 'OR'
%left 'AND'
%right 'NOT'
%left 'DOBLEIGUAL', 'DIFERENCIACION', 'MENORIGUAL', 'MENOR', 'MAYORIGUAL', 'MAYOR'
%left 'MAS', 'MENOS' 
%left 'MULTI', 'DIVICION', 'MODULO'
%left 'POW'
%left 'PARENTESIS_A', 'PARENTESIS_C'
%left umenos

// -------> Simbolo Inicial
%start inicio


%% // ------> Gramatica

inicio : lista_instrucciones EOF { var final={'errores': listaDeErrores}; $$ = $1, final; listaDeErrores=[] ; return $$; }
                                //var final={'errores': listaDeErrores}; listaDeErrores=[]; return final;
;

lista_instrucciones : lista_instrucciones instruccion        { $$ = $1; $$.push($2); }
    | instruccion                   { $$ = []; $$.push($1); } //aqui se crea una lista de instrucciones y las cuales posteriormente se recorren
;

instruccion : print         { $$ = $1 } 
    | variables             { $$ = $1 }
	| error PYC 	        { var nuevo_error = new Error("Error Sintáctico","Recuperado con: "+yytext, this._$.first_line, this._$.first_column); listaDeErrores.push(nuevo_error);
                            console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);}
;

variables : INT rep_iden PUNTOYCOMA                                     { $$ = new Declarar($2, TipoDato.INT, "ERROR_1", @1.first_line, @1.first_column); }
    | INT rep_iden IGUAL expresion PUNTOYCOMA                           { $$ = new Declarar($2, TipoDato.INT, $4, @1.first_line, @1.first_column); }
    | STD DOBLEDOSPUNTOS STRING rep_iden PUNTOYCOMA                     { $$ = new Declarar($4, TipoDato.CADENA, "ERROR_2", @1.first_line, @1.first_column); }
    | STD DOBLEDOSPUNTOS STRING rep_iden IGUAL expresion PUNTOYCOMA     { $$ = new Declarar($4, TipoDato.CADENA, $6, @1.first_line, @1.first_column); }
    | CHAR rep_iden PUNTOYCOMA                                          { $$ = new Declarar($2, TipoDato.CHAR, "ERROR_3", @1.first_line, @1.first_column); }
    | CHAR rep_iden IGUAL expresion PUNTOYCOMA                          { $$ = new Declarar($2, TipoDato.CHAR, $4, @1.first_line, @1.first_column); }
    | BOOL rep_iden PUNTOYCOMA                                          { $$ = new Declarar($2, TipoDato.BOOLEAN, "ERROR_4", @1.first_line, @1.first_column); }
    | BOOL rep_iden IGUAL expresion PUNTOYCOMA                          { $$ = new Declarar($2, TipoDato.BOOLEAN, $4, @1.first_line, @1.first_column); }
    | DOUBLE rep_iden PUNTOYCOMA                                        { $$ = new Declarar($2, TipoDato.DOUBLE, "ERROR_5", @1.first_line, @1.first_column); }
    | DOUBLE rep_iden IGUAL expresion PUNTOYCOMA                        { $$ = new Declarar($2, TipoDato.DOUBLE, $4, @1.first_line, @1.first_column); }
    | ID IGUAL expresion PUNTOYCOMA                                     { $$ = new Declarar($1, $3, "RENOMBRAR", @1.first_line, @1.first_column); }
;

rep_iden : rep_iden COMA ID                                 { $$ = $1 ; $$.push(new Dato($3, TipoDato.ID, @1.first_line, @1.first_column)); }
    | ID                                                    { $$ = [] ;  $$.push(new Dato($1, TipoDato.ID, @1.first_line, @1.first_column)); }
;

print : COUT DOBLEMENOR expresion PUNTOYCOMA                    { $$ = new Print($3, @1.first_line, @1.first_column); }
    | COUT DOBLEMENOR expresion DOBLEMENOR ENDL PUNTOYCOMA      {  }
;

ternario : expresion INTEROGACION expresion DOSPUNTOS expresion     { $$ = new Ternario($1, $3, $5, @1.first_line, @1.first_column); }
;

expresion : ENTERO    	{ $$ = new Dato($1, TipoDato.INT, @1.first_line, @1.first_column); }
	| NUMERODECIMA 		{ $$ = new Dato($1, TipoDato.DOUBLE, @1.first_line, @1.first_column); }
    | CARACTER          { $$ = new Dato($1.replace(/^'|'$/g, ''), TipoDato.CHAR, @1.first_line, @1.first_column); }
    | TRUE              { $$ = new Dato($1, TipoDato.BOOLEAN, @1.first_line, @1.first_column); }
    | FALSE             { $$ = new Dato($1, TipoDato.BOOLEAN, @1.first_line, @1.first_column); }
    | ID	    		{ $$ = new Dato($1, TipoDato.ID, @1.first_line, @1.first_column); }
    | TEXTO	    	    { $$ = new Dato($1, TipoDato.CADENA, @1.first_line, @1.first_column); }
    | expresion MAS expresion       { $$ = new Aritmetica($1 ,$2 ,$3, @1.first_line, @1.first_column); }
    | expresion MENOS expresion     { $$ = new Aritmetica($1 ,$2 ,$3, @1.first_line, @1.first_column); }
    | expresion MULTI expresion     { $$ = new Aritmetica($1 ,$2 ,$3, @1.first_line, @1.first_column); }
    | expresion DIVICION expresion  { $$ = new Aritmetica($1 ,$2 ,$3, @1.first_line, @1.first_column); }
    | POW PARENTESIS_A expresion COMA expresion PARENTESIS_C { $$ = new Aritmetica($3 ,"pow" ,$5, @1.first_line, @1.first_column); }
    | expresion MODULO expresion    { $$ = new Aritmetica($1 ,$2 ,$3, @1.first_line, @1.first_column); }
    | MENOS expresion  %prec umenos { $$ = new Negativo($2, @1.first_line, @1.first_column); }
    | expresion DOBLEIGUAL expresion       { $$ = new Aritmetica($1 ,$2 ,$3, @1.first_line, @1.first_column); }
    | expresion DIFERENCIACION expresion       { $$ = new Aritmetica($1 ,$2 ,$3, @1.first_line, @1.first_column); }
    | expresion MENORIGUAL expresion       { $$ = new Aritmetica($1 ,$2 ,$3, @1.first_line, @1.first_column); }
    | expresion MENOR expresion       { $$ = new Aritmetica($1 ,$2 ,$3, @1.first_line, @1.first_column); }
    | expresion MAYORIGUAL expresion       { $$ = new Aritmetica($1 ,$2 ,$3, @1.first_line, @1.first_column); }
    | expresion MAYOR expresion       { $$ = new Aritmetica($1 ,$2 ,$3, @1.first_line, @1.first_column); }
    | ternario                        {$$ = $1;}
    | expresion OR expresion            { $$ = new Aritmetica($1 ,$2 ,$3, @1.first_line, @1.first_column); }
    | expresion AND expresion           { $$ = new Aritmetica($1 ,$2 ,$3, @1.first_line, @1.first_column); }
    | NOT expresion                     { $$ = new Aritmetica($2 ,$1 ,$2, @1.first_line, @1.first_column); }
;