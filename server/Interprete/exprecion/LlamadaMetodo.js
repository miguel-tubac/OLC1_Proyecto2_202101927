const {Expresion, TipoDato} = require("../Expresion");
const {TipoSimbolo} = require("../entorno/Simbolo");

class LlamadaMetodo extends Expresion{

    constructor(id, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.id = id;
    }

    interpretar(entorno){
        this.valor = entorno.getFuncion(this.id);
        return this;
    }


}

module.exports = LlamadaMetodo;