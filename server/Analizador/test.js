const Analizar = require("../Analizador/parser.js");
const Instruccion = require("../Interprete/Instruccionn.js");
//const Ternario = require("../Interprete/exprecion/Ternarios.js");
//const Error = require("../Interprete/instruccion/Errores.js");

let entrada = `

    // Logicos
    cout <<  !5>2;
    cout << false && true;
    cout << 10 == 11 || 2==3;
    


    // Ternarios
    //cout << 2 >= 11 ? "23" : "12" ;
    

`;

let resultado = Analizar.parse(entrada);

resultado.forEach(element => {
    element.interpretar(null);
});

// resultado.errores.forEach(error => {
//     console.log(error);
// })
