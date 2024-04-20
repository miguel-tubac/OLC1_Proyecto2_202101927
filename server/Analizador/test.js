const Analizar = require("./parser.js");
const Entorno = require("../Interprete/entorno/Entorno.js")
const {TipoDato} = require("../Interprete/Expresion.js");



let entrada = `
// Primera forma de vectores
//int b = 2;  //ya
//int dato [] = new int [3];  //ya
//int dato2 [] = new int [b];  //ya
int dato3 [] = new int [2,3,4];  //ya
//int dato4 [] = new int [b,5,b];  //ya

int nuevo1;  //ya
nuevo1 = dato3[2];  //ya
int nuevo2 = dato3[5];  //ya
//cout << nuevo1 << endl;  //ya
//cout << nuevo2; //ya

int nuevo3;
int a = 1;
nuevo3 = dato3[a];
//int nuevo4 = dato3[a]; //Retonra: 3 
cout << nuevo3;

//cout << dato << endl; //ya
//cout << dato2 << endl; //ya
//cout << dato3 << endl; //ya
//cout << dato4 << endl; //ya


// Segunda forma de vectores
/*
int a = 3;
int c = 2;
int dato [][] = new int [a][c];
*/

`;

var devuelve = "";
let resultado = Analizar.parse(entrada);
//console.log(resultado);
let entonoGlobal = new Entorno("GLOBAL", null);
//console.log(resultado);

let parcial;
resultado.forEach(element => {
    parcial = element.interpretar(entonoGlobal);
    //console.log(parcial);
    if (parcial.tipo === "PRINT"){
        if (parcial.endl == TipoDato.ENDL){
            //Aca se evalua para que pueda imprimir un areglo
            if (Array.isArray(parcial.expresion.valor)){
                devuelve += JSON.stringify(parcial.expresion.valor)+ "\n";
            }
            else{
                devuelve += parcial.expresion.valor + "\n";
            }
        }else{
            devuelve += parcial.expresion.valor;
        }
    }
});

console.log(devuelve);
