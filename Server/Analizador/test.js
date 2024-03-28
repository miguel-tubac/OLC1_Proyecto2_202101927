const Analizar = require("../Analizador/parser.js");
const Instruccion = require("../Interprete/Instruccion.js");

let entrada = `
    cout << 3+1 ;
    cout << 3 + 3.2;
    cout << 3.2 + 4;
    cout << 3 + true;
    cout << faLSe + 1;
    couT << 1+'2';
    couT << '2'+2;
    couT << 1+"HOLA";
    couT << "Miguel\n"+25;
    couT << "Miguel\\\\";
    couT << "\\"sdfsds";
    couT << "Miguel\t"+25;
    couT << "\'Miguel Adrian\'"+25;
    //hola miguel
    
    /*
        afdofd
    */
`;

let resultado = Analizar.parse(entrada);

resultado.forEach(element => {
    element.interpretar(null);
});
