// ################### ANALIZADOR LEXICO #######################
%lex
%options case-insensitive 

// ---------> Expresiones Regulares
numerodecimal ([0-9]+[.][0-9]+);
entero  [0-9]+;
comentario (\/\/.*|\/\*[\s\S]*?\*\/);
id [a-zA-Z][a-zA-Z0-9_]*|[\"][^\n\"]*[\"];


%%
// -----> Reglas Lexicas
"cout"                      { return 'COUT'; }
"endl"                      { return 'ENDL'; }
"pow"                       { return 'POW'; }

"<<"                         { return 'DOBLEMENOR'; }
";"                          { return 'PUNTOYCOMA'; }
","                          { return 'COMA'; }
"("                          { return 'PARENTESIS_A'; }
")"                          { return 'PARENTESIS_C'; }
"+"                          { return 'MAS'; }
"-"                          { return 'MENOS'; }
"*"                          { return 'MULTI'; }
"/"                          { return 'DIVICION'; }
"%"                          { return 'MODULO'; }

{numerodecimal}			     { return 'NUMERODECIMA'; }
{entero}                	 { return 'ENTERO'; }
{comentario}				 {}
{id}						 { return 'ID'; }

// -----> Espacios en Blanco
[ \s\r\n\t]             {/* Espacios se ignoran */}

// -----> FIN DE CADENA Y ERRORES
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
%}

%left 'MAS', 'MENOS' 
%left 'MULTI', 'DIVICION', 'MODULO'
%left 'POW'

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

expresion : ENTERO    	{ $$ = new Dato($1, 'INT'); }
	| NUMERODECIMA 		{ $$ = new Dato($1, 'DOUBLE'); }
    | ID	    		{ $$ = new Dato($1, 'STRING'); }
    | expresion MAS expresion       { $$ = new Aritmetica($1 ,$2 ,$3); }
    | expresion MENOS expresion     { $$ = new Aritmetica($1 ,$2 ,$3); }
    | expresion MULTI expresion     { $$ = new Aritmetica($1 ,$2 ,$3); }
    | expresion DIVICION expresion  { $$ = new Aritmetica($1 ,$2 ,$3); }
    | expresion MODULO expresion    { $$ = new Aritmetica($1 ,$2 ,$3); }
;