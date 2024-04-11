
const Instruccion = require("../Instruccionn.js");

class Print extends Instruccion{
    //Para la imprecion se tomara una lista de expreciones
    constructor(exprecion){
        super();
        this.exprecion = exprecion;
    }

    interpretar(entorno){
        let valor = this.exprecion.interpretar(null);
        if (this.exprecion.tipo == "ERROR"){
            console.log("Error Semantico: No se puede hacer print de errores");
            return;
        }
        console.log(valor);
    }

}

module.exports = Print;