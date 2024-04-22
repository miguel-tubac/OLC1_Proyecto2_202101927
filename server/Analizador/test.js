const Analizar = require("./parser.js");
const Entorno = require("../Interprete/entorno/Entorno.js")
const {TipoDato} = require("../Interprete/Expresion.js");



let entrada = `

void hola_mundo(){
    cout << 5/0;
}

hola_mundo();


`;

var devuelve = "";
let resultado = Analizar.parse(entrada);
//console.log(resultado);
let entonoGlobal = new Entorno("GLOBAL", null);
//console.log(resultado);

//Esta es la primera pasada para guardar la informacion del metodo
// resultado.forEach(element =>{
//     //let metod = element.interpretar(entonoGlobal);
//     if (element.tipo == 'METODO'){
//         element.interpretar(entonoGlobal);
//     }
// });


// Esta es la segunda pasada:
let parcial;
resultado.forEach(element => {
    parcial = element.interpretar(entonoGlobal);
    console.log(parcial);
    if (parcial.tipo === "PRINT"){
        if (parcial.endl == TipoDato.ENDL){
            //Aca se evalua para que pueda imprimir un areglo
            if (Array.isArray(parcial.expresion.valor)){
                devuelve += JSON.stringify(parcial.expresion.valor)+ "\n";
            }
            else{
                devuelve += parcial.expresion.valor + "\n";
            }
        }
        else if(Array.isArray(parcial.expresion.valor)){
            devuelve += JSON.stringify(parcial.expresion.valor)
        }
        else{
            devuelve += parcial.expresion.valor;
        }
    }
});

console.log(devuelve);
