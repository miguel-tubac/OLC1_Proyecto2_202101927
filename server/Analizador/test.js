const Analizar = require("./parser.js");
const Entorno = require("../Interprete/entorno/Entorno.js")
const {TipoDato} = require("../Interprete/Expresion.js");
const Print = require("../Interprete/instruccion/Print.js");



let entrada = `

execute hola_mundo();

void hola_mundo(){
	//bool dato3 [] = [true, false];
	std::string dato3 [] = ["miguel", "Hola"];
	//int dato4 [] = [5,6,7];
    //int a = 1;
	//asd;
	dato3 [0] = dato3 [1];
	//dato3 [0] = dato4 [a];
	//cout << a << endl;
    cout << a;
	cout << ws;
}



`;

let resultado = Analizar.parse(entrada);
//console.log(resultado);
let entonoGlobal = new Entorno("GLOBAL", null);
//console.log(resultado);

resultado.Resultado.forEach(element => {
	//console.log(resultado[i]);
	//Aca afura se interpreta todo lo que no se execute
	if(element.tipo != "EXECUTE"){
        element.interpretar(entonoGlobal);
		//console.log("Interpretando1: " + resultado[i]);
        //console.log(resultado[i]);
		//console.log(resultado[i].instrucciones[i]);
	}
});


let executeIniciado = false;
resultado.Resultado.forEach(element => {
	//resultado[i].interpretar(entonoGlobal);
	//Aca afura se interpreta todo lo que no se execute
	if(element.tipo =="EXECUTE" && !executeIniciado){
        element.interpretar(entonoGlobal);
		executeIniciado = true;
		//console.log(resultado[i]);
	}
	//Aca es cuando salga otro execute
	else if (element.tipo == "EXECUTE" && executeIniciado){
		console.log("Error semnatico solo puede aver un execute"); 
	}
});

resultado.Errores.forEach(element => {
	Print.agregarTexto(element.tipo +": "+ element.descripcion +" linea "+ element.linea +" columna "+ element.columna);
	//Errores: 
	// 	Errores {
	// 	  tipo: 'Error Sintáctico',
	// 	  descripcion: 'Recuperado con: ;',
	// 	  linea: 6,
	// 	  columna: 5
	// 	}
	// ]
});

console.log(Print.obtenerValorTexto());

