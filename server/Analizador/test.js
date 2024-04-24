const Analizar = require("./parser.js");
const Entorno = require("../Interprete/entorno/Entorno.js")
const {TipoDato} = require("../Interprete/Expresion.js");
const Print = require("../Interprete/instruccion/Print.js");



let entrada = `

execute hola_mundo();

void hola_mundo(){
    int a;
	cout << a << endl;
    cout << "Hola";
}



`;

//var devuelve = "";
let resultado = Analizar.parse(entrada);
//console.log(resultado);
let entonoGlobal = new Entorno("GLOBAL", null);
console.log(resultado);

//let reult = [EXECUTE, FUNCION, ASIGNACION, ASIGNACION, FUNCION]
//console.log(resultado.length);
for (let i =0; i< resultado.length; i ++){
    //console.log(resultado[i]);
	//Aca afura se interpreta todo lo que no se execute
	if(resultado[i].tipo != "EXECUTE"){
        resultado[i].interpretar(entonoGlobal);
		//console.log("Interpretando1: " + resultado[i]);
        //console.log(resultado[i]);
		//console.log(resultado[i].instrucciones[i]);
	}
}

let executeIniciado = false;
for (let i =0; i< resultado.length; i ++){
    //resultado[i].interpretar(entonoGlobal);
	//Aca afura se interpreta todo lo que no se execute
	if(resultado[i].tipo =="EXECUTE" && !executeIniciado){
        resultado[i].interpretar(entonoGlobal);
		executeIniciado = true;
		//console.log(resultado[i]);
	}
	//Aca es cuando salga otro execute
	else if (resultado[i].tipo == "EXECUTE" && executeIniciado){
		console.log("Error semnatico solo puede aver un execute"); 
	}
}

console.log(Print.obtenerValorTexto());

