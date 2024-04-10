const Analizar = require("../Analizador/parser.js");
const Instruccion = require("../Interprete/Instruccion.js");
const Ternario = require("../Interprete/exprecion/Ternarios.js");

let entrada = `
    cout << 10 >= 11;
    cout << 18 >= 17 ? true : false ;

    //Operadores Relacionales
    /*cout << 1 == 1;
    cout << 1 == 1.0;
    cout << 1 == '1';
    cout << 1.2 == 1;
    cout << 1.2 == 1.2;
    cout << 1.2 == '2';
    cout << '1' == 1;
    cout << '1' == 1.0;
    cout << '1' == '2';
    */

`;

let resultado = Analizar.parse(entrada);

resultado.forEach(element => {
    element.interpretar(null);
});
