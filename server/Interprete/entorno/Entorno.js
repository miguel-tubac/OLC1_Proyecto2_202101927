const {Simbolo} = require("./Simbolo");
const {Expresion, TipoDato} = require("../Expresion");

class Entorno{

    constructor(nombre, anterior){
        this.nombre = nombre;
        this.anterior = anterior;
        this.tablaSim = {};
        this.tablaFunc = {};
    }

    addSimbolo(nombre, valor, tipo, tipoVar, fila, columna){
        if(nombre in this.tablaSim){
            console.log("Semantico: Variable ya declarada");
            return;
        }

        this.tablaSim[nombre] = new Simbolo(nombre, valor,  tipo, tipoVar, fila, columna)
    }

    getSimbolo(nombre){
        let ent = this;
        while(ent != null){
            if(!(nombre in ent.tablaSim)){
                ent = ent.anterior
            }
            return ent.tablaSim[nombre];
        }
        console.log("Semantico: variable no existe");
        return new Expresion("ERROR", TipoDato.ERROR, 0, 0);
        //Aca retornar un error
    }

    editarSimbolo(nombre, nuevoValor, fila, columna) {
        if (nombre in this.tablaSim) {
            const simbolo = this.tablaSim[nombre];
            simbolo.valor = nuevoValor;
            simbolo.fila = fila;
            simbolo.columna = columna;
        } else {
            console.log("Error Semantico: variable no existe en la asignacion.");
            return;
        }
    }
}

module.exports = Entorno;