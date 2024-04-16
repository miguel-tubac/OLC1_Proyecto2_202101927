const {Instruccion, TipoInst} = require("../Instruccion");
const Entorno = require("../entorno/Entorno");
const {TipoDato} = require("../Expresion");

class If extends Instruccion{

    constructor(condicion, instr_if, fila, columna){
        super(TipoInst.IF, fila, columna);
        this.condicion = condicion;
        this.instr_if = instr_if;
    }

    interpretar(entorno){
        let entornoIf = new Entorno(TipoInst.IF, entorno);
        this.condicion.interpretar(entornoIf);

        if (this.condicion.tipo != TipoDato.BOOLEAN){
            console.log("Error Semnatico: la condicion del if debe ser de tipo BOOLEAN");
            return this;
        }

        //Cunado tengamos una condicion verdadera:
        if(String(this.condicion.valor).toLowerCase() === "true"){
            this.instr_if.forEach(element => {
                element.interpretar(entornoIf);
            }); 
        }
        else{
            //Aca la ejcucion del else if o el else
        }
        //Todo Guardar el entorno
        return this;
    }
}

module.exports = If;