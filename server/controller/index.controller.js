//Aqui vamos a definir las funcionalidades que vamos a utilizar en nuetro programa
//req: es lo que estamos recibiendo de nuestro enpiont
//res: es la respuesta que estamos proporcionando

const analizador = require("../Analizador/parser.js")
const Entorno = require("../Interprete/entorno/Entorno.js")
const {TipoDato} = require("../Interprete/Expresion.js");

const index = (req,res) => {
    res.status(200).json({message: "Estoy funcionando"});
}

//Segunda funcion:
const analizar = (req,res) => {
    //Obtencion de la informacion
    const {entrada} = req.body;//entrada fue la palabra que defini en postman con la que ingrese el dato numerico
    //console.log(entrada);
    let resultado = analizador.parse(entrada);//aca se le esta mandando la entrada que se obtiene del body
    //let respuesta = "";
    var devuelve="";
    //Creacion del entrono Global
    let entonoGlobal = new Entorno("GLOBAL", null);
    resultado.forEach(element => {
        if (element.interpretar(entonoGlobal).tipo === "PRINT"){
            if (element.interpretar(entonoGlobal).endl == TipoDato.ENDL){
                devuelve += element.interpretar(entonoGlobal).expresion.valor + "\n";
            }else{
                devuelve += element.interpretar(entonoGlobal).expresion.valor;
            }
        }
    });

    var resultado2 = {
        arbol: "",
        errores: "",
        listaSimbolos:"",
        consola: devuelve
    }
    //Devuelve informacion
    console.log(devuelve);
    res.status(200).json({message: "Funcion Analizar", salida: resultado2});//devuelve el resultado al frontend
}

//estas son las exportaciones al app
module.exports = {
    index,
    analizar
}