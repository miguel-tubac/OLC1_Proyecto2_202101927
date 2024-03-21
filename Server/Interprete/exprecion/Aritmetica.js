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