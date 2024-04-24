const Analizar = require("./parser.js");
const Entorno = require("../Interprete/entorno/Entorno.js")
const {TipoDato} = require("../Interprete/Expresion.js");
const Print = require("../Interprete/instruccion/Print.js");



let entrada = `

void hola_mundo(bool c){
	int der = 23;
	int ser = 2;
    cout << der + ser << endl;
	cout << hola() << endl;
}

void hola( ){
    cout << "5555" << endl;
}

execute hola_mundo();

`;

var devuelve = "";
let resultado = Analizar.parse(entrada);
//console.log(resultado);
let entonoGlobal = new Entorno("GLOBAL", null);
//console.log(resultado);

//let reult = [EXECUTE, FUNCION, ASIGNACION, ASIGNACION, FUNCION]
//console.log(resultado.length);
for (let i =0; i< resultado.length; i ++){
    //console.log(resultado[i]);
	//Aca afura se interpreta todo lo que no se execute
	if(resultado[i].tipo != "EXECUTE"){
        resultado[i].interpretar(entonoGlobal);
		//console.log("Interpretando1: " + resultado[i]);
        //console.log(resultado[i]);
	}
}

let executeIniciado = false;
for (let i =0; i< resultado.length; i ++){
    //resultado[i].interpretar(entonoGlobal);
	//Aca afura se interpreta todo lo que no se execute
	if(resultado[i].tipo =="EXECUTE" && !executeIniciado){
        resultado[i].interpretar(entonoGlobal);
		executeIniciado = true;
		//console.log("Interpretando2: " + resultado[i]);
	}
	//Aca es cuando salga otro execute
	else if (resultado[i].tipo == "EXECUTE" && executeIniciado){
		console.log("Error semnatico solo puede aver un execute"); 
	}
}

console.log(Print.obtenerValorTexto());


// // Esta es la pasada para obtener los datos de imprecion:
// let parcial;
// resultado.forEach(element => {
//     parcial = element;
//     //console.log(parcial);
//     if (parcial.tipo === "PRINT"){
//         if (parcial.endl == TipoDato.ENDL){
//             //Aca se evalua para que pueda imprimir un areglo
//             if (Array.isArray(parcial.expresion.valor)){
//                 devuelve += JSON.stringify(parcial.expresion.valor)+ "\n";
//             }
//             else{
//                 devuelve += parcial.expresion.valor + "\n";
//             }
//         }
//         else if(Array.isArray(parcial.expresion.valor)){
//             devuelve += JSON.stringify(parcial.expresion.valor)
//         }
//         else{
//             devuelve += parcial.expresion.valor;
//         }
//     }
// });

// console.log(devuelve);
