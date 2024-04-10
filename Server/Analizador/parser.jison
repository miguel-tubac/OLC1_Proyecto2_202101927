// ################### ANALIZADOR LEXICO #######################
%{
    var cadena="";

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

//---------TIPOS DE DATOS------------------------------
"true"                      { return 'TRUE'; }
"false"                     { return 'FALSE'; }

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
.  { console.error('Error léxico: \"' + yytext + '\", linea: ' + yylloc.first_line + ', columna: ' + yylloc.first_column);  }


/lex
// ################## ANALIZADOR SINTACTICO ######################
// -------> Precedencia
%{
    //Aqui se inporta todas las clases que se creen para la ejecucion:
    const Dato = require("../Interprete/exprecion/Dato.js");
    const Print = require("../Interprete/instruccion/Principio.js");
    const Aritmetica = require("../Interprete/exprecion/Aritmetica.js");
    const Ternario = require("../Interprete/exprecion/Ternarios.js");
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

inicio : lista_instrucciones EOF { $$ = $1; return $$; }
;

lista_instrucciones : lista_instrucciones instruccion        { $$ = $1; $$.push($2); }
    | instruccion                   { $$ = []; $$.push($1); } //aqui se crea una lista de instrucciones y las cuales posteriormente se recorren
;

instruccion : print         { $$ = $1 }   
	| error PYC 	        {console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);}
;


print : COUT DOBLEMENOR expresion PUNTOYCOMA                    { $$ = new Print($3); }
    | COUT DOBLEMENOR expresion DOBLEMENOR ENDL PUNTOYCOMA      {  }
;

ternario : expresion INTEROGACION expresion DOSPUNTOS expresion     { $$ = new Ternario($1, $3, $5); }
;

expresion : ENTERO    	{ $$ = new Dato($1, 'INT'); }
	| NUMERODECIMA 		{ $$ = new Dato($1, 'DOUBLE'); }
    | CARACTER          { $$ = new Dato($1.replace(/^'|'$/g, ''), 'CARACTER'); }
    | TRUE              { $$ = new Dato($1.toUpperCase(), 'BOOLEAN'); }
    | FALSE             { $$ = new Dato($1.toUpperCase(), 'BOOLEAN'); }
    | ID	    		{ $$ = new Dato($1, 'ID'); }
    | TEXTO	    	    { $$ = new Dato($1, 'STRING'); }
    | expresion MAS expresion       { $$ = new Aritmetica($1 ,$2 ,$3); }
    | expresion MENOS expresion     { $$ = new Aritmetica($1 ,$2 ,$3); }
    | expresion MULTI expresion     { $$ = new Aritmetica($1 ,$2 ,$3); }
    | expresion DIVICION expresion  { $$ = new Aritmetica($1 ,$2 ,$3); }
    | POW PARENTESIS_A expresion COMA expresion PARENTESIS_C { $$ = new Aritmetica($3 ,"pow" ,$5); }
    | expresion MODULO expresion    { $$ = new Aritmetica($1 ,$2 ,$3); }
    | MENOS expresion  %prec umenos { $$ = new Aritmetica($2 ,"negativo",$2); }
    | expresion DOBLEIGUAL expresion       { $$ = new Aritmetica($1 ,$2 ,$3); }
    | expresion DIFERENCIACION expresion       { $$ = new Aritmetica($1 ,$2 ,$3); }
    | expresion MENORIGUAL expresion       { $$ = new Aritmetica($1 ,$2 ,$3); }
    | expresion MENOR expresion       { $$ = new Aritmetica($1 ,$2 ,$3); }
    | expresion MAYORIGUAL expresion       { $$ = new Aritmetica($1 ,$2 ,$3); }
    | expresion MAYOR expresion       { $$ = new Aritmetica($1 ,$2 ,$3); }
    | ternario                        {$$ = $1;}
;