const {Expresion, TipoDato} = require("../Expresion");

class Casteos extends Expresion{

    constructor(id, tipo, expresion, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.id = id;
        this.tipo = tipo;
        this.expresion = expresion;
    }

    interpretar(entorno){
        this.expresion.interpretar(entorno);
        
    }
}

module.exports = Casteos;
