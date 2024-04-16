const {Expresion, TipoDato} = require("../Expresion");

class Negativo extends Expresion{

    constructor(expresion, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.expresion = expresion;
    }

    interpretar(entorno){
        this.expresion.interpretar(entorno);
        // - Entero = - Entero
        if(this.expresion.tipo == TipoDato.INT){
            this.tipo = TipoDato.INT
            this.valor = -1 * this.expresion.valor;
            return this;
        }
        // - DOUBLE = - DOUBLE
        else if(this.expresion.tipo == TipoDato.DOUBLE){
            this.tipo = TipoDato.DOUBLE;
            this.valor = -1 * this.expresion.valor;
            return this;
        }
        // Error de datos
        else{
            this.tipo = TipoDato.ERROR;
            console.log("Error Semantico: Error de tipo de dato en negativa");
            return this;
        }
    }
}

module.exports = Negativo;