const {Instruccion, TipoInst} = require("../Instruccion");
const {TipoSimbolo} = require("../entorno/Simbolo");
const {Expresion, TipoDato} = require("../Expresion");
const Entorno = require("../entorno/Entorno");

class MetodSinParame extends Instruccion{

    constructor(id, instrucciones, fila, columna){
        super(TipoSimbolo.METODO, fila, columna);
        //this.tipo = TipoDato.ID;
        this.id = id;
        this.instrucciones = instrucciones;
    }

    interpretar(entorno){
        let entonoMetodo = new Entorno(TipoInst.METODO, entorno);
        let instru = this.instrucciones.interpretar(entonoMetodo );
        entonoMetodo.addFuncion(this.id, instru, TipoSimbolo.METODO, this.fila, this.columna);
        return this;
    }

}

module.exports = MetodSinParame;