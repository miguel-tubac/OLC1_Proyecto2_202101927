const {Simbolo} = require("./Simbolo");
const {Expresion, TipoDato} = require("../Expresion");
const { TipoInst } = require("../Instruccion");
const Print = require("../instruccion/Print.js");

class Entorno{

    constructor(nombre, anterior){
        this.nombre = nombre;
        this.anterior = anterior;
        this.tablaSim = {};
        this.tablaFunc = {};
    }

    // ------------Incio de los simbolos
    addSimbolo(nombre, valor, tipo, tipoVar, fila, columna){
        if(nombre in this.tablaSim){
            console.log("Semantico: Variable ya declarada");
            Print.agregarTexto("Error Semántico: variable ya declarada"+" linea "+ fila +" columna "+ columna);
            return;
        }

        this.tablaSim[nombre] = new Simbolo(nombre, valor,  tipo, tipoVar, fila, columna)
    }

    getSimbolo(nombre){
        let ent = this;
        while(ent != null){
            if(!(nombre in ent.tablaSim)){
                ent = ent.anterior
            }else{
                return ent.tablaSim[nombre];
            }
        }
        //console.log("Semantico: variable no existe");
        Print.agregarTexto("Error Semántico: variable no encontrada");
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
            Print.agregarTexto("Error Semántico: variable no existe en la asignacion"+" linea "+ fila +" columna "+ columna);
            return;
        }
    }
    //---------------Fin de los simbolos

    // ------------Incio de las funciones y metodos
    addFuncion(nombre, instrucciones, fila, columna){
        if(nombre in this.tablaFunc){
            console.log("Semantico: Funcion o metodo ya declarada");
            Print.agregarTexto("Error Semántico: Funcion o metodo ya declarada"+" linea "+ fila +" columna "+ columna);
            return;
        }
        this.tablaFunc[nombre] =  instrucciones;    //new Simbolo(nombre, instrucciones,  tipo, fila, columna)
    }

    getFuncion(nombre){
        let ent = this;
        while(ent != null){
            if(!(nombre in ent.tablaFunc)){
                ent = ent.anterior
            }else{
                return ent.tablaFunc[nombre];
            }
        }
        //console.log("Semantico: variable no existe");
        Print.agregarTexto("Error Semántico: funcion o metodo no encontrado");
        return new Expresion("ERROR", TipoDato.ERROR, 0, 0);
        //Aca retornar un error
    }

    
    //---------------Fin de las funciones y metodos

    // esCiclo(){
    //     let ent = this;
    //     while(ent != null){
    //         if(ent.nombre == TipoInst.WHILE){//ACA EVALUAR LAS OTRAS FOR, IF SWITCH
    //             return true;
    //         }
    //         ent = ent.anterior;
    //     }
    //     return false;
    // }
}

module.exports = Entorno;