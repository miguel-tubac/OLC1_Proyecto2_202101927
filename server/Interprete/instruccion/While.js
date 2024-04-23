const {Instruccion, TipoInst} = require("../Instruccion");
const {TipoSimbolo} = require("../entorno/Simbolo");
const {Expresion, TipoDato} = require("../Expresion");
const Entorno = require("../entorno/Entorno");

class While extends Instruccion{

    constructor(condicion, instrucciones, fila, columna){
        super(TipoInst.WHILE, fila, columna);
        this.condicion = condicion;
        this.instrucciones = instrucciones;
    }

    interpretar(entorno){
        let entornoWhile = new Entorno(TipoInst.WHILE, entorno);
        this.condicion.interpretar(entornoWhile);

        if (this.condicion.tipo != TipoDato.BOOLEAN){
            console.log("Error Semnatico: la condicion del while debe ser de tipo BOOLEAN");
            return this;
        }

        while(String(this.condicion.valor).toLocaleLowerCase() == "true"){
            let result = TipoInst.WHILE;
            for (let i = 0; i < this.instrucciones.length; i ++){
                let instruccion = this.instrucciones[i]
                instruccion.interpretar(entornoWhile);
                if(instruccion.tipo = TipoInst.BREAK){
                    result = TipoInst.BREAK
                    break;
                }
            }
            this.condicion,this.interpretar(entornoWhile);
            //TODO aca tambien verificar para el continue
            // if (result == TipoInst.COntinue){
            //     continue;
            // }

            if (result == TipoInst.BREAK){
                return this;
            }

            //else if(continue)

            this.condicion,this.interpretar(entornoWhile);//Aca se actualiza la informacion porque se va ejceutando el while
        }

    }

}

module.exports = While;