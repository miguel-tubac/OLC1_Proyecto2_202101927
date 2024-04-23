const {Instruccion, TipoInst} = require("../Instruccion");
const {TipoSimbolo} = require("../entorno/Simbolo");
const {Expresion, TipoDato} = require("../Expresion");
const Entorno = require("../entorno/Entorno");

class Return extends Instruccion{

    constructor(expresion, fila, columna){
        super(TipoInst.RETURN, fila, columna);
        this.expresion = expresion;
    }

    interpretar(entorno){
        this.expresion.interpretar(entorno);
        return this;
    }

}

module.exports = Return;