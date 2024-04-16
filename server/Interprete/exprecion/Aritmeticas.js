const {Expresion, TipoDato} = require("../Expresion");

class Arutmeticas extends Expresion{

    constructor(expIzq, operador, expDer, fila, columna){
        super("ERROR", TipoDato.ERROR, fila, columna);
        this.expIzq = expIzq;
        this.operador = operador;
        this.expDer = expDer;
    }

    interpretar(entorno){
        this.expIzq.interpretar(entorno);
        this.expDer.interpretar(entorno);

        if(this.operador == "+"){
            // Entero + Entero = Entero
            if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.INT){
                this.tipo = TipoDato.INT;
                this.valor = Number(this.expIzq.valor) + Number(this.expDer.valor);
                return this;
            }
            // Entero + Double o Double + Entero = Double
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.INT){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) + Number(this.expDer.valor);
                return this;
            }
            //Todo.pendiente de validar true or false
            // Entero + Boolean = Entero
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.BOOLEAN){
                if(this.expDer.valor == true){
                    this.expDer.valor = 1;
                }else if(this.expDer.valor == false){
                    this.expDer.valor = 0;
                }
                this.tipo = TipoDato.INT;
                this.valor = Number(this.expIzq.valor) + Number(this.expDer.valor);
                return this;
            }
            // Boolean + Entero = Entero
            else if(this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.INT){
                if(this.expIzq.valor == true){
                    this.expIzq.valor = 1;
                }else if(this.expIzq.valor == false){
                    this.expIzq.valor = 0;
                }
                this.tipo = TipoDato.INT;
                this.valor = Number(this.expIzq.valor) + Number(this.expDer.valor);
                return this;
            }
            // Entero + Caracter = Entero
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.INT;
                this.valor = Number(this.expIzq.valor) + Number(this.expDer.valor);
                return this;
            }
            // Caracter + Entero = Entero
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.INT){
                this.tipo = TipoDato.INT;
                this.valor = Number(this.expIzq.valor) + Number(this.expDer.valor);
                return this;
            }
            // Entero + String = String
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.CADENA){
                this.tipo = TipoDato.CADENA;
                this.valor = this.expIzq.valor + this.expDer.valor;
                return this;
            }
            // String + Entero = String
            else if(this.expIzq.tipo == TipoDato.CADENA && this.expDer.tipo == TipoDato.INT){
                this.tipo = TipoDato.CADENA;
                this.valor = this.expIzq.valor + this.expDer.valor;
                return this;
            }
            // Double + Doubel = Doubel
            else if (this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.DOUBLE){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) + Number(this.expDer.valor);
                return this;
            }
            // Double + Boolean = Doubel
            else if (this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.BOOLEAN){
                if(this.expDer.valor == true){
                    this.expDer.valor = 1;
                }else if(this.expDer.valor == false){
                    this.expDer.valor = 0;
                }
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) + Number(this.expDer.valor);
                return this;
            }
            // Boolean + Double = Doubel
            else if (this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.DOUBLE){
                if(this.expIzq.valor == true){
                    this.expIzq.valor = 1;
                }else if(this.expIzq.valor == false){
                    this.expIzq.valor = 0;
                }
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) + Number(this.expDer.valor);
                return this;
            }
            // Boolean + String = String
            else if (this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.CADENA){
                if(this.expIzq.valor == true){
                    this.expIzq.valor = 1;
                }else if(this.expIzq.valor == false){
                    this.expIzq.valor = 0;
                }
                this.tipo = TipoDato.CADENA;
                this.valor = this.expIzq.valor + this.expDer.valor;
                return this;
            }
            // Doule + Caracter = Double
            else if (this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) + Number(this.expDer.valor);
                return this;
            }
            // Caracter + Caracter = String
            else if (this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.CADENA;
                this.valor = this.expIzq.valor + this.expDer.valor;
                return this;
            }
            // Caracter + String = String
            else if (this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.CADENA){
                this.tipo = TipoDato.CADENA;
                this.valor = this.expIzq.valor + this.expDer.valor;
                return this;
            }
            // Caracter +  Doule = Double
            else if (this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.DOUBLE){
                this.tipo = 'DOUBLE';
                this.valor = Number(this.expIzq.valor) + Number(this.expDer.valor);
                return this;
            }
            // DOUBLE + String = String
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.CADENA){
                this.tipo = TipoDato.CADENA;
                this.valor = this.expIzq.valor + this.expDer.valor;
                return this;
            }
            // String + DOUBLE = String
            else if(this.expIzq.tipo == TipoDato.CADENA && this.expDer.tipo == TipoDato.DOUBLE){
                this.tipo = TipoDato.CADENA;
                this.valor = this.expIzq.valor + this.expDer.valor;
                return this;
            } 
            // String + Boolean = String
            else if (this.expIzq.tipo == TipoDato.CADENA && this.expDer.tipo == TipoDato.BOOLEAN){
                if(this.expDer.valor == true){
                    this.expDer.valor = 1;
                }else if(this.expDer.valor == false){
                    this.expDer.valor = 0;
                }
                this.tipo = TipoDato.CADENA;
                this.valor = this.expIzq.valor + this.expDer.valor;
                return this;
            }
            // String + Caracter = String
            else if(this.expIzq.tipo == TipoDato.CADENA && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.CADENA;
                this.valor = this.expIzq.valor + this.expDer.valor;
                return this;
            }
            // String + String = String
            else if(this.expIzq.tipo == TipoDato.CADENA && this.expDer.tipo == TipoDato.CADENA){
                this.tipo = TipoDato.CADENA;
                this.valor = this.expIzq.valor + this.expDer.valor;
                return this;
            }   
            // Error de datos
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato");
                return this;
            }
        }


    }
}