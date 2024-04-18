const {Expresion, TipoDato} = require("../Expresion");
const {TipoSimbolo} = require("../entorno/Simbolo");
class Casteos extends Expresion{

    constructor(id, tipo, expresion, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.id = id;
        this.tipo = tipo;
        this.expresion = expresion;
    }

    interpretar(entorno){
        this.expresion.interpretar(entorno);
        var name = "";
        //Todo this.id.interpretar(entorno); //esto se realiza solo con la prodiccion rep_id
        this.id.forEach(element => {
            name = element.interpretar(entorno).valor;
        });
        if (this.tipo == TipoDato.INT && this.expresion.interpretar(entorno).tipo == TipoDato.DOUBLE){
            //console.log("Hola");
            //console.log(name);
            entorno.addSimbolo(name, parseInt(this.expresion.interpretar(entorno).valor), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
            
            return this;
        }
    }
}

module.exports = Casteos;
