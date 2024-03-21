const Analizar = require("../Analizador/parser.js");
const Instruccion = require("../Interprete/Instruccion.js");

let entrada = `
    cout << 3*3 +1 ;
    cout << "Hola mundo";
`;

let resultado = Analizar.parse(entrada);

resultado.forEach(element => {
    element.interpretar(null);
});
