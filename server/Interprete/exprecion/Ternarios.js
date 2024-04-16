const {Instruccion, TipoInst} = require("../Instruccion");
const {TipoDato} = require("../Expresion");

class Ternarios extends Instruccion{
    constructor(condicion, expIzq, expDer, fila, columna){
        super("ERROR", TipoInst.ERROR, fila, columna);
        this.condicion = condicion;
        this.expIzq = expIzq;
        this.expDer = expDer;
    }

    interpretar(entorno){
        this.condicion.interpretar(entorno);
        this.expIzq.interpretar(entorno);
        this.expDer.interpretar(entorno);

        // La condicion es veradera
        if (String(this.condicion.valor).toLowerCase() === "true"){
            this.tipo = this.expIzq.tipo;
            this.valor = this.expIzq.valor;
            return this;
        }
        // La condicion es Falsa
        else if(String(this.condicion.valor).toLowerCase() === "false"){
            this.tipo = this.expDer.tipo;
            this.valor = this.expDer.valor;
            return this;
        }
        else{
            this.tipo = TipoDato.ERROR;
            console.log("Error Semantico: Error de tipo de dato en ternario");
            return this;
        }
    }
}

module.exports = Ternarios;