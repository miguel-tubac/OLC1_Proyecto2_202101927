const Instruccion = require("../Instruccion.js");

class Variables extends Instruccion{
    constructor(expIzq, operador, expDer){
        super();
        this.expIzq = expIzq;
        this.operador = operador;
        this.expDer = expDer;
        this.tipo = 'ERROR';
        this.valor = 'null';
    }
}
