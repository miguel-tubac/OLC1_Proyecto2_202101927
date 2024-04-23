const {Expresion, TipoDato} = require("../Expresion");
const Entorno = require("../entorno/Entorno");
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

        
        // console.log(this.parametros);
        // console.log(funcion.parametros);
        //Paso 1: Actualizar los parametros
        //console.log(this.parametros.length);
        for (let i = 0; i < this.parametros.length; i++){
            funcion.parametros[i].valor = this.parametros[i].interpretar(entornoFuncion).valor;
            //Aca se almacena en la tabla de simbolos
            //console.log(funcion.parametros[i].valor);
            //console.log( this.parametros[i].interpretar(entornoFuncion).valor);
            funcion.parametros[i].interpretar(entornoParametros);
        }
        //console.log(funcion);
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