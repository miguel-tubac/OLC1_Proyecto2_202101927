
const Instruccion = require("../Instruccion.js");

class Print extends Instruccion{
    //Para la imprecion se tomara una lista de expreciones
    constructor(exprecion){
        super();
        this.exprecion = exprecion;
    }

    interpretar(entorno){
        let valor = this.exprecion.interpretar(null);
        console.log(valor);
    }

}

module.exports = Print;