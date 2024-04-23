const {Instruccion, TipoInst} = require("../Instruccion");
const {TipoSimbolo} = require("../entorno/Simbolo");
const {Expresion, TipoDato} = require("../Expresion");
const Entorno = require("../entorno/Entorno");

class Execute extends Instruccion{

    constructor(CallFuncion, fila, columna){
        super(TipoInst.EXECUTE, fila, columna);
        this.CallFuncion = CallFuncion;
    }

    interpretar(entorno){
        //Unicamnte ejecuta la fucion que devuelve la gramatica
        this.CallFuncion.interpretar(entorno);
        return this;
    }

}

module.exports = Execute;