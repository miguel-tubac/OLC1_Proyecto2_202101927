const Instruccion = require("../Instruccion.js");

class Aritmetica extends Instruccion{
    constructor(expIzq, operador, expDer){
        super();
        this.expIzq = expIzq;
        this.operador = operador;
        this.expDer = expDer;
        this.tipo = 'ERROR';
        this.valor = 'null';
    }

    interpretar(entorno){
        let valorIzq = this.expIzq.interpretar(null);
        let valorDer = this.expDer.interpretar(null);

        //En esta parte inicia el analisis Semantico
        if(this.operador == "+"){
            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'INT';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }else if(this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE" || this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT"){
                this.tipo = 'DOUBLE';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }else if(this.expIzq.tipo == "INT" && this.expDer.tipo == "BOOLEAN"){
                if(this.expDer.valor == "TRUE"){
                    valorDer = 1;
                }else if(this.expDer.valor == "FALSE"){
                    valorDer = 0;
                }
                this.tipo = 'INT';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }else if(this.expIzq.tipo == "BOOLEAN" && this.expDer.tipo == "INT"){
                if(this.expIzq.valor == "TRUE"){
                    valorIzq = 1;
                }else if(this.expIzq.valor == "FALSE"){
                    valorIzq = 0;
                }
                this.tipo = 'INT';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }else if(this.expIzq.tipo == "INT" && this.expDer.tipo == "CARACTER"){
                valorDer = Number(valorDer);
                this.tipo = 'INT';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }else if(this.expIzq.tipo == "CARACTER" && this.expDer.tipo == "INT"){
                valorIzq = Number(valorIzq);
                this.tipo = 'INT';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }else if(this.expIzq.tipo == "INT" && this.expDer.tipo == "STRING"){
                this.tipo = 'STRING';
                this.valor = valorIzq + valorDer;
                return this.valor;
            }else if(this.expIzq.tipo == "STRING" && this.expDer.tipo == "INT"){
                this.tipo = 'STRING';
                this.valor = valorIzq + valorDer;
                return this.valor;
            }else{
                this.tipo = "ERROR";
                console.log("Error Semantico: Error de tipo de dato");
                return this.tipo;
            }
        }
        else if(this.operador == "*"){
            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'INT';
                this.valor = valorIzq * valorDer;
                return Number(this.valor);
            }else{
                this.tipo = "ERROR";
                console.log("Error Semantico: Error de tipo de dato");
                return this.tipo;
            }
        }

    }

}


module.exports = Aritmetica;