const {TipoDato} = require("../Expresion");
const {Instruccion, TipoInst} = require("../Instruccion");
//const {TipoSimbolo} = require("../entorno/Simbolo");

class Print extends Instruccion{

    constructor(expresion, endl, fila, columna){
        super(TipoInst.PRINT, fila, columna);
        this.expresion = expresion;
        this.endl = endl;
    }

    interpretar(entorno){
        //console.log(entorno.getSimbolo(this.expresion.valor));
        this.expresion.interpretar(entorno);
        if (this.expresion.tipo != TipoDato.ERROR){
            let dato = entorno.getSimbolo(this.expresion.valor);
            if (dato.tipo == TipoDato.ERROR){
                return this;
            }
            else if(dato.tipo != TipoDato.ERROR){
                //console.log(dato);
                //console.log(dato.valor);
                this.expresion.valor = dato.valor;
                return this;
            }
            
        }
        else{
            //Todo recordar de comentar esto
            console.log("Error, no se puede imprimir errores");
            return this;
        }
       // return this;
    }
}

module.exports = Print;