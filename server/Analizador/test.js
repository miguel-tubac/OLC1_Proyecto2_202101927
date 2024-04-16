const Analizar = require("./parser.js");
const Entorno = require("../Interprete/entorno/Entorno.js")




let entrada = `

    int a;
    cout << 2 < 11 ? "23" : "12" ;

`;


let resultado = Analizar.parse(entrada);

let entonoGlobal = new Entorno("GLOBAL", null);
resultado.forEach(element => {
    element.interpretar(entonoGlobal);
});

