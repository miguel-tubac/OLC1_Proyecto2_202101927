const {TipoDato} = require("../Expresion");
const {Instruccion, TipoInst} = require("../Instruccion");

class Print extends Instruccion{

    constructor(expresion, fila, columna){
        super(TipoInst.PRINT, fila, columna);
        this.expresion = expresion;
    }

    interpretar(entorno){
        this.expresion.interpretar(entorno);
        if (this.expresion.tipo != TipoDato.ERROR){
            console.log(this.expresion.valor);
            return this;
        }else{
            //Todo recordar de comentar esto
            console.log("Error, no se puede imprimir errores");
            return this;
        }
       // return this;
    }
}

module.exports = Print;