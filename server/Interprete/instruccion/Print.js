const {Instruccion, TipoInstr} = require("../Instruccion");

class Print extends Instruccion{

    constructor(expresion, fila, columna){
        super(TipoInstr.PRINT, fila, columna);
        this.expresion = expresion;
    }

    interpretar(entorno){
        this.expresion.interpretar(entorno);
        if (this.expresion.tipo != TipoInstr.ERROR){
            console.log(this.expresion.valor);
        }else{
            //Todo recordar de comentar esto
            console.log("Error, no se puede imprimir errores");
        }
        return this;
    }
}

module.export = Print;