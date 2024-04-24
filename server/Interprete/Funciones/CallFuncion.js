const {Expresion, TipoDato} = require("../Expresion");
const Entorno = require("../entorno/Entorno");
const {TipoSimbolo} = require("../entorno/Simbolo.js");
const {Instruccion, TipoInst} = require("../Instruccion");
const Dato = require("../exprecion/Dato.js");

class CallFuncion extends Expresion{

    constructor(nombre, parametros, fila, columna){
        //El tipo void no se verifica this.valor = new Dato("ERROR", TipoDato.ERROR, fila, columna)
        super(new Dato("ERROR", TipoDato.ERROR, fila, columna), TipoDato.ERROR, fila, columna);
        this.nombre = nombre;
        this.parametros = parametros;
    }

    interpretar(entorno){
        let entornoParametros = new Entorno(TipoInst.FUNCION, entorno);
        let entornoFuncion = new Entorno(TipoInst.FUNCION, entornoParametros);
        let funcion = entorno.getFuncion(this.nombre);

        // Aca se comprueba que no se le pasaron parametros
        if(this.parametros != null){
            //Paso 1: Actualizar los parametros
            for (let i = 0; i < this.parametros.length; i++){
                if (funcion.parametros[i].tipo == this.parametros[i].interpretar(entornoFuncion).tipo){
                    entornoParametros.addSimbolo(funcion.parametros[i].valor, this.parametros[i].interpretar(entornoFuncion).valor, funcion.parametros[i].tipo, TipoSimbolo.VARIABLE, this.fila, this.columna)
                    funcion.parametros[i].valor = this.parametros[i].interpretar(entornoFuncion).valor;
                    //Aca se almacena en la tabla de simbolos
                    funcion.parametros[i].interpretar(entornoParametros);
                }
                else if(this.parametros[i].interpretar(entornoFuncion).tipo == TipoDato.ID){
                    let variable = entorno.getSimbolo(this.parametros[i].interpretar(entornoFuncion).valor);
                    if(variable.tipo == funcion.parametros[i].tipo){
                        entornoParametros.addSimbolo(funcion.parametros[i].valor, variable.valor, funcion.parametros[i].tipo, TipoSimbolo.VARIABLE, this.fila, this.columna)
                        funcion.parametros[i].valor = this.parametros[i].interpretar(entornoFuncion).valor;
                        //Aca se almacena en la tabla de simbolos
                        funcion.parametros[i].interpretar(entornoParametros);
                    }
                    else {
                        console.log("Error semantico en los tipos de datos ingresados por parametros.");
                        this.tipo = TipoDato.ERROR;
                        return this;
                    }
                }
                else {
                    console.log("Error semantico en los tipos de datos ingresados por parametros.");
                    this.tipo = TipoDato.ERROR;
                    return this;
                }
            }
        }
        
        //Aca se van ejecutando las instrucciones
        for (let i = 0; i < funcion.instrucciones.length; i++){
            let instruccion = funcion.instrucciones[i];
            instruccion.interpretar(entornoFuncion);
            //console.log(instruccion.tipo);
            //instruccion.interpretar(entornoFuncion).expresion;
            if(instruccion.tipo === TipoInst.RETURN){
                console.log("AQUI");
                this.valor = instruccion.expresion;
                this.tipo = instruccion.expresion.tipo;
                return this;
            }
        }

        return this //aca se retorna el objeto como tal
    }

}

module.exports = CallFuncion;