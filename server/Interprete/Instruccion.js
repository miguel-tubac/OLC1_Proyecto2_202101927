class Instruccion{
    //Metodo constructor
    constructor(tipo, fila, columna){
        this.tipo = tipo;
        this.fila = fila;
        this.columna = columna;
    }

    interpretar(entorno){}

    //Esta funcion posteriormente lo otulizare para generar la grafica
    getArbol(){}

}

const TipoInst = {
    PRINT: 'PRINT',
    IF: 'IF',
    WHILE: 'WHILE',
    DECLARAR: 'DECLARAR',
    INICIO: 'INICIO',
    METODO: 'METODO',
    BREAK: 'BREAK',
    RETURN: 'RETURN',
    FUNCION: 'FUNCION',
    EXECUTE: 'EXECUTE',
    CONTINUE: 'CONTINUE'
}

module.exports = {Instruccion, TipoInst};