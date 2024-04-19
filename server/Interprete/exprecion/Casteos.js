const {Expresion, TipoDato} = require("../Expresion");
const {TipoSimbolo} = require("../entorno/Simbolo");
class Casteos extends Expresion{

    constructor(id, tipo, expresion, arreglo, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.id = id;
        this.tipo = tipo;
        this.expresion = expresion;
        this.arreglo = arreglo;
    }

    interpretar(entorno){
        this.expresion.interpretar(entorno);
        //--------aca se evalua por si el id es un arreglo o no
        var name = "";
        if (this.arreglo == "SI"){
            // Aca se recorre el id ya que es un objeto
            this.id.forEach(element => {
                name = element.interpretar(entorno).valor;
            });
            //---------double a int------ int b = (int) 12.4;
            if (this.tipo == TipoDato.INT && this.expresion.interpretar(entorno).tipo == TipoDato.DOUBLE){
                entorno.addSimbolo(name, parseInt(this.expresion.interpretar(entorno).valor), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                return this;
            }   // double a = 12.4; int b = (int) a;
            else if (this.tipo == TipoDato.INT && this.expresion.interpretar(entorno).tipo == TipoDato.ID && entorno.getSimbolo(this.expresion.interpretar(entorno).valor).tipo == TipoDato.DOUBLE){
                entorno.addSimbolo(name, parseInt(entorno.getSimbolo(this.expresion.interpretar(entorno).valor).valor), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                return this;
            }
            //-----------fin---------------
            //---------int a double------ double b = (double) 12;
            if (this.tipo == TipoDato.DOUBLE && this.expresion.interpretar(entorno).tipo == TipoDato.INT){
                entorno.addSimbolo(name, parseFloat(this.expresion.interpretar(entorno).valor), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                return this;
            }   // int a = 12; double b = (double) a;
            else if (this.tipo == TipoDato.DOUBLE && this.expresion.interpretar(entorno).tipo == TipoDato.ID && entorno.getSimbolo(this.expresion.interpretar(entorno).valor).tipo == TipoDato.INT){
                entorno.addSimbolo(name, parseFloat(entorno.getSimbolo(this.expresion.interpretar(entorno).valor).valor), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                return this;
            }
            //-----------fin---------------
            //---------int a string o double a string------ std::string b = (std::string) 12;
            if (this.tipo == TipoDato.CADENA && (this.expresion.interpretar(entorno).tipo == TipoDato.INT || this.expresion.interpretar(entorno).tipo == TipoDato.DOUBLE)){
                entorno.addSimbolo(name, String(this.expresion.interpretar(entorno).valor), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                return this;
            }   // int a = 12; std::string b = (std::string) a;
            else if (this.tipo == TipoDato.CADENA && this.expresion.interpretar(entorno).tipo == TipoDato.ID && (entorno.getSimbolo(this.expresion.interpretar(entorno).valor).tipo == TipoDato.INT || entorno.getSimbolo(this.expresion.interpretar(entorno).valor).tipo == TipoDato.DOUBLE)){
                entorno.addSimbolo(name, String(entorno.getSimbolo(this.expresion.interpretar(entorno).valor).valor), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                return this;
            }
            //-----------fin---------------
            //---------int a char------ char b = (char) 12;
            if (this.tipo == TipoDato.CHAR && this.expresion.interpretar(entorno).tipo == TipoDato.INT){
                entorno.addSimbolo(name, String.fromCharCode(this.expresion.interpretar(entorno).valor), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                return this;
            }   // int a = 12; std::string b = (std::string) a;
            else if (this.tipo == TipoDato.CHAR && this.expresion.interpretar(entorno).tipo == TipoDato.ID && entorno.getSimbolo(this.expresion.interpretar(entorno).valor).tipo == TipoDato.INT){
                entorno.addSimbolo(name, String.fromCharCode(entorno.getSimbolo(this.expresion.interpretar(entorno).valor).valor), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                return this;
            }
            //-----------fin---------------
            //---------char a int------ int b = (int) 'F';
            if (this.tipo == TipoDato.INT && this.expresion.interpretar(entorno).tipo == TipoDato.CHAR){
                entorno.addSimbolo(name, (this.expresion.interpretar(entorno).valor).charCodeAt(0), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                return this;
            }   // int a = 12; std::string b = (std::string) a;
            else if (this.tipo == TipoDato.INT && this.expresion.interpretar(entorno).tipo == TipoDato.ID && entorno.getSimbolo(this.expresion.interpretar(entorno).valor).tipo == TipoDato.CHAR){
                entorno.addSimbolo(name, (entorno.getSimbolo(this.expresion.interpretar(entorno).valor).valor).charCodeAt(0), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                return this;
            }
            //-----------fin---------------
            //---------char a double------ double b = (double) 'F';
            if (this.tipo == TipoDato.DOUBLE && this.expresion.interpretar(entorno).tipo == TipoDato.CHAR){
                entorno.addSimbolo(name, ((this.expresion.interpretar(entorno).valor)).charCodeAt(0), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                return this;
            }   // int a = 12; std::string b = (std::string) a;
            else if (this.tipo == TipoDato.DOUBLE && this.expresion.interpretar(entorno).tipo == TipoDato.ID && entorno.getSimbolo(this.expresion.interpretar(entorno).valor).tipo == TipoDato.CHAR){
                entorno.addSimbolo(name, ((entorno.getSimbolo(this.expresion.interpretar(entorno).valor).valor)).charCodeAt(0), this.tipo, TipoSimbolo.VARIABLE, this.fila, this.columna);
                return this;
            }
            //-----------fin---------------
            // Error
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato en asignacion de casteos");
                return this;
            }
        }
        else if (this.arreglo == "NO"){
            //----se avuala si la variable ya esta declarada
            name = this.id;
            //-------------double a int------------ int a; a = (int) 12.45;
            if (entorno.getSimbolo(name).tipo == TipoDato.INT && this.expresion.interpretar(entorno).tipo == TipoDato.DOUBLE){
                entorno.editarSimbolo(name, parseInt(this.expresion.interpretar(entorno).valor), this.fila, this.columna);
                return this;
            }   // int a; double b; a = (int) b;
            else if (this.expresion.interpretar(entorno).tipo == TipoDato.ID && entorno.getSimbolo(name).tipo == TipoDato.INT && entorno.getSimbolo(this.expresion.interpretar(entorno).valor).tipo == TipoDato.DOUBLE){
                entorno.editarSimbolo(name, parseInt(entorno.getSimbolo(this.expresion.interpretar(entorno).valor).valor), this.fila, this.columna);
                return this;
            }
            //-----------------fin---------------------
            //-------------int a double------------ double a; a = (double) 12;
            else if (entorno.getSimbolo(name).tipo == TipoDato.DOUBLE && this.expresion.interpretar(entorno).tipo == TipoDato.INT){
                entorno.editarSimbolo(name, parseFloat(this.expresion.interpretar(entorno).valor), this.fila, this.columna);
                return this;
            }   // double a; int b; a = (double) b;
            else if (this.expresion.interpretar(entorno).tipo == TipoDato.ID && entorno.getSimbolo(name).tipo == TipoDato.DOUBLE && entorno.getSimbolo(this.expresion.interpretar(entorno).valor).tipo == TipoDato.INT){
                entorno.editarSimbolo(name, parseFloat(entorno.getSimbolo(this.expresion.interpretar(entorno).valor).valor), this.fila, this.columna);
                return this;
            }
            //-----------------fin---------------------
            //-------------int a string o double a string------------ std::string a; a = (double) 12;
            else if (entorno.getSimbolo(name).tipo == TipoDato.CADENA && (this.expresion.interpretar(entorno).tipo == TipoDato.INT || this.expresion.interpretar(entorno).tipo == TipoDato.DOUBLE)){
                entorno.editarSimbolo(name, String(this.expresion.interpretar(entorno).valor), this.fila, this.columna);
                return this;
            }   // std::string a; int b; a = (std::string) b;
            else if (this.expresion.interpretar(entorno).tipo == TipoDato.ID && entorno.getSimbolo(name).tipo == TipoDato.CADENA && (entorno.getSimbolo(this.expresion.interpretar(entorno).valor).tipo == TipoDato.INT || entorno.getSimbolo(this.expresion.interpretar(entorno).valor).tipo == TipoDato.DOUBLE)){
                entorno.editarSimbolo(name, String(entorno.getSimbolo(this.expresion.interpretar(entorno).valor).valor), this.fila, this.columna);
                return this;
            }
            //-----------------fin---------------------
            //-------------int a char------------ char a; a = (char) 12;
            else if (entorno.getSimbolo(name).tipo == TipoDato.CHAR && this.expresion.interpretar(entorno).tipo == TipoDato.INT){
                entorno.editarSimbolo(name, String.fromCharCode(this.expresion.interpretar(entorno).valor), this.fila, this.columna);
                return this;
            }   // char a; int b; a = (char) b;
            else if (this.expresion.interpretar(entorno).tipo == TipoDato.ID && entorno.getSimbolo(name).tipo == TipoDato.CHAR && entorno.getSimbolo(this.expresion.interpretar(entorno).valor).tipo == TipoDato.INT){
                entorno.editarSimbolo(name, String.fromCharCode(entorno.getSimbolo(this.expresion.interpretar(entorno).valor).valor), this.fila, this.columna);
                return this;
            }
            //-----------------fin---------------------
            //-------------char a int------------ int a; a = (int) 'F';
            else if (entorno.getSimbolo(name).tipo == TipoDato.INT && this.expresion.interpretar(entorno).tipo == TipoDato.CHAR){
                entorno.editarSimbolo(name, (this.expresion.interpretar(entorno).valor).charCodeAt(0), this.fila, this.columna);
                return this;
            }   // char a; int b; a = (char) b;
            else if (this.expresion.interpretar(entorno).tipo == TipoDato.ID && entorno.getSimbolo(name).tipo == TipoDato.INT && entorno.getSimbolo(this.expresion.interpretar(entorno).valor).tipo == TipoDato.CHAR){
                entorno.editarSimbolo(name, (entorno.getSimbolo(this.expresion.interpretar(entorno).valor).valor).charCodeAt(0), this.fila, this.columna);
                return this;
            }
            //-----------------fin---------------------
            //-------------char a double------------ double a; a = (double) 'F';
            else if (entorno.getSimbolo(name).tipo == TipoDato.DOUBLE && this.expresion.interpretar(entorno).tipo == TipoDato.CHAR){
                entorno.editarSimbolo(name, ((this.expresion.interpretar(entorno).valor)).charCodeAt(0), this.fila, this.columna);
                return this;
            }   // char a; int b; a = (char) b;
            else if (this.expresion.interpretar(entorno).tipo == TipoDato.ID && entorno.getSimbolo(name).tipo == TipoDato.DOUBLE && entorno.getSimbolo(this.expresion.interpretar(entorno).valor).tipo == TipoDato.CHAR){
                entorno.editarSimbolo(name, ((entorno.getSimbolo(this.expresion.interpretar(entorno).valor).valor)).charCodeAt(0), this.fila, this.columna);
                return this;
            }
            //-----------------fin---------------------
            // Error
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato en asignacion de casteos");
                return this;
            }
        }
        // Error
        else{
            this.tipo = TipoDato.ERROR;
            console.log("Error Semantico: Error de tipo de dato en asignacion de casteos");
            return this;
        }
    }
}

module.exports = Casteos;
