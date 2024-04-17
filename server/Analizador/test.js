const Analizar = require("./parser.js");
const Entorno = require("../Interprete/entorno/Entorno.js")
const {TipoDato} = require("../Interprete/Expresion.js");




let entrada = `
couT << "mig" + "uel";
`;

var devuelve="";
let resultado = Analizar.parse(entrada);
//console.log(resultado);
let entonoGlobal = new Entorno("GLOBAL", null);
//console.log(resultado);


resultado.forEach(element => {
    //console.log(element.interpretar(entonoGlobal));
    if (element.interpretar(entonoGlobal).tipo === "PRINT"){
        if (element.interpretar(entonoGlobal).endl == TipoDato.ENDL){
            devuelve += element.interpretar(entonoGlobal).expresion.valor + "\n";
        }else{
            devuelve += element.interpretar(entonoGlobal).expresion.valor;
        }
    }
});

console.log(devuelve);
