class Simbolo{

    constructor(nombre, valor, tipo, tipoVar, fila, columna){
        this.nombre = nombre;
        this.valor = valor;
        this.tipo = tipo;
        this.tipoVar = tipoVar;
        this.fila = fila;
        this.columna = columna;
    }
}

const TipoSimbolo = {
    ARREGLO: 'ARREGLO',
    VARIABLE: 'VARIABLE',
    FUNCTION: 'FUNCTION'
}

module.exports = {Simbolo, TipoSimbolo};