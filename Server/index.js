const parser = require("./Analizador/parser.js"); //para invocar otros archivos que son necesarios, es decir importamos

//Ingreso de la entrada
let entrada = `
    23-
`;

//Analizamos la entrada
let resultado = parser.parse(entrada);

//Mostramos el resultado en consola
console.log(resultado);