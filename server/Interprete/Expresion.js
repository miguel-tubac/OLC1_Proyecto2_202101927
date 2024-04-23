class Expresion {

    constructor(valor, tipo, fila, columna){
        this.valor = valor;
        this.tipo = tipo;
        this.fila = fila;
        this.columna = columna;
    }

    interpretar(enterno){}

}

const TipoDato = {
    INT: 'INT',
    DOUBLE: 'DOUBLE',
    BOOLEAN: 'BOOLEAN',
    CHAR: 'CHAR',
    ID: 'ID',
    CADENA: 'CADENA',
    ENDL: 'ENDL',
    ERROR: 'ERROR',
    VOID: 'VOID'
}

module.exports = {Expresion, TipoDato};