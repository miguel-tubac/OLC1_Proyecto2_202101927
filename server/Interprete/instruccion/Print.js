const {TipoDato} = require("../Expresion");
const {Instruccion, TipoInst} = require("../Instruccion");

class Print extends Instruccion{

    constructor(expresion, endl, fila, columna){
        super(TipoInst.PRINT, fila, columna);
        this.expresion = expresion;
        this.endl = endl;
    }

    interpretar(entorno){
        this.expresion.interpretar(entorno);
        if (this.expresion.tipo != TipoDato.ERROR){
            //console.log(informacion);
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