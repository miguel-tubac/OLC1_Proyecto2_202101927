const {Expresion, TipoDato} = require("../Expresion");
const {TipoSimbolo} = require("../entorno/Simbolo");

class Incre_Decre extends Expresion{

    constructor(id, operador, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.id = id;
        this.operador = operador;
    }

    interpretar(entorno){
        if(entorno.getSimbolo(this.id).tipo == TipoDato.INT && this.operador == "++"){
            entorno.editarSimbolo(this.id, (entorno.getSimbolo(this.id).valor + 1), this.fila, this.columna);
            return this;
        }
        else if(entorno.getSimbolo(this.id).tipo == TipoDato.INT && this.operador == "--"){
            entorno.editarSimbolo(this.id, (entorno.getSimbolo(this.id).valor - 1), this.fila, this.columna);
            return this;
        }
        // Error
        else{
            this.tipo = TipoDato.ERROR;
            console.log("Error Semantico: Error de tipo de dato en Incremento o Decremento de la variable");
            return this;
        }
    }

}

module.exports = Incre_Decre;