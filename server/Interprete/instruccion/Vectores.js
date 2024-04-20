const {Instruccion, TipoInst} = require("../Instruccion");
const {TipoSimbolo} = require("../entorno/Simbolo");
const {Expresion, TipoDato} = require("../Expresion");

class Vectores extends Instruccion{

    constructor(id, tipo, expresion, fila, columna){
        super(TipoInst.ARREGLO, fila, columna);
        this.expresion = expresion;
        this.id = id;
        this.tipo = tipo;
    }

    interpretar(entorno){
        //Aca se evalua la Declaracion de Tipo 1
        if(this.expresion.length == 1){
            let exprecion_valor = 0;//aca se guardara el valor de la exprecion
            let id = "";//Este es el nombre
            // Se recorre el arreglo de la expresion
            this.expresion.forEach(element => {
                exprecion_valor = element.interpretar(entorno);
            });
            // Se recorre el arreglo del id
            this.id.forEach(element => {
                id = element.interpretar(entorno).valor;
            });
            //console.log(id);
            // ----------------El areglo recibe un numero
            if(this.tipo == TipoDato.INT && exprecion_valor.tipo == TipoDato.INT){
                entorno.addSimbolo(id, Array(Number(exprecion_valor.valor)), this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna);
                return this;
            }
            // ---------------El areglo recibe una variable
            else if(this.tipo == TipoDato.INT && exprecion_valor.tipo == TipoDato.ID && entorno.getSimbolo(exprecion_valor.valor).tipo == TipoDato.INT){
                entorno.addSimbolo(id, Array(Number(entorno.getSimbolo(exprecion_valor.valor).valor)), this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna);
                return this;
            }
            //Error
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato en asignacion de longitud de Vectores");
                return this;
            }
        }
        //Aca se evalua la Declaracion de Tipo 2: int dato3 [] = new int [2,3,4];
        else if(this.expresion.length > 1){
            let exprecion_valor = [];//aca se guardara el valor de la exprecion
            let id = "";//Este es el nombre
            // Se recorre el arreglo del id
            this.id.forEach(element => {
                id = element.interpretar(entorno).valor;
            });
            //console.log(id);
            //---------Se evalua el tipo entero:
            if (this.tipo == TipoDato.INT){
                // Se recorre el arreglo de la expresion
                for (let i = 0; i < this.expresion.length; i++) {
                    //Aca se evalua el tipo de expresion es un entero
                    if (this.expresion[i].interpretar(entorno).tipo == TipoDato.INT) { 
                        exprecion_valor.push(Number(this.expresion[i].interpretar(entorno).valor));
                        if(i == this.expresion.length -1){
                            entorno.addSimbolo(id, exprecion_valor, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna);
                            return this;
                        }
                    } 
                    //Aca se evalua el tipo de expresion es un ID y el mismo es un entero
                    else if(this.expresion[i].interpretar(entorno).tipo == TipoDato.ID && entorno.getSimbolo(this.expresion[i].interpretar(entorno).valor).tipo == TipoDato.INT){
                        exprecion_valor.push(Number(entorno.getSimbolo(this.expresion[i].interpretar(entorno).valor).valor));
                        if(i == this.expresion.length -1){
                            entorno.addSimbolo(id, exprecion_valor, this.tipo, TipoSimbolo.ARREGLO, this.fila, this.columna);
                            return this;
                        }
                    }
                    else {
                        break; // Si el tipo no es INT, salir del bucle
                    }
                }
            }
            //Error
            else{
                this.tipo = TipoDato.ERROR;
                this.expresion = "Error Semantico: Error de tipo de dato en asignacion de valores a Vectores";
                console.log("Error Semantico: Error de tipo de dato en asignacion de valores a Vectores");
                return this;
            }
        }
        //Error
        else{
            this.tipo = TipoDato.ERROR;
            console.log("Error Semantico: Error de tipo de dato en asignacion de Vectores");
            return this;
        }
    }

}

module.exports = Vectores;