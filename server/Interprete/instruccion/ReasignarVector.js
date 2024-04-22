const {Instruccion, TipoInst} = require("../Instruccion");
const {TipoSimbolo} = require("../entorno/Simbolo");
const {Expresion, TipoDato} = require("../Expresion");

class ReasignarVector extends Instruccion{

    constructor(id, expresion1, expresion2, fila, columna){
        super(TipoInst.ARREGLO, fila, columna);
        this.tipo = TipoDato.ID;
        this.id = id;
        this.expresion1 = expresion1;
        this.expresion2 = expresion2;
    }

    interpretar(entorno){
        // Aca es el caso en donde se reasigna el valor al vector:
        if (entorno.getSimbolo(this.id).tipo == TipoDato.INT){
            //aca los dos son numeros int: dato3 [0] = 2;
            if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == TipoDato.INT){
                let dimencion = entorno.getSimbolo(this.id).valor.length;
                let vector = entorno.getSimbolo(this.id);
                //let variable = entorno.getSimbolo(this.expresion2.interpretar(entorno).valor);
                for (let i = 0; i < dimencion; i++){
                    if(this.expresion1.interpretar(entorno).valor == i){
                        vector.valor[i] = Number(this.expresion2.interpretar(entorno).valor);
                        entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                        this.tipo = TipoDato.INT
                        return this;
                    }
                }
                this.tipo = TipoDato.INT
                return this;
            }
            //aca uno es numeros y el otro es variable int: dato3 [b] = 23;
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.ID && this.expresion2.interpretar(entorno).tipo == TipoDato.INT){
                let dimencion = entorno.getSimbolo(this.id).valor.length;
                let vector = entorno.getSimbolo(this.id);
                let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                for (let i = 0; i < dimencion; i++){
                    if(variable.valor == i){
                        vector.valor[i] = Number(this.expresion2.interpretar(entorno).valor);
                        entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                        this.tipo = TipoDato.INT
                        return this;
                    }
                }
                this.tipo = TipoDato.INT
                return this;
            }
            //aca uno es numeros y el otro es variable int: dato3 [0] = a;
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == TipoDato.ID && entorno.getSimbolo(this.expresion2.interpretar(entorno).valor).tipo == TipoDato.INT){
                let dimencion = entorno.getSimbolo(this.id).valor.length;
                let vector = entorno.getSimbolo(this.id);
                let variable = entorno.getSimbolo(this.expresion2.interpretar(entorno).valor);
                for (let i = 0; i < dimencion; i++){
                    if(this.expresion1.interpretar(entorno).valor == i){
                        vector.valor[i] = variable.valor;
                        entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                        this.tipo = TipoDato.INT
                        return this;
                    }
                }
                this.tipo = TipoDato.INT
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.ID && this.expresion2.interpretar(entorno).tipo == TipoDato.ID){
                //aca uno es numeros y el otro es variable int: dato3 [b] = a;
                let dimencion = entorno.getSimbolo(this.id).valor.length;
                let vector = entorno.getSimbolo(this.id);
                let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                let variable2 = entorno.getSimbolo(this.expresion2.interpretar(entorno).valor);
                for (let i = 0; i < dimencion; i++){
                    if(variable.valor == i){
                        vector.valor[i] = variable2.valor;
                        entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                        this.tipo = TipoDato.INT
                        return this;
                    }
                }
                this.tipo = TipoDato.INT
                return this;
            }
            else {
                return this
            }
        }
        else{
            return this
        }
        // Todo validar el caso en dodnde this.expresion.interpretar(entorno) = a un diccionario: dato3 [1] = dato3[1];
    }

}

module.exports = ReasignarVector;