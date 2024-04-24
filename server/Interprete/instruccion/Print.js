const {TipoDato} = require("../Expresion");
const {Instruccion, TipoInst} = require("../Instruccion");
//const {TipoSimbolo} = require("../entorno/Simbolo");

class Print extends Instruccion{
    static valorTexto = ""; // Variable de texto asociada a la clase
    constructor(expresion, endl, fila, columna){
        super(TipoInst.PRINT, fila, columna);
        this.expresion = expresion;
        this.endl = endl;
    }

    interpretar(entorno){
        let valor = this.expresion.interpretar(entorno);
        if (this.expresion.tipo != TipoDato.ERROR){
            //console.log(this.expresion.tipo);
            if (this.expresion.tipo == TipoDato.ID){
                if (this.endl == null){
                    let dato = entorno.getSimbolo(this.expresion.valor);
                    if(Array.isArray(dato.valor)){
                        Print.valorTexto += JSON.stringify(dato.valor);
                        return;
                    }
                    else{
                        Print.valorTexto += dato.valor.toString();
                        return;
                    }
                }
                else{
                    let dato = entorno.getSimbolo(this.expresion.valor);
                    if(Array.isArray(dato.valor)){
                        Print.valorTexto += JSON.stringify(dato.valor)+ "\n";
                        return;
                    }
                    else{
                        Print.valorTexto += dato.valor.toString()+ "\n";
                        return;
                    }
                }
            }
            else{
                if (this.endl == null){
                    //Print.valorTexto += valor.valor.toString();
                    if(Array.isArray(valor.valor)){
                        Print.valorTexto += JSON.stringify(valor.valor);
                        return;
                    }
                    else{
                        Print.valorTexto += valor.valor.toString();
                        return;
                    }
                }
                else{
                    //Print.valorTexto += valor.valor.toString() + "\n";
                    if(Array.isArray(valor.valor)){
                        Print.valorTexto += JSON.stringify(valor.valor)+ "\n";
                        return;
                    }
                    else{
                        Print.valorTexto += valor.valor.toString()+ "\n";
                        return;
                    }
                }   
            }
        }
        else{
            //Todo recordar de comentar esto
            console.log("Error, no se puede imprimir errores, quiter luego");
            return this;
        }

    }

    static obtenerValorTexto() {
        return Print.valorTexto; // Método estático para obtener el valor de texto
    }

    static reiniciarValorTexto() {
        Print.valorTexto = "";
        return Print.valorTexto; // Método estático para obtener el valor de texto
    }
}

module.exports = Print;