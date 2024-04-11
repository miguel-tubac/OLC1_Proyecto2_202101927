const Instruccion = require("../Instruccionn.js");

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
            case 'BOOLEAN': 
                if (this.valor == "TRUE")this.valor = true;
                else if(this.valor == "FALSE")this.valor = false
                return this.valor;
            case 'CARACTER': return this.valor;
            case 'IDENTIFICADOR': return this.valor;
        }
    }

}



module.exports = Dato;