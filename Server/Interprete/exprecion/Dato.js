const Instruccion = require("../Instruccion.js");

class Dato extends Instruccion{
    constructor(valor, tipo){
        super();
        this.tipo = tipo;
        this.valor = valor;
    }

    interpretar(entorno){
        //casteo de datos
        switch(this.tipo){
            case 'INT': return Number(this.valor);
            case 'DOUBLE': return Number(this.valor);
            case 'STRING': return this.valor;
            case 'BOOLEAN': return this.valor;
            case 'CARACTER': return this.valor;
        }
    }

}



module.exports = Dato;