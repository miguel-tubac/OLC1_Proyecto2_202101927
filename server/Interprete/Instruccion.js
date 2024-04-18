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
    DECLARAR: 'DECLARAR',
    INICIO: 'INICIO',
}

module.exports = {Instruccion, TipoInst};