const Analizar = require("./parser.js");
const Entorno = require("../Interprete/entorno/Entorno.js")




let entrada = `
    /*
    int a;
    a = 4;
    int a = 12;
    int w,er,df= 12;
    std::string cadena;
    std::string nombre,migu = "hola";
    cadena = "miguel";
    char var4;
    char var,var2,var5 = 'd';
    var4 = 'j';
    var4 = 'm';
    bool num;
    bool dos, tres, cuatr = false;
    num = true;
    double aa;
    double b,c,d = 12.2;
    aa = 12.2;
    */

`;


let resultado = Analizar.parse(entrada);

let entonoGlobal = new Entorno("GLOBAL", null);
resultado.forEach(element => {
    element.interpretar(entonoGlobal);
});

