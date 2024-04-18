const {Instruccion, TipoInst} = require("../Instruccion");
const {TipoSimbolo} = require("../entorno/Simbolo");
const {Expresion, TipoDato} = require("../Expresion");

class Declarar extends Instruccion{

    constructor(id, tipo, expresion, fila, columna){
        super(TipoInst.DECLARAR, fila, columna);
        this.expresion = expresion;
        this.id = id;
        this.tipo = tipo;
    }

    interpretar(entorno){
        if (this.expresion === "RENOMBRAR" || this.expresion === "ERROR_1" || this.expresion === "ERROR_2" || this.expresion === "ERROR_3" || this.expresion === "ERROR_4" || this.expresion === "ERROR_5"){
            //Aca se deja comentado
        }else{
            this.expresion.interpretar(entorno);
        }
            
        //this.id.interpretar(entorno);
        // Delclaracion del tipo: int a,d,f;
        if (this.expresion === "ERROR_1" && this.tipo === TipoDato.INT){
            //Se recorre el areglo por si hay mas variables declaradas:
            this.id.forEach(element => {
                entorno.addSimbolo(element.interpretar(entorno).valor, 0, this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
            });
        }
        // Declaracion del tipo: int a,d,f = 12;
        else if(this.expresion.tipo === TipoDato.INT && this.tipo === TipoDato.INT){
            // Se interpreta el valor:
            this.expresion.interpretar(entorno);
            // Obtener la longitud del arreglo
            const longitud = this.id.length;
            //Se recorre el areglo por si hay mas variables declaradas:
            this.id.forEach((element, index) => {
                //console.log(element.valor);  
                if (index === longitud - 1){
                    entorno.addSimbolo(element.interpretar(entorno).valor, Number(this.expresion.valor), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                }else {
                    entorno.addSimbolo(element.interpretar(entorno).valor, 0, this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                }
            });
        }
        else if(this.expresion === "ERROR_2" && this.tipo === TipoDato.CADENA){
            //Se recorre el areglo por si hay mas variables declaradas:
            this.id.forEach(element => {
                entorno.addSimbolo(element.interpretar(entorno).valor, "", this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
            });
        }
        else if(this.expresion.tipo === TipoDato.CADENA && this.tipo === TipoDato.CADENA){
            // Se interpreta el valor:
            this.expresion.interpretar(entorno);
            // Obtener la longitud del arreglo
            const longitud = this.id.length;
            //Se recorre el areglo por si hay mas variables declaradas:
            this.id.forEach((element, index) => {
                if (index === longitud - 1){
                    entorno.addSimbolo(element.interpretar(entorno).valor, String(this.expresion.valor), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                }else {
                    entorno.addSimbolo(element.interpretar(entorno).valor, "", this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                }
            });
        }
        else if(this.expresion === "ERROR_3" && this.tipo === TipoDato.CHAR){
            //Se recorre el areglo por si hay mas variables declaradas:
            this.id.forEach(element => {
                entorno.addSimbolo(element.interpretar(entorno).valor, '\u0000', this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
            });
        }
        else if(this.expresion.tipo === TipoDato.CHAR && this.tipo === TipoDato.CHAR){
            // Se interpreta el valor:
            this.expresion.interpretar(entorno);
            // Obtener la longitud del arreglo
            const longitud = this.id.length;
            //Se recorre el areglo por si hay mas variables declaradas:
            this.id.forEach((element, index) => {
                if (index === longitud - 1){
                    entorno.addSimbolo(element.interpretar(entorno).valor, String(this.expresion.valor), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                }else {
                    entorno.addSimbolo(element.interpretar(entorno).valor, '\u0000', this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                }
            });
        }
        else if(this.expresion === "ERROR_4" && this.tipo === TipoDato.BOOLEAN){
            //Se recorre el areglo por si hay mas variables declaradas:
            this.id.forEach(element => {
                entorno.addSimbolo(element.interpretar(entorno).valor, true, this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
            });
        }
        else if(this.expresion.tipo === TipoDato.BOOLEAN && this.tipo === TipoDato.BOOLEAN){
            // Se interpreta el valor:
            this.expresion.interpretar(entorno);
            // Obtener la longitud del arreglo
            const longitud = this.id.length;
            //Se recorre el areglo por si hay mas variables declaradas:
            this.id.forEach((element, index) => {
                if (index === longitud - 1){
                    var validacion = false;
                    if(String(this.expresion.valor).toLowerCase() === "true") validacion = true;
                    else if(String(this.expresion.valor).toLowerCase() === "false") validacion = false;
                    entorno.addSimbolo(element.interpretar(entorno).valor, validacion, this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                }else {
                    entorno.addSimbolo(element.interpretar(entorno).valor, true, this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                }
            });
        }
        else if(this.expresion === "ERROR_5" && this.tipo === TipoDato.DOUBLE){
            //Se recorre el areglo por si hay mas variables declaradas:
            this.id.forEach(element => {
                entorno.addSimbolo(element.interpretar(entorno).valor, 0.0, this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
            });
        }
        else if(this.expresion.tipo === TipoDato.DOUBLE && this.tipo === TipoDato.DOUBLE){
            // Se interpreta el valor:
            this.expresion.interpretar(entorno);
            // Obtener la longitud del arreglo
            const longitud = this.id.length;
            //Se recorre el areglo por si hay mas variables declaradas:
            this.id.forEach((element, index) => {
                if (index === longitud - 1){
                    entorno.addSimbolo(element.interpretar(entorno).valor, Number(this.expresion.valor), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                }else {
                    entorno.addSimbolo(element.interpretar(entorno).valor, 0.0, this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                }
            });
        }
        else if(this.expresion === "RENOMBRAR"){
            //console.log(entorno.getSimbolo(this.id));
            // console.log(this.id);
            // console.log(this.tipo.valor);
            if (this.tipo.tipo == TipoDato.INT && entorno.getSimbolo(this.id).tipo == TipoDato.INT){
                //Se edita la variable:
                entorno.editarSimbolo(this.id, Number(this.tipo.valor), this.fila, this.columna);
                //console.log(entorno.getSimbolo(this.id));
            }
            else if (this.tipo.tipo == TipoDato.CADENA && entorno.getSimbolo(this.id).tipo == TipoDato.CADENA){
                //Se edita la variable:
                entorno.editarSimbolo(this.id, String(this.tipo.valor), this.fila, this.columna);
                //console.log(entorno.getSimbolo(this.id));
            }
            else if (this.tipo.tipo == TipoDato.CHAR && entorno.getSimbolo(this.id).tipo == TipoDato.CHAR){
                //Se edita la variable:
                entorno.editarSimbolo(this.id, String(this.tipo.valor), this.fila, this.columna);
                //console.log(entorno.getSimbolo(this.id));
            }
            else if (this.tipo.tipo == TipoDato.BOOLEAN && entorno.getSimbolo(this.id).tipo == TipoDato.BOOLEAN){
                var validacion = false;
                if(String(this.tipo.valor).toLowerCase() === "true") validacion = true;
                else if(String(this.tipo.valor).toLowerCase() === "false") validacion = false;
                //Se edita la variable:
                entorno.editarSimbolo(this.id, validacion, this.fila, this.columna);
                //console.log(entorno.getSimbolo(this.id));
            }
            else if (this.tipo.tipo == TipoDato.DOUBLE && entorno.getSimbolo(this.id).tipo == TipoDato.DOUBLE){
                //Se edita la variable:
                entorno.editarSimbolo(this.id, Number(this.tipo.valor), this.fila, this.columna);
                //console.log(entorno.getSimbolo(this.id));
            }
            else{
                console.log("ERROR Semantico: en asignacion de tipo de dato con la variable renombrado");
                return this;
            }
        }
        // Aca se le cambia el valor a una variable, es decir; int a=1; int b = a;
        else if(this.expresion.tipo === TipoDato.ID ){
            //console.log("Hola");
            if (this.tipo == TipoDato.INT && entorno.getSimbolo(this.expresion.valor).tipo == TipoDato.INT){
                //Se recorre para obtener el valor del arglo de Dato y asignarlo a un nuevo valor
                this.id.forEach( element => {
                    //console.log(element.valor);
                    entorno.addSimbolo(element.valor, Number(entorno.getSimbolo(this.expresion.valor).valor), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna );
                    //console.log(entorno.getSimbolo(element.valor));
                })
            }
            else if (this.tipo == TipoDato.CADENA && entorno.getSimbolo(this.expresion.valor).tipo == TipoDato.CADENA){
                //Se recorre para obtener el valor del arglo de Dato y asignarlo a un nuevo valor
                this.id.forEach( element => {
                    //console.log(element.valor);
                    entorno.addSimbolo(element.valor, String(entorno.getSimbolo(this.expresion.valor).valor), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna );
                    //console.log(entorno.getSimbolo(element.valor));
                })
            }
            else if (this.tipo == TipoDato.CHAR && entorno.getSimbolo(this.expresion.valor).tipo == TipoDato.CHAR){
                //Se recorre para obtener el valor del arglo de Dato y asignarlo a un nuevo valor
                this.id.forEach( element => {
                    //console.log(element.valor);
                    entorno.addSimbolo(element.valor, String(entorno.getSimbolo(this.expresion.valor).valor), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna );
                    //console.log(entorno.getSimbolo(element.valor));
                })
            }
            else if (this.tipo == TipoDato.BOOLEAN && entorno.getSimbolo(this.expresion.valor).tipo == TipoDato.BOOLEAN){
                //Se recorre para obtener el valor del arglo de Dato y asignarlo a un nuevo valor
                this.id.forEach( element => {
                    entorno.addSimbolo(element.valor, entorno.getSimbolo(this.expresion.valor).valor, this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna );
                    //console.log(entorno.getSimbolo(element.valor));
                })
            }
            else if (this.tipo == TipoDato.DOUBLE && entorno.getSimbolo(this.expresion.valor).tipo == TipoDato.DOUBLE){
                //Se recorre para obtener el valor del arglo de Dato y asignarlo a un nuevo valor
                this.id.forEach( element => {
                    entorno.addSimbolo(element.valor, Number(entorno.getSimbolo(this.expresion.valor).valor), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna );
                    //console.log(entorno.getSimbolo(element.valor));
                })
            }
        }
        else{
            console.log("ERROR Semantico: en asignacion de tipo de dato con la variable general");
            return this;
        }
        
        //opcional
        // this.id.forEach(element => {
        //     console.log(entorno.getSimbolo(element.interpretar(entorno).valor));
        // });
        
        return this;
    }
}

module.exports = Declarar;