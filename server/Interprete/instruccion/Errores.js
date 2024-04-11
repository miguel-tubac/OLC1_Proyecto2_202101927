class Errores{
    constructor( tipo, descrip, linea, columna){
        this.tipo = tipo;
        this.descripcion= descrip;
        this.linea = linea;
        this.columna = columna;
    }
}

module.exports = Errores