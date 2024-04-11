const Analizar = require("../Analizador/parser.js");

//const variables = require("../Interprete/instruccion/Variables.js");

let entrada = `

    // Logicos
    int nombre = 2;
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
