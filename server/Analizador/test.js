const Analizar = require("../Analizador/parser.js");
const {TipoDato} = require("../Interprete/Expresion.js");

let entrada = `

    // Logicos
    int e,c = 2;
    //int a,b,c,d;

`;

let resultado = Analizar.parse(entrada);

resultado.forEach(element => {
    element.interpretar(null);
});

// resultado.errores.forEach(error => {
//     console.log(error);
// })
