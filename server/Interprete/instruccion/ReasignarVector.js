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
        // console.log(this.id); //dato3
        // console.log(this.expresion1);// 
        // console.log(this.expresion2);
        //********************************************Reasigno tipo Int */
        if (entorno.getSimbolo(this.id).tipo == TipoDato.INT){
            //console.log(entorno.getSimbolo(this.id));
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
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.INT){
                //aca uno es numeros y el otro es variable int: dato3 [1] = dato3[0];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                vector.valor[Number(this.expresion1.valor)] = vector2.valor[Number(this.expresion2.expresion.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.INT
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.ID && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.INT){
                //aca uno es numeros y el otro es variable int: dato3 [a] = dato3[0];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                //let variable2 = entorno.getSimbolo(this.expresion2.interpretar(entorno).valor);
                vector.valor[Number(variable.valor)] = vector2.valor[Number(this.expresion2.expresion.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.INT
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.ID){
                //aca uno es numeros y el otro es variable int: dato3 [0] = dato3[a];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                //let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                let variable2 = entorno.getSimbolo(this.expresion2.expresion.valor);
                vector.valor[Number(this.expresion1.valor)] = vector2.valor[Number(variable2.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.INT
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.ID && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.ID){
                //aca uno es numeros y el otro es variable int: dato3 [a] = dato3[a];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                let variable2 = entorno.getSimbolo(this.expresion2.expresion.valor);
                vector.valor[Number(variable.valor)] = vector2.valor[Number(variable2.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.INT
                return this;
            }
            else {
                return this
            }
        }
        //********************************************Reasigno tipo Double */
        else if (entorno.getSimbolo(this.id).tipo == TipoDato.DOUBLE){
            //console.log(entorno.getSimbolo(this.id));
            //aca los dos son numeros int: dato3 [0] = 2;
            if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == TipoDato.DOUBLE){
                let dimencion = entorno.getSimbolo(this.id).valor.length;
                let vector = entorno.getSimbolo(this.id);
                //let variable = entorno.getSimbolo(this.expresion2.interpretar(entorno).valor);
                for (let i = 0; i < dimencion; i++){
                    if(this.expresion1.interpretar(entorno).valor == i){
                        vector.valor[i] = Number(this.expresion2.interpretar(entorno).valor);
                        entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                        this.tipo = TipoDato.DOUBLE
                        return this;
                    }
                }
                this.tipo = TipoDato.DOUBLE
                return this;
            }
            //aca uno es numeros y el otro es variable int: dato3 [b] = 23;
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.ID && this.expresion2.interpretar(entorno).tipo == TipoDato.DOUBLE){
                let dimencion = entorno.getSimbolo(this.id).valor.length;
                let vector = entorno.getSimbolo(this.id);
                let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                for (let i = 0; i < dimencion; i++){
                    if(variable.valor == i){
                        vector.valor[i] = Number(this.expresion2.interpretar(entorno).valor);
                        entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                        this.tipo = TipoDato.DOUBLE
                        return this;
                    }
                }
                this.tipo = TipoDato.DOUBLE
                return this;
            }
            //aca uno es numeros y el otro es variable int: dato3 [0] = a;
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == TipoDato.ID && entorno.getSimbolo(this.expresion2.interpretar(entorno).valor).tipo == TipoDato.DOUBLE){
                let dimencion = entorno.getSimbolo(this.id).valor.length;
                let vector = entorno.getSimbolo(this.id);
                let variable = entorno.getSimbolo(this.expresion2.interpretar(entorno).valor);
                for (let i = 0; i < dimencion; i++){
                    if(this.expresion1.interpretar(entorno).valor == i){
                        vector.valor[i] = variable.valor;
                        entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                        this.tipo = TipoDato.DOUBLE
                        return this;
                    }
                }
                this.tipo = TipoDato.DOUBLE
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
                        this.tipo = TipoDato.DOUBLE
                        return this;
                    }
                }
                this.tipo = TipoDato.DOUBLE
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.INT){
                //aca uno es numeros y el otro es variable int: dato3 [1] = dato3[0];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                vector.valor[Number(this.expresion1.valor)] = vector2.valor[Number(this.expresion2.expresion.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.DOUBLE
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.ID && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.INT){
                //aca uno es numeros y el otro es variable int: dato3 [a] = dato3[0];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                //let variable2 = entorno.getSimbolo(this.expresion2.interpretar(entorno).valor);
                vector.valor[Number(variable.valor)] = vector2.valor[Number(this.expresion2.expresion.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.DOUBLE
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.ID){
                //aca uno es numeros y el otro es variable int: dato3 [0] = dato3[a];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                //let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                let variable2 = entorno.getSimbolo(this.expresion2.expresion.valor);
                vector.valor[Number(this.expresion1.valor)] = vector2.valor[Number(variable2.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.DOUBLE
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.ID && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.ID){
                //aca uno es numeros y el otro es variable int: dato3 [a] = dato3[a];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                let variable2 = entorno.getSimbolo(this.expresion2.expresion.valor);
                vector.valor[Number(variable.valor)] = vector2.valor[Number(variable2.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.DOUBLE
                return this;
            }
            else {
                return this
            }
        }
        //********************************************Reasigno tipo Bool */
        else if (entorno.getSimbolo(this.id).tipo == TipoDato.BOOLEAN){
            //console.log(entorno.getSimbolo(this.id));
            let datoBool;
            //aca los dos son numeros int: dato3 [0] = 2;
            if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == TipoDato.BOOLEAN){
                let dimencion = entorno.getSimbolo(this.id).valor.length;
                let vector = entorno.getSimbolo(this.id);
                //let variable = entorno.getSimbolo(this.expresion2.interpretar(entorno).valor);
                for (let i = 0; i < dimencion; i++){
                    if(this.expresion1.interpretar(entorno).valor == i){
                        if(String(this.expresion2.interpretar(entorno).valor).toLocaleLowerCase() == "true") datoBool = true;
                        else if(String(this.expresion2.interpretar(entorno).valor).toLocaleLowerCase() == "false") datoBool = false;
                        vector.valor[i] = datoBool;
                        entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                        this.tipo = TipoDato.BOOLEAN
                        return this;
                    }
                }
                this.tipo = TipoDato.BOOLEAN
                return this;
            }
            //aca uno es numeros y el otro es variable int: dato3 [b] = 23;
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.ID && this.expresion2.interpretar(entorno).tipo == TipoDato.BOOLEAN){
                let dimencion = entorno.getSimbolo(this.id).valor.length;
                let vector = entorno.getSimbolo(this.id);
                let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                for (let i = 0; i < dimencion; i++){
                    if(variable.valor == i){
                        if(String(this.expresion2.interpretar(entorno).valor).toLocaleLowerCase() == "true") datoBool = true;
                        else if(String(this.expresion2.interpretar(entorno).valor).toLocaleLowerCase() == "false") datoBool = false;
                        vector.valor[i] = datoBool;
                        entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                        this.tipo = TipoDato.BOOLEAN
                        return this;
                    }
                }
                this.tipo = TipoDato.BOOLEAN
                return this;
            }
            //aca uno es numeros y el otro es variable int: dato3 [0] = a;
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == TipoDato.ID && entorno.getSimbolo(this.expresion2.interpretar(entorno).valor).tipo == TipoDato.BOOLEAN){
                let dimencion = entorno.getSimbolo(this.id).valor.length;
                let vector = entorno.getSimbolo(this.id);
                let variable = entorno.getSimbolo(this.expresion2.interpretar(entorno).valor);
                for (let i = 0; i < dimencion; i++){
                    if(this.expresion1.interpretar(entorno).valor == i){
                        vector.valor[i] = variable.valor;
                        entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                        this.tipo = TipoDato.BOOLEAN
                        return this;
                    }
                }
                this.tipo = TipoDato.BOOLEAN
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
                        this.tipo = TipoDato.BOOLEAN
                        return this;
                    }
                }
                this.tipo = TipoDato.BOOLEAN
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.INT){
                //aca uno es numeros y el otro es variable int: dato3 [1] = dato3[0];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                vector.valor[Number(this.expresion1.valor)] = vector2.valor[Number(this.expresion2.expresion.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.BOOLEAN
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.ID && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.INT){
                //aca uno es numeros y el otro es variable int: dato3 [a] = dato3[0];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                //let variable2 = entorno.getSimbolo(this.expresion2.interpretar(entorno).valor);
                vector.valor[Number(variable.valor)] = vector2.valor[Number(this.expresion2.expresion.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.BOOLEAN
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.ID){
                //aca uno es numeros y el otro es variable int: dato3 [0] = dato3[a];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                //let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                let variable2 = entorno.getSimbolo(this.expresion2.expresion.valor);
                vector.valor[Number(this.expresion1.valor)] = vector2.valor[Number(variable2.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.BOOLEAN
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.ID && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.ID){
                //aca uno es numeros y el otro es variable int: dato3 [a] = dato3[a];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                let variable2 = entorno.getSimbolo(this.expresion2.expresion.valor);
                vector.valor[Number(variable.valor)] = vector2.valor[Number(variable2.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.BOOLEAN
                return this;
            }
            else {
                return this
            }
        }
        //********************************************Reasigno tipo Char */
        else if (entorno.getSimbolo(this.id).tipo == TipoDato.CHAR){
            //console.log(entorno.getSimbolo(this.id));
            //aca los dos son numeros int: dato3 [0] = 2;
            if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == TipoDato.CHAR){
                let dimencion = entorno.getSimbolo(this.id).valor.length;
                let vector = entorno.getSimbolo(this.id);
                //let variable = entorno.getSimbolo(this.expresion2.interpretar(entorno).valor);
                for (let i = 0; i < dimencion; i++){
                    if(this.expresion1.interpretar(entorno).valor == i){
                        vector.valor[i] = String(this.expresion2.interpretar(entorno).valor);
                        entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                        this.tipo = TipoDato.CHAR
                        return this;
                    }
                }
                this.tipo = TipoDato.CHAR
                return this;
            }
            //aca uno es numeros y el otro es variable int: dato3 [b] = 23;
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.ID && this.expresion2.interpretar(entorno).tipo == TipoDato.CHAR){
                let dimencion = entorno.getSimbolo(this.id).valor.length;
                let vector = entorno.getSimbolo(this.id);
                let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                for (let i = 0; i < dimencion; i++){
                    if(variable.valor == i){
                        vector.valor[i] = String(this.expresion2.interpretar(entorno).valor);
                        entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                        this.tipo = TipoDato.CHAR
                        return this;
                    }
                }
                this.tipo = TipoDato.CHAR
                return this;
            }
            //aca uno es numeros y el otro es variable int: dato3 [0] = a;
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == TipoDato.ID && entorno.getSimbolo(this.expresion2.interpretar(entorno).valor).tipo == TipoDato.CHAR){
                let dimencion = entorno.getSimbolo(this.id).valor.length;
                let vector = entorno.getSimbolo(this.id);
                let variable = entorno.getSimbolo(this.expresion2.interpretar(entorno).valor);
                for (let i = 0; i < dimencion; i++){
                    if(this.expresion1.interpretar(entorno).valor == i){
                        vector.valor[i] = variable.valor;
                        entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                        this.tipo = TipoDato.CHAR
                        return this;
                    }
                }
                this.tipo = TipoDato.CHAR
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
                        this.tipo = TipoDato.CHAR
                        return this;
                    }
                }
                this.tipo = TipoDato.CHAR
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.INT){
                //aca uno es numeros y el otro es variable int: dato3 [1] = dato3[0];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                vector.valor[Number(this.expresion1.valor)] = vector2.valor[Number(this.expresion2.expresion.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.CHAR
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.ID && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.INT){
                //aca uno es numeros y el otro es variable int: dato3 [a] = dato3[0];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                //let variable2 = entorno.getSimbolo(this.expresion2.interpretar(entorno).valor);
                vector.valor[Number(variable.valor)] = vector2.valor[Number(this.expresion2.expresion.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.CHAR
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.ID){
                //aca uno es numeros y el otro es variable int: dato3 [0] = dato3[a];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                //let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                let variable2 = entorno.getSimbolo(this.expresion2.expresion.valor);
                vector.valor[Number(this.expresion1.valor)] = vector2.valor[Number(variable2.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.CHAR
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.ID && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.ID){
                //aca uno es numeros y el otro es variable int: dato3 [a] = dato3[a];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                let variable2 = entorno.getSimbolo(this.expresion2.expresion.valor);
                vector.valor[Number(variable.valor)] = vector2.valor[Number(variable2.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.CHAR
                return this;
            }
            else {
                return this
            }
        }
        //********************************************Reasigno tipo Cadena */
        else if (entorno.getSimbolo(this.id).tipo == TipoDato.CADENA){
            //console.log(entorno.getSimbolo(this.id));
            //aca los dos son numeros int: dato3 [0] = 2;
            if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == TipoDato.CADENA){
                let dimencion = entorno.getSimbolo(this.id).valor.length;
                let vector = entorno.getSimbolo(this.id);
                //let variable = entorno.getSimbolo(this.expresion2.interpretar(entorno).valor);
                for (let i = 0; i < dimencion; i++){
                    if(this.expresion1.interpretar(entorno).valor == i){
                        vector.valor[i] = String(this.expresion2.interpretar(entorno).valor);
                        entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                        this.tipo = TipoDato.CADENA
                        return this;
                    }
                }
                this.tipo = TipoDato.CADENA
                return this;
            }
            //aca uno es numeros y el otro es variable int: dato3 [b] = 23;
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.ID && this.expresion2.interpretar(entorno).tipo == TipoDato.CADENA){
                let dimencion = entorno.getSimbolo(this.id).valor.length;
                let vector = entorno.getSimbolo(this.id);
                let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                for (let i = 0; i < dimencion; i++){
                    if(variable.valor == i){
                        vector.valor[i] = String(this.expresion2.interpretar(entorno).valor);
                        entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                        this.tipo = TipoDato.CADENA
                        return this;
                    }
                }
                this.tipo = TipoDato.CADENA
                return this;
            }
            //aca uno es numeros y el otro es variable int: dato3 [0] = a;
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == TipoDato.ID && entorno.getSimbolo(this.expresion2.interpretar(entorno).valor).tipo == TipoDato.CADENA){
                let dimencion = entorno.getSimbolo(this.id).valor.length;
                let vector = entorno.getSimbolo(this.id);
                let variable = entorno.getSimbolo(this.expresion2.interpretar(entorno).valor);
                for (let i = 0; i < dimencion; i++){
                    if(this.expresion1.interpretar(entorno).valor == i){
                        vector.valor[i] = variable.valor;
                        entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                        this.tipo = TipoDato.CADENA
                        return this;
                    }
                }
                this.tipo = TipoDato.CADENA
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
                        this.tipo = TipoDato.CADENA
                        return this;
                    }
                }
                this.tipo = TipoDato.CADENA
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.INT){
                //aca uno es numeros y el otro es variable int: dato3 [1] = dato3[0];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                vector.valor[Number(this.expresion1.valor)] = vector2.valor[Number(this.expresion2.expresion.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.CADENA
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.ID && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.INT){
                //aca uno es numeros y el otro es variable int: dato3 [a] = dato3[0];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                //let variable2 = entorno.getSimbolo(this.expresion2.interpretar(entorno).valor);
                vector.valor[Number(variable.valor)] = vector2.valor[Number(this.expresion2.expresion.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.CADENA
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.INT && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.ID){
                //aca uno es numeros y el otro es variable int: dato3 [0] = dato3[a];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                //let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                let variable2 = entorno.getSimbolo(this.expresion2.expresion.valor);
                vector.valor[Number(this.expresion1.valor)] = vector2.valor[Number(variable2.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.CADENA
                return this;
            }
            else if(this.expresion1.interpretar(entorno).tipo == TipoDato.ID && this.expresion2.interpretar(entorno).tipo == undefined && this.expresion2.interpretar(entorno).expresion.tipo == TipoDato.ID){
                //aca uno es numeros y el otro es variable int: dato3 [a] = dato3[a];
                let vector = entorno.getSimbolo(this.id);
                let vector2 = entorno.getSimbolo(this.expresion2.id);
                let variable = entorno.getSimbolo(this.expresion1.interpretar(entorno).valor);
                let variable2 = entorno.getSimbolo(this.expresion2.expresion.valor);
                vector.valor[Number(variable.valor)] = vector2.valor[Number(variable2.valor)];
                entorno.editarSimbolo(this.id, vector.valor, this.fila, this.columna);
                this.tipo = TipoDato.CADENA
                return this;
            }
            else {
                return this
            }
        }
        //Error
        else{
            this.tipo = TipoDato.ERROR;
            console.log("Error Semantico: Error de tipo de dato enreasignacion de Vectores");
            return this;
        }
    }

}

module.exports = ReasignarVector;