const {Instruccion, TipoInst} = require("../Instruccion");
const {TipoSimbolo} = require("../entorno/Simbolo");
const {Expresion, TipoDato} = require("../Expresion");
const Entorno = require("../entorno/Entorno");
const Funcion = require("./Funcion");

class DecFuncion extends Instruccion{

    constructor(nombre, retorno, parametros, instrucciones, fila, columna){
        super(TipoInst.FUNCION, fila, columna);
        this.nombre = nombre;
        this.retorno = retorno;
        this.parametros = parametros;
        this.instrucciones = instrucciones;
    }

    interpretar(entorno){
        let funcion = new Funcion(this.nombre ,this.retorno, this.parametros, this.instrucciones, this.fila, this.columna);
        entorno.addFuncion(this.nombre, funcion);
        return this;
    }

}

module.exports = DecFuncion;