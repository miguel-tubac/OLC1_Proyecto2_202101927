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
"endl"                       { return 'ENDL'; }

"<<"                         { return 'DOBLEMENOR'; }
";"                          { return 'PUNTOYCOMA'; }

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
%}

//%left 'MAS' 'MENOS'

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
;