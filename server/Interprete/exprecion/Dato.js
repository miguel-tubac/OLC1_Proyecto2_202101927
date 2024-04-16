const {Expresion} = require("../Expresion");

class Dato extends Expresion{
    constructor(valor, tipo, fila, columna){
        super(valor, tipo, fila, columna);
    }

    interpretar(entorno){
        return this //aca se retorna el objeto como tal
    }

}

module.exports = Dato;