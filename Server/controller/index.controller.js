//Aqui vamos a definir las funcionalidades que vamos a utilizar en nuetro programa
//req: es lo que estamos recibiendo de nuestro enpiont
//res: es la respuesta que estamos proporcionando

const analizador = require("../Analizador/parser.js")

const index = (req,res) => {
    res.status(200).json({message: "Estoy funcionando"});
}

//Segunda funcion:
const analizar = (req,res) => {
    //Obtencion de la informacion
    const {entrada} = req.body;//entrada fue la palabra que defini en postman con la que ingrese el dato numerico
    let resultado = analizador.parse(entrada);//aca se le esta mandando la entrada que se obtiene del body

    //Devuelve informacion
    res.status(200).json({message: "Funcion Analizar", salida: resultado});//devuelve el resultado al frontend
}

//estas son las exportaciones al app
module.exports = {
    index,
    analizar
}