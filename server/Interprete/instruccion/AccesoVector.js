const {Instruccion, TipoInst} = require("../Instruccion");
const {TipoSimbolo} = require("../entorno/Simbolo");
const {Expresion, TipoDato} = require("../Expresion");

class AccesoVector extends Instruccion{

    constructor(id, expresion, expresion2, fila, columna){
        super(TipoInst.ARREGLO, fila, columna);
        this.expresion = expresion;
        this.id = id;
        this.expresion2 = expresion2;
    }

    interpretar(entorno){
        return this
    }

}

module.exports = AccesoVector;