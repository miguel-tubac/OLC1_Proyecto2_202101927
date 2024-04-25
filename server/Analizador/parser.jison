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
"new"                       { return 'NEW'; }
"void"                      { return 'VOID'; }
"execute"                   { return 'EXECUTE'; }
"break"                     { return 'BREAK'; }
"continue"                  { return 'CONTINUE'; }
"return"                    { return 'RETURN'; }

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
"["                         { return 'CORCHETE_A'; }
"]"                         { return 'CORCHETE_C'; }
"{"                         { return 'LLAVE_A'; }
"}"                         { return 'LLAVE_C'; }

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
    console.error('Error léxico: \"' + yytext + '\", linea: ' + yylloc.first_line + ', columna: ' + yylloc.first_column);}

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
    const Casteo = require("../Interprete/exprecion/Casteos.js");
    const Incre_Decre = require("../Interprete/exprecion/Incre_Decre.js")
    const CallFuncion = require("../Interprete/Funciones/CallFuncion.js");

    //Instruccion:
    const Print = require("../Interprete/instruccion/Print.js");
    const Declarar = require("../Interprete/instruccion/Declarar.js");
    const Vectores = require("../Interprete/instruccion/Vectores.js")
    const AccesoVector = require("../Interprete/instruccion/AccesoVector.js");
    const ReasignarVector = require("../Interprete/instruccion/ReasignarVector.js");
    const Execute = require("../Interprete/Funciones/Execute.js");
    const DecFuncion = require("../Interprete/Funciones/DecFuncion.js");
    const Return = require("../Interprete/instruccion/Return.js");
    const Break = require("../Interprete/instruccion/Break.js");
    const Continue = require("../Interprete/instruccion/Continue.js");
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

inicio : lista_instrucciones EOF { var final={'Errores': listaDeErrores, 'Resultado': $1}; listaDeErrores=[]; return final; }
                                //var final={'errores': listaDeErrores}; $$ = $1, final; listaDeErrores=[] ; return $$;
;

lista_instrucciones : lista_instrucciones instruccion        { $$ = $1; $$.push($2); }
    | instruccion    { $$ = []; $$.push($1); } //aqui se crea una lista de instrucciones y las cuales posteriormente se recorren
;

instruccion :  delcarar_metodo       { $$ = $1 }
    | variables             { $$ = $1 }
    | casteos               { $$ = $1 }
    | execute               {$$ = $1}
	| error PUNTOYCOMA	        {$$ = ""; var nuevo_error = new Error("Error Sintáctico","Recuperado con: "+yytext, this._$.first_line, this._$.first_column); listaDeErrores.push(nuevo_error);
                            console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);}
    | error LLAVE_C	    {$$ = ""; var nuevo_error = new Error("Error Sintáctico","Recuperado con: "+yytext, this._$.first_line, this._$.first_column); listaDeErrores.push(nuevo_error);
                            console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);}
;

execute : EXECUTE llamada_metodo PUNTOYCOMA     { $$ = new Execute($2, @1.first_line, @1.first_column); }
;

cuerpo : print                  { $$ = $1 }
    | llamada_metodo            { $$ = $1 }
    | incre_decre               { $$ = $1 }
    | declarar_vector           { $$ = $1 }
    | variables                 { $$ = $1 }
    | casteos                   { $$ = $1 }
    | sentencias_contro         { $$ = $1 }
    | error PUNTOYCOMA	        {$$ = []; var nuevo_error = new Error("Error Sintáctico","Recuperado con: "+yytext, this._$.first_line, this._$.first_column); listaDeErrores.push(nuevo_error);
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

print : COUT DOBLEMENOR expresion PUNTOYCOMA                    { $$ = new Print($3, null, @1.first_line, @1.first_column); }
    | COUT DOBLEMENOR expresion DOBLEMENOR ENDL PUNTOYCOMA      { $$ = new Print($3, TipoDato.ENDL, @1.first_line, @1.first_column); }
;

casteos : INT rep_iden IGUAL PARENTESIS_A INT PARENTESIS_C expresion PUNTOYCOMA         { $$ = new Casteo($2, TipoDato.INT, $7, "SI", @1.first_line, @1.first_column); }
    | ID IGUAL PARENTESIS_A INT PARENTESIS_C expresion PUNTOYCOMA                       { $$ = new Casteo($1, TipoDato.INT, $6, "NO", @1.first_line, @1.first_column); }
    | DOUBLE rep_iden IGUAL PARENTESIS_A DOUBLE PARENTESIS_C expresion PUNTOYCOMA       { $$ = new Casteo($2, TipoDato.DOUBLE, $7, "SI", @1.first_line, @1.first_column); }
    | ID IGUAL PARENTESIS_A DOUBLE PARENTESIS_C expresion PUNTOYCOMA                    { $$ = new Casteo($1, TipoDato.DOUBLE, $6, "NO", @1.first_line, @1.first_column); }
    | STD DOBLEDOSPUNTOS STRING rep_iden IGUAL PARENTESIS_A STD DOBLEDOSPUNTOS STRING PARENTESIS_C expresion PUNTOYCOMA       { $$ = new Casteo($4, TipoDato.CADENA, $11, "SI", @1.first_line, @1.first_column); }
    | ID IGUAL PARENTESIS_A STD DOBLEDOSPUNTOS STRING PARENTESIS_C expresion PUNTOYCOMA                                       { $$ = new Casteo($1, TipoDato.CADENA, $8, "NO", @1.first_line, @1.first_column); }
    | CHAR rep_iden IGUAL PARENTESIS_A CHAR PARENTESIS_C expresion PUNTOYCOMA           { $$ = new Casteo($2, TipoDato.CHAR, $7, "SI", @1.first_line, @1.first_column); }
    | ID IGUAL PARENTESIS_A CHAR PARENTESIS_C expresion PUNTOYCOMA                      { $$ = new Casteo($1, TipoDato.CHAR, $6, "NO", @1.first_line, @1.first_column); }
;

incre_decre : ID MAS MAS PUNTOYCOMA         { $$ = new Incre_Decre($1, "++", @1.first_line, @1.first_column); }
    | ID MENOS MENOS PUNTOYCOMA             { $$ = new Incre_Decre($1, "--", @1.first_line, @1.first_column); }
;

declarar_vector : INT rep_iden CORCHETE_A CORCHETE_C IGUAL NEW INT CORCHETE_A lista_valores CORCHETE_C PUNTOYCOMA   { $$ = new Vectores($2, TipoDato.INT, $9, @1.first_line, @1.first_column); }
    | INT rep_iden CORCHETE_A CORCHETE_C IGUAL CORCHETE_A lista_valores CORCHETE_C PUNTOYCOMA   { $$ = new Vectores($2, TipoDato.INT, $7, @1.first_line, @1.first_column); }
    | INT rep_iden CORCHETE_A CORCHETE_C CORCHETE_A CORCHETE_C IGUAL NEW INT CORCHETE_A lista_valores CORCHETE_C CORCHETE_A lista_valores CORCHETE_C PUNTOYCOMA   {  }
    | INT rep_iden CORCHETE_A CORCHETE_C CORCHETE_A CORCHETE_C IGUAL CORCHETE_A CORCHETE_A lista_valores CORCHETE_C COMA CORCHETE_A lista_valores CORCHETE_C CORCHETE_C PUNTOYCOMA   {  }
    | DOUBLE rep_iden CORCHETE_A CORCHETE_C IGUAL NEW DOUBLE CORCHETE_A lista_valores CORCHETE_C PUNTOYCOMA   { $$ = new Vectores($2, TipoDato.DOUBLE, $9, @1.first_line, @1.first_column); }
    | DOUBLE rep_iden CORCHETE_A CORCHETE_C IGUAL CORCHETE_A lista_valores CORCHETE_C PUNTOYCOMA   { $$ = new Vectores($2, TipoDato.DOUBLE, $7, @1.first_line, @1.first_column); }
    | DOUBLE rep_iden CORCHETE_A CORCHETE_C CORCHETE_A CORCHETE_C IGUAL NEW DOUBLE CORCHETE_A lista_valores CORCHETE_C CORCHETE_A lista_valores CORCHETE_C PUNTOYCOMA   {  }
    | DOUBLE rep_iden CORCHETE_A CORCHETE_C CORCHETE_A CORCHETE_C IGUAL CORCHETE_A CORCHETE_A lista_valores CORCHETE_C COMA CORCHETE_A lista_valores CORCHETE_C CORCHETE_C PUNTOYCOMA   {  }
    | BOOL rep_iden CORCHETE_A CORCHETE_C IGUAL NEW BOOL CORCHETE_A lista_valores CORCHETE_C PUNTOYCOMA   { $$ = new Vectores($2, TipoDato.BOOLEAN, $9, @1.first_line, @1.first_column); }
    | BOOL rep_iden CORCHETE_A CORCHETE_C IGUAL CORCHETE_A lista_valores CORCHETE_C PUNTOYCOMA   { $$ = new Vectores($2, TipoDato.BOOLEAN, $7, @1.first_line, @1.first_column); }
    | BOOL rep_iden CORCHETE_A CORCHETE_C CORCHETE_A CORCHETE_C IGUAL NEW BOOL CORCHETE_A lista_valores CORCHETE_C CORCHETE_A lista_valores CORCHETE_C PUNTOYCOMA   {  }
    | BOOL rep_iden CORCHETE_A CORCHETE_C CORCHETE_A CORCHETE_C IGUAL CORCHETE_A CORCHETE_A lista_valores CORCHETE_C COMA CORCHETE_A lista_valores CORCHETE_C CORCHETE_C PUNTOYCOMA   {  }
    | CHAR rep_iden CORCHETE_A CORCHETE_C IGUAL NEW CHAR CORCHETE_A lista_valores CORCHETE_C PUNTOYCOMA   { $$ = new Vectores($2, TipoDato.CHAR, $9, @1.first_line, @1.first_column); }
    | CHAR rep_iden CORCHETE_A CORCHETE_C IGUAL CORCHETE_A lista_valores CORCHETE_C PUNTOYCOMA   { $$ = new Vectores($2, TipoDato.CHAR, $7, @1.first_line, @1.first_column); }
    | CHAR rep_iden CORCHETE_A CORCHETE_C CORCHETE_A CORCHETE_C IGUAL NEW CHAR CORCHETE_A lista_valores CORCHETE_C CORCHETE_A lista_valores CORCHETE_C PUNTOYCOMA   {  }
    | CHAR rep_iden CORCHETE_A CORCHETE_C CORCHETE_A CORCHETE_C IGUAL CORCHETE_A CORCHETE_A lista_valores CORCHETE_C COMA CORCHETE_A lista_valores CORCHETE_C CORCHETE_C PUNTOYCOMA   {  }
    | STD DOBLEDOSPUNTOS STRING rep_iden CORCHETE_A CORCHETE_C IGUAL NEW STD DOBLEDOSPUNTOS STRING CORCHETE_A lista_valores CORCHETE_C PUNTOYCOMA   { $$ = new Vectores($4, TipoDato.CADENA, $13, @1.first_line, @1.first_column); }
    | STD DOBLEDOSPUNTOS STRING rep_iden CORCHETE_A CORCHETE_C IGUAL CORCHETE_A lista_valores CORCHETE_C PUNTOYCOMA   { $$ = new Vectores($4, TipoDato.CADENA, $9, @1.first_line, @1.first_column); }
    | STD DOBLEDOSPUNTOS STRING rep_iden CORCHETE_A CORCHETE_C CORCHETE_A CORCHETE_C IGUAL NEW STD DOBLEDOSPUNTOS STRING CORCHETE_A lista_valores CORCHETE_C CORCHETE_A lista_valores CORCHETE_C PUNTOYCOMA   {  }
    | STD DOBLEDOSPUNTOS STRING rep_iden CORCHETE_A CORCHETE_C CORCHETE_A CORCHETE_C IGUAL CORCHETE_A CORCHETE_A lista_valores CORCHETE_C COMA CORCHETE_A lista_valores CORCHETE_C CORCHETE_C PUNTOYCOMA   {  }
    | ID CORCHETE_A expresion CORCHETE_C IGUAL expresion PUNTOYCOMA     { $$ = new ReasignarVector($1, $3, $6, @1.first_line, @1.first_column); }
;


lista_valores : lista_valores COMA  expresion               {$1.push($3); $$ = $1;} 
    | expresion                                             {$$ = [$1];}
;

delcarar_metodo : VOID ID PARENTESIS_A PARENTESIS_C LLAVE_A instrucciones_metodo LLAVE_C   { $$ = new DecFuncion($2, null, null, $6, @1.first_line, @1.first_column); }
    | VOID ID PARENTESIS_A parametros PARENTESIS_C LLAVE_A instrucciones_metodo LLAVE_C   { $$ = new DecFuncion($2, null, $4, $7, @1.first_line, @1.first_column); }
    | INT ID PARENTESIS_A parametros PARENTESIS_C LLAVE_A instrucciones_metodo LLAVE_C   { $$ = new DecFuncion($2, TipoDato.INT, $4, $7, @1.first_line, @1.first_column); }
    | INT ID PARENTESIS_A PARENTESIS_C LLAVE_A instrucciones_metodo LLAVE_C   { $$ = new DecFuncion($2, TipoDato.INT, null, $6, @1.first_line, @1.first_column); }
    | DOUBLE ID PARENTESIS_A parametros PARENTESIS_C LLAVE_A instrucciones_metodo LLAVE_C   { $$ = new DecFuncion($2, TipoDato.DOUBLE, $4, $7, @1.first_line, @1.first_column); }
    | DOUBLE ID PARENTESIS_A PARENTESIS_C LLAVE_A instrucciones_metodo LLAVE_C   { $$ = new DecFuncion($2, TipoDato.DOUBLE, null, $6, @1.first_line, @1.first_column); }
    | CHAR ID PARENTESIS_A parametros PARENTESIS_C LLAVE_A instrucciones_metodo LLAVE_C   { $$ = new DecFuncion($2, TipoDato.CHAR, $4, $7, @1.first_line, @1.first_column); }
    | CHAR ID PARENTESIS_A PARENTESIS_C LLAVE_A instrucciones_metodo LLAVE_C   { $$ = new DecFuncion($2, TipoDato.CHAR, null, $6, @1.first_line, @1.first_column); }
    | STD DOBLEDOSPUNTOS STRING ID PARENTESIS_A parametros PARENTESIS_C LLAVE_A instrucciones_metodo LLAVE_C   { $$ = new DecFuncion($4, TipoDato.CADENA, $6, $9, @1.first_line, @1.first_column); }
    | STD DOBLEDOSPUNTOS STRING ID PARENTESIS_A PARENTESIS_C LLAVE_A instrucciones_metodo LLAVE_C   { $$ = new DecFuncion($4, TipoDato.CADENA, null, $8, @1.first_line, @1.first_column); }
    | BOOL ID PARENTESIS_A parametros PARENTESIS_C LLAVE_A instrucciones_metodo LLAVE_C   { $$ = new DecFuncion($2, TipoDato.BOOLEAN, $4, $7, @1.first_line, @1.first_column); }
    | BOOL ID PARENTESIS_A PARENTESIS_C LLAVE_A instrucciones_metodo LLAVE_C   { $$ = new DecFuncion($2, TipoDato.BOOLEAN, null, $6, @1.first_line, @1.first_column); }
;

parametros : parametros COMA tipo ID    { $$ = $1 ; $$.push(new Dato($4, $3, @1.first_line, @1.first_column)); }
    | tipo  ID                          { $$ = [] ;  $$.push(new Dato($2, $1, @1.first_line, @1.first_column)); }
;

tipo : VOID                         { $$ = TipoDato.VOID; }
    | INT                           { $$ = TipoDato.INT; }
    | DOUBLE                        { $$ = TipoDato.DOUBLE; }
    | CHAR                          { $$ = TipoDato.CHAR; }
    | STD DOBLEDOSPUNTOS STRING     { $$ = TipoDato.CADENA; }
    | BOOL                          { $$ = TipoDato.BOOLEAN; }
;

instrucciones_metodo : instrucciones_metodo  cuerpo      {$1.push($2); $$ = $1;} 
    |   cuerpo                                           {$$ = [$1];}
;

llamada_metodo :  ID  PARENTESIS_A PARENTESIS_C   { $$ = new CallFuncion($1, null, @1.first_line, @1.first_column); }
    | ID  PARENTESIS_A lista_valores PARENTESIS_C   { $$ = new CallFuncion($1, $3, @1.first_line, @1.first_column); }
;

sentencias_contro : BREAK PUNTOYCOMA        { $$ = new Break(@1.first_line, @1.first_column);}
    | RETURN expresion PUNTOYCOMA           { $$ = new Return($2, @1.first_line, @1.first_column); }
    | RETURN PUNTOYCOMA                     { $$ = new Return(null, @1.first_line, @1.first_column); }
    | CONTINUE PUNTOYCOMA                   { $$ = new Continue(@1.first_line, @1.first_column); }
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
    | ID CORCHETE_A expresion CORCHETE_C                                    { $$ = new AccesoVector($1, $3, "null", @1.first_line, @1.first_column); }
    | ID CORCHETE_A expresion CORCHETE_C CORCHETE_A expresion CORCHETE_C    { $$ = new AccesoVector($1, $3, $6, @1.first_line, @1.first_column); }
    | llamada_metodo                        { $$ = $1 } //Revisar esto
;