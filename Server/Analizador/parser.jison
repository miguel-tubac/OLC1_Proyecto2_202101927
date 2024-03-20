// ################### ANALIZADOR LEXICO #######################
%lex
%options case-insensitive 

// ---------> Expresiones Regulares
entero  [0-9]+;
numero_decimal ([0-9]+\.[0-9]+);
comentario (\/\/.*|\/\*[\s\S]*?\*\/);
id [a-zA-Z][a-zA-Z0-9_]*|[\"][^\n\"]*[\"];


%%
// -----> Reglas Lexicas

{entero}                	 { return 'ENTERO'; }
{numero_decimal}			 { return 'NUMERODECIMA'; }
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

//%left 'MAS' 'MENOS'

// -------> Simbolo Inicial
%start inicio


%% // ------> Gramatica

inicio : lista_instrucciones EOF {  }
;

lista_instrucciones : lista_instrucciones instruccion        {  }
    | instruccion                   {  }
;

instruccion : print         {  }   
	| error PYC 	{console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);}
;


print : expresion    {  }
;

expresion : ENTERO    	{ $$ = $1; }
	| NUMERODECIMA 		{ $$ = $1; }
    | ID	    		{ $$ = $1; }
;