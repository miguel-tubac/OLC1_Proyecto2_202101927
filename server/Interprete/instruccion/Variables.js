//const { createGlobalStyle } = require("styled-components");
const { createGlobalStyle } = require("styled-components");
const Instruccion = require("../Instruccion.js");

class Variables extends Instruccion{
    constructor(tipo, id, valor){
        super();
        this.tipo = tipo;
        this.id = id;
        this.valor = valor;
        this.valorDefault = null;
    }

    interpretar(entorno){
        var valor = this.valor.interpretar(null);
        var id = this.id.interpretar(null);

        console.log(valor.tipo);
        if (this.tipo == 'int' && valor.tipo == 'INT'){
            //nada
            console.log(this.tipo);
            console.log(id);
            console.log(valor);
        }
    }
}

module.exports = Variables;
