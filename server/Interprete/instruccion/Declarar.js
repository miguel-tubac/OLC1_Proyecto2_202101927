const {Instruccion, TipoInst} = require("../Instruccion");
const {TipoSimbolo} = require("../entorno/Simbolo");

class Declarar extends Instruccion{

    constructor(id, tipo, expresion, fila, columna){
        super(TipoInst.DECLARAR, fila, columna);
        this.expresion = expresion;
        this.id = id;
        this.tipo = tipo;
    }

    interpretar(entorno){
        if (this.expresion != 0){
            this.expresion.interpretar(entorno);
            
            if (this.expresion.tipo != this.tipo){
                console.log("ERROR semantico: Error de tipo de dato en declaracion de variables");
                return this;
            }
        }

        //Depende de la declaracion
        entorno.addSimbolo(this.id, this.expresion, this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);

        return this;
    }
}

module.exports = Declarar;