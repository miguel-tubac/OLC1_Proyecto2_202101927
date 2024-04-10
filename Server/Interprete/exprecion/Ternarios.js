const Instruccion = require("../Instruccion.js");

class ternario extends Instruccion{
    constructor(condicion, expIzq, expDer){
        super();
        this.condicion = condicion;
        this.expIzq = expIzq;
        this.expDer = expDer;
        this.tipo = 'ERROR';
        this.valor = 'null';
    }

    interpretar(entorno){
        let valorIzq = this.expIzq.interpretar(null);
        let valorDer = this.expDer.interpretar(null);

        //La condicion es True
        if (this.condicion){
            return valorIzq;
        }
        // La condicion es Falsa
        else if(this.condicion == false){
            return valorDer;
        }
        else{
            this.tipo = "ERROR";
            console.log("Error Semantico: Error de tipo de dato");
            return this.tipo;
        }
    }
}
