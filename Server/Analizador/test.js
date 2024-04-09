const Analizar = require("../Analizador/parser.js");
const Instruccion = require("../Interprete/Instruccion.js");

let entrada = `
    //Operadores Relacionales
    cout << 1 == 1;
    cout << 1 == 1.0;
    cout << 1 == '1';
    cout << 1.2 == 1;
    cout << 1.2 == 1.2;
    cout << 1.2 == '2';
    cout << '1' == 1;
    cout << '1' == 1.0;
    cout << '1' == '2';

`;

let resultado = Analizar.parse(entrada);

resultado.forEach(element => {
    element.interpretar(null);
});
