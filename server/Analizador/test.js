const Analizar = require("./parser.js");
const Entorno = require("../Interprete/entorno/Entorno.js")
const {TipoDato} = require("../Interprete/Expresion.js");




let entrada = `
    cout << "dos";
    cout << "MMMM" << endl;
    cout << "asdd";
`;

var devuelve="";
let resultado = Analizar.parse(entrada);

let entonoGlobal = new Entorno("GLOBAL", null);
resultado.forEach(element => {
    if (element.interpretar(entonoGlobal).tipo === "PRINT"){
        if (element.interpretar(entonoGlobal).endl == TipoDato.ENDL){
            devuelve += element.interpretar(entonoGlobal).expresion.valor + "\n";
        }else{
            devuelve += element.interpretar(entonoGlobal).expresion.valor;
        }
    }
});

console.log(devuelve);
