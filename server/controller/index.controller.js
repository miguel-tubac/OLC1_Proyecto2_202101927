//Aqui vamos a definir las funcionalidades que vamos a utilizar en nuetro programa
//req: es lo que estamos recibiendo de nuestro enpiont
//res: es la respuesta que estamos proporcionando

const analizador = require("../Analizador/parser.js")
const Entorno = require("../Interprete/entorno/Entorno.js")
const {TipoDato} = require("../Interprete/Expresion.js");
const Print = require("../Interprete/instruccion/Print.js");

const index = (req,res) => {
    res.status(200).json({message: "Estoy funcionando"});
}

//Segunda funcion:
const analizar = (req,res) => {
    Print.reiniciarValorTexto();
    //Obtencion de la informacion
    const {entrada} = req.body;//entrada fue la palabra que defini en postman con la que ingrese el dato numerico
    //console.log(entrada);
    let resultado = analizador.parse(entrada);//aca se le esta mandando la entrada que se obtiene del body

    let entonoGlobal = new Entorno("GLOBAL", null);
    //console.log(resultado);
    var devuelve = "";
    //let reult = [EXECUTE, FUNCION, ASIGNACION, ASIGNACION, FUNCION]
    //console.log(resultado.length);
    for (let i =0; i< resultado.length; i ++){
        //console.log(resultado[i]);
        //Aca afura se interpreta todo lo que no se execute
        if(resultado[i].tipo != "EXECUTE"){
            resultado[i].interpretar(entonoGlobal);
            //console.log("Interpretando1: " + resultado[i]);
            //console.log(resultado[i]);
            //console.log(resultado[i].instrucciones[i]);
        }
    }

    let executeIniciado = false;
    for (let i =0; i< resultado.length; i ++){
        //resultado[i].interpretar(entonoGlobal);
        //Aca afura se interpreta todo lo que no se execute
        if(resultado[i].tipo =="EXECUTE" && !executeIniciado){
            resultado[i].interpretar(entonoGlobal);
            executeIniciado = true;
            //console.log(resultado[i]);
        }
        //Aca es cuando salga otro execute
        else if (resultado[i].tipo == "EXECUTE" && executeIniciado){
            console.log("Error semnatico solo puede aver un execute"); 
        }
    }

    console.log(Print.obtenerValorTexto());
    devuelve = Print.obtenerValorTexto();
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