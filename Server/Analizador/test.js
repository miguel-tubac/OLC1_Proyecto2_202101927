const Analizar = require("../Analizador/parser.js");
const Instruccion = require("../Interprete/Instruccion.js");

let entrada = `
    // Negacion
    /*cout << -1 +2;
    cout << -0.2;
    couT << -0.2--0.2;
    */

    // Modulo
    /*cout << 5 % 3 ;
    cout << 4 % 0.5;
    couT << 2.2 % 2;
    cout << 4.0 % 0.5;
    cout << 2 % 2 + 2 % 2;
    */

    // Potencia
    /*cout << pow(2,2) ;
    cout << pow(4,0.5);
    couT << pow(2.2,2);
    cout << pow(4.0,0.5);
    cout << pow(2,2) + pow(2,2);
    */

    // Divicion
    /*cout << 3 / 1 ;
    cout << 3 / 3.2;
    couT << 1 / '2';
    cout << 3.2 / 4;
    cout << 3.2 / 4.3;
    couT << 2.2 / '2';
    cout << '3' / 1;
    cout << '3' / 1.1;
    */

    // Multiplicacion
    /*cout << 3 * 1 ;
    cout << 3 * 3.2;
    couT << 1 * '2';
    cout << 3.2 * 4;
    cout << 3.2 * 4.3;
    couT << 2 * '2';
    cout << '3' * 1;
    cout << '3' * 1.1;
    */

    // Resta
    /*cout << 3-1 ;
    cout << 3 - 3.2;
    cout << 3 - true;
    couT << 1 - '2';
    cout << 3.2 - 4;
    cout << 3.2 - 4.3;
    cout << 1.1 - faLSe;
    couT << 2 - '2';
    cout << faLSe - 1;
    cout << true - 0.5;
    cout << '3' - 1;
    cout << '3' - 1.1;
    */

    // Suma
    /*cout << 3+1 ;
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
    couT << "Miguel Adrian\'"+25;
    */

    //hola miguel
    
    /*
        afdofd
    */
`;

let resultado = Analizar.parse(entrada);

resultado.forEach(element => {
    element.interpretar(null);
});
