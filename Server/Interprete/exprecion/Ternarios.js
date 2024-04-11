const Instruccion = require("../Instruccion.js");

class Ternarios extends Instruccion{
    constructor(condicion, expIzq, expDer){
        super();
        this.condicion = condicion;
        this.expIzq = expIzq;
        this.expDer = expDer;
        this.tipo = 'ERROR';
        this.valor = 'null';
    }

    interpretar(entorno){
        let valorCondicion = this.condicion.interpretar(null);
        let valorIzq = this.expIzq.interpretar(null);
        let valorDer = this.expDer.interpretar(null);
        //listaDeErrores.add("nuevo");

        if (valorCondicion){
            //console.log(valorIzq.tipo);
            this.tipo = this.expIzq.tipo;
            this.valor = valorIzq;
            return this.valor;
        }
        // La condicion es Falsa
        else if(valorCondicion == false){
            //console.log(this.expDer.tipo);
            this.tipo = this.expDer.tipo;
            this.valor = valorDer;
            return this.valor;
        }
        else{
            this.tipo = "ERROR";
            console.log("Error Semantico: Error de tipo de dato");
            return this.tipo;
        }
    }
}

module.exports = Ternarios;