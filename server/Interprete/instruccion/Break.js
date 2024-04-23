const {Instruccion, TipoInst} = require("../Instruccion");
const {TipoSimbolo} = require("../entorno/Simbolo");
const {Expresion, TipoDato} = require("../Expresion");
const Entorno = require("../entorno/Entorno");

class Break extends Instruccion{

    constructor(fila, columna){
        super(TipoInst.BREAK, fila, columna);
    }

    interpretar(entorno){
        //Todo: decomentar luego
        // if (entorno.esCiclo()){
        //     //Aqui comprovamos si estamos dentro de un ciclo
        // }
        return this;
    }

}

module.exports = Break;