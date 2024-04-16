//const { createGlobalStyle } = require("styled-components");
const { createGlobalStyle } = require("styled-components");
const Instruccion = require("../Instruccion.js");
const variables1 = require("../exprecion/Genvariable.js");

class Variables extends Instruccion{
    constructor(tipo, id, valor){
        super();
        this.tipo = tipo;
        this.id = id;
        this.valor = valor;
        //this.valorDefault = null;
    }

    interpretar(entorno){
        //int e,c = 2;
        var valor = this.valor.interpretar(null);
        //var id = this.id.interpretar(null);
        //console.log(this.valor);

        this.id.forEach(element => {
            //console.log(element.tipo);
            console.log(element.valor);
            //console.log(element)
            //variables1.agregarDato(element.valor, valor);
        });

        console.log(this.tipo);
        console.log(this.id);
        console.log(this.valor);

        if (this.tipo == 'int' && this.valor.tipo == 'INT'){
            console.log(variables1.obtenerDato("c"));
            //console.log(valor);
        }
    }
}

module.exports = Variables;
