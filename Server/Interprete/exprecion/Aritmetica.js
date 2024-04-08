const Instruccion = require("../Instruccion.js");

class Aritmetica extends Instruccion{
    constructor(expIzq, operador, expDer){
        super();
        this.expIzq = expIzq;
        this.operador = operador;
        this.expDer = expDer;
        this.tipo = 'ERROR';
        this.valor = 'null';
    }

    interpretar(entorno){
        let valorIzq = this.expIzq.interpretar(null);
        let valorDer = this.expDer.interpretar(null);

        //En esta parte inicia el analisis Semantico
        //-----------------------------------------SUMA---------------------------------------------
        if(this.operador == "+"){
            // Entero + Entero = Entero
            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'INT';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }
            // Entero + Double o Double + Entero = Double
            else if(this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE" || this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT"){
                this.tipo = 'DOUBLE';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }
            // Entero + Boolean = Entero
            else if(this.expIzq.tipo == "INT" && this.expDer.tipo == "BOOLEAN"){
                if(this.expDer.valor == "TRUE"){
                    valorDer = 1;
                }else if(this.expDer.valor == "FALSE"){
                    valorDer = 0;
                }
                this.tipo = 'INT';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }
            // Boolean + Entero = Entero
            else if(this.expIzq.tipo == "BOOLEAN" && this.expDer.tipo == "INT"){
                if(this.expIzq.valor == "TRUE"){
                    valorIzq = 1;
                }else if(this.expIzq.valor == "FALSE"){
                    valorIzq = 0;
                }
                this.tipo = 'INT';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }
            // Entero + Caracter = Entero
            else if(this.expIzq.tipo == "INT" && this.expDer.tipo == "CARACTER"){
                valorDer = Number(valorDer);
                this.tipo = 'INT';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }
            // Caracter + Entero = Entero
            else if(this.expIzq.tipo == "CARACTER" && this.expDer.tipo == "INT"){
                valorIzq = Number(valorIzq);
                this.tipo = 'INT';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }
            // Entero + String = String
            else if(this.expIzq.tipo == "INT" && this.expDer.tipo == "STRING"){
                this.tipo = 'STRING';
                this.valor = valorIzq + valorDer;
                return this.valor;
            }
            // String + Entero = String
            else if(this.expIzq.tipo == "STRING" && this.expDer.tipo == "INT"){
                this.tipo = 'STRING';
                this.valor = valorIzq + valorDer;
                return this.valor;
            }
            // Double + Doubel = Doubel
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE"){
                this.tipo = 'DOUBLE';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }
            // Double + Boolean = Doubel
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "BOOLEAN"){
                if(this.expDer.valor == "TRUE"){
                    valorDer = 1;
                }else if(this.expDer.valor == "FALSE"){
                    valorDer = 0;
                }
                this.tipo = 'DOUBLE';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }
            // Boolean + Double = Doubel
            else if (this.expIzq.tipo == "BOOLEAN" && this.expDer.tipo == "DOUBLE"){
                if(this.expIzq.valor == "TRUE"){
                    valorIzq = 1;
                }else if(this.expIzq.valor == "FALSE"){
                    valorIzq = 0;
                }
                this.tipo = 'DOUBLE';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }
            // Boolean + String = String
            else if (this.expIzq.tipo == "BOOLEAN" && this.expDer.tipo == "STRING"){
                if(this.expIzq.valor == "TRUE"){
                    valorIzq = 1;
                }else if(this.expIzq.valor == "FALSE"){
                    valorIzq = 0;
                }
                this.tipo = 'STRING';
                this.valor = valorIzq + valorDer;
                return this.valor;
            }
            // Doule + Caracter = Double
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "CARACTER"){
                valorDer = Number(valorDer);
                this.tipo = 'DOUBLE';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }
            // Caracter + Caracter = String
            else if (this.expIzq.tipo == "CARACTER" && this.expDer.tipo == "CARACTER"){
                this.tipo = 'STRING';
                this.valor = valorIzq + valorDer;
                return this.valor;
            }
            // Caracter + String = String
            else if (this.expIzq.tipo == "CARACTER" && this.expDer.tipo == "STRING"){
                this.tipo = 'STRING';
                this.valor = valorIzq + valorDer;
                return this.valor;
            }
            // Caracter +  Doule = Double
            else if (this.expIzq.tipo == "CARACTER" && this.expDer.tipo == "DOUBLE"){
                valorIzq = Number(valorIzq);
                this.tipo = 'DOUBLE';
                this.valor = valorIzq + valorDer;
                return Number(this.valor);
            }
            // DOUBLE + String = String
            else if(this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "STRING"){
                this.tipo = 'STRING';
                this.valor = valorIzq + valorDer;
                return this.valor;
            }
            // String + DOUBLE = String
            else if(this.expIzq.tipo == "STRING" && this.expDer.tipo == "DOUBLE"){
                this.tipo = 'STRING';
                this.valor = valorIzq + valorDer;
                return this.valor;
            } 
            // String + Boolean = String
            else if (this.expIzq.tipo == "STRING" && this.expDer.tipo == "BOOLEAN"){
                if(this.expDer.valor == "TRUE"){
                    valorDer = 1;
                }else if(this.expDer.valor == "FALSE"){
                    valorDer = 0;
                }
                this.tipo = 'STRING';
                this.valor = valorIzq + valorDer;
                return this.valor;
            }
            // String + Caracter = String
            else if(this.expIzq.tipo == "STRING" && this.expDer.tipo == "CARACTER"){
                this.tipo = 'STRING';
                this.valor = valorIzq + valorDer;
                return this.valor;
            }
            // String + String = String
            else if(this.expIzq.tipo == "STRING" && this.expDer.tipo == "STRING"){
                this.tipo = 'STRING';
                this.valor = valorIzq + valorDer;
                return this.valor;
            }   
            // Error de datos
            else{
                this.tipo = "ERROR";
                console.log("Error Semantico: Error de tipo de dato");
                return this.tipo;
            }
        }
        else if(this.operador == "-"){
            // Entero - Entero = Entero
            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'INT';
                this.valor = valorIzq - valorDer;
                return Number(this.valor);
            }
            // Entero - Double o Double - Entero = Double
            else if(this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE" || this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT"){
                this.tipo = 'DOUBLE';
                this.valor = valorIzq - valorDer;
                return Number(this.valor);
            }
            // Entero - Boolean = Entero
            else if(this.expIzq.tipo == "INT" && this.expDer.tipo == "BOOLEAN"){
                if(this.expDer.valor == "TRUE"){
                    valorDer = 1;
                }else if(this.expDer.valor == "FALSE"){
                    valorDer = 0;
                }
                this.tipo = 'INT';
                this.valor = valorIzq - valorDer;
                return Number(this.valor);
            }
            // Boolean - Entero = Entero
            else if(this.expIzq.tipo == "BOOLEAN" && this.expDer.tipo == "INT"){
                if(this.expIzq.valor == "TRUE"){
                    valorIzq = 1;
                }else if(this.expIzq.valor == "FALSE"){
                    valorIzq = 0;
                }
                this.tipo = 'INT';
                this.valor = valorIzq - valorDer;
                return Number(this.valor);
            }
            // Entero - Caracter = Entero
            else if(this.expIzq.tipo == "INT" && this.expDer.tipo == "CARACTER"){
                valorDer = Number(valorDer);
                this.tipo = 'INT';
                this.valor = valorIzq - valorDer;
                return Number(this.valor);
            }
            // Caracter - Entero = Entero
            else if(this.expIzq.tipo == "CARACTER" && this.expDer.tipo == "INT"){
                valorIzq = Number(valorIzq);
                this.tipo = 'INT';
                this.valor = valorIzq - valorDer;
                return Number(this.valor);
            }
            // Double - Doubel = Doubel
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE"){
                this.tipo = 'DOUBLE';
                this.valor = valorIzq - valorDer;
                return Number(this.valor);
            }
            // Double - Boolean = Doubel
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "BOOLEAN"){
                if(this.expDer.valor == "TRUE"){
                    valorDer = 1;
                }else if(this.expDer.valor == "FALSE"){
                    valorDer = 0;
                }
                this.tipo = 'DOUBLE';
                this.valor = valorIzq - valorDer;
                return Number(this.valor);
            }
            // Boolean - Double = Doubel
            else if (this.expIzq.tipo == "BOOLEAN" && this.expDer.tipo == "DOUBLE"){
                if(this.expIzq.valor == "TRUE"){
                    valorIzq = 1;
                }else if(this.expIzq.valor == "FALSE"){
                    valorIzq = 0;
                }
                this.tipo = 'DOUBLE';
                this.valor = valorIzq - valorDer;
                return Number(this.valor);
            }
            // Doule - Caracter = Double
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "CARACTER"){
                valorDer = Number(valorDer);
                this.tipo = 'DOUBLE';
                this.valor = valorIzq - valorDer;
                return Number(this.valor);
            }
            // Caracter -  Doule = Double
            else if (this.expIzq.tipo == "CARACTER" && this.expDer.tipo == "DOUBLE"){
                valorIzq = Number(valorIzq);
                this.tipo = 'DOUBLE';
                this.valor = valorIzq - valorDer;
                return Number(this.valor);
            }
            // Error de datos
            else{
                this.tipo = "ERROR";
                console.log("Error Semantico: Error de tipo de dato");
                return this.tipo;
            }
        }
        else if(this.operador == "*"){
            // Entero * Entero = Entero
            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'INT';
                this.valor = valorIzq * valorDer;
                return Number(this.valor);
            }
            // Entero * Double o Double * Entero = Double
            else if(this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE" || this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT"){
                this.tipo = 'DOUBLE';
                this.valor = valorIzq * valorDer;
                return Number(this.valor);
            }
            // Entero * Caracter = Entero
            else if(this.expIzq.tipo == "INT" && this.expDer.tipo == "CARACTER"){
                valorDer = Number(valorDer);
                this.tipo = 'INT';
                this.valor = valorIzq * valorDer;
                return Number(this.valor);
            }
            // Caracter * Entero = Entero
            else if(this.expIzq.tipo == "CARACTER" && this.expDer.tipo == "INT"){
                valorIzq = Number(valorIzq);
                this.tipo = 'INT';
                this.valor = valorIzq * valorDer;
                return Number(this.valor);
            }
            // Double * Doubel = Doubel
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE"){
                this.tipo = 'DOUBLE';
                this.valor = valorIzq * valorDer;
                return Number(this.valor);
            }
            // Doule * Caracter = Double
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "CARACTER"){
                valorDer = Number(valorDer);
                this.tipo = 'DOUBLE';
                this.valor = valorIzq * valorDer;
                return Number(this.valor);
            }
            // Caracter *  Doule = Double
            else if (this.expIzq.tipo == "CARACTER" && this.expDer.tipo == "DOUBLE"){
                valorIzq = Number(valorIzq);
                this.tipo = 'DOUBLE';
                this.valor = valorIzq * valorDer;
                return Number(this.valor);
            }
            // Error de datos
            else{
                this.tipo = "ERROR";
                console.log("Error Semantico: Error de tipo de dato");
                return this.tipo;
            }
        }
        else if (this.operador == "/"){
            // Entero / Entero = DOUBLE
            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'DOUBLE';
                this.valor = valorIzq / valorDer;
                return Number(this.valor);
            }
            // Entero / Double o Double / Entero = Double
            else if(this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE" || this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT"){
                this.tipo = 'DOUBLE';
                this.valor = valorIzq / valorDer;
                return Number(this.valor);
            }
            // Entero / Caracter = DOUBLE
            else if(this.expIzq.tipo == "INT" && this.expDer.tipo == "CARACTER"){
                valorDer = Number(valorDer);
                this.tipo = 'DOUBLE';
                this.valor = valorIzq / valorDer;
                return Number(this.valor);
            }
            // Caracter / Entero = DOUBLE
            else if(this.expIzq.tipo == "CARACTER" && this.expDer.tipo == "INT"){
                valorIzq = Number(valorIzq);
                this.tipo = 'DOUBLE';
                this.valor = valorIzq / valorDer;
                return Number(this.valor);
            }
            // Double / Doubel = Doubel
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE"){
                this.tipo = 'DOUBLE';
                this.valor = valorIzq / valorDer;
                return Number(this.valor);
            }
            // Doule / Caracter = Double
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "CARACTER"){
                valorDer = Number(valorDer);
                this.tipo = 'DOUBLE';
                this.valor = valorIzq / valorDer;
                return Number(this.valor);
            }
            // Caracter /  Doule = Double
            else if (this.expIzq.tipo == "CARACTER" && this.expDer.tipo == "DOUBLE"){
                valorIzq = Number(valorIzq);
                this.tipo = 'DOUBLE';
                this.valor = valorIzq / valorDer;
                return Number(this.valor);
            }
            // Error de datos
            else{
                this.tipo = "ERROR";
                console.log("Error Semantico: Error de tipo de dato");
                return this.tipo;
            }
        }
        else if (this.operador == "pow"){
            // pow (Entero , Entero) = INT
            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'INT';
                this.valor = valorIzq ** valorDer;
                return Number(this.valor);
            }
            // pow (Entero , Double o Double , Entero) = Double
            else if(this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE" || this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT"){
                this.tipo = 'DOUBLE';
                this.valor = valorIzq ** valorDer;
                return Number(this.valor);
            }
            //pow ( Double , Doubel) = Doubel
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE"){
                this.tipo = 'DOUBLE';
                this.valor = valorIzq ** valorDer;
                return Number(this.valor);
            }
            // Error de datos
            else{
                this.tipo = "ERROR";
                console.log("Error Semantico: Error de tipo de dato");
                return this.tipo;
            }
        }
        else if (this.operador == "%"){
            // Entero % Entero = INT
            if(this.expIzq.tipo == "INT" && this.expDer.tipo == "INT"){
                this.tipo = 'DOUBLE';
                this.valor = valorIzq % valorDer;
                return Number(this.valor);
            }
            // Entero % Double o Double % Entero = Double
            else if(this.expIzq.tipo == "INT" && this.expDer.tipo == "DOUBLE" || this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "INT"){
                this.tipo = 'DOUBLE';
                this.valor = valorIzq % valorDer;
                return Number(this.valor);
            }
            // Double % Doubel = Doubel
            else if (this.expIzq.tipo == "DOUBLE" && this.expDer.tipo == "DOUBLE"){
                this.tipo = 'DOUBLE';
                this.valor = valorIzq % valorDer;
                return Number(this.valor);
            }
            // Error de datos
            else{
                this.tipo = "ERROR";
                console.log("Error Semantico: Error de tipo de dato");
                return this.tipo;
            }
        }
        else if (this.operador == "negativo"){
            // - Entero = - Entero
            if(this.expIzq.tipo == "INT"){
                this.tipo = 'INT';
                this.valor = -valorIzq;
                return Number(this.valor);
            }
            // - DOUBLE = - DOUBLE
            else if(this.expIzq.tipo == "DOUBLE"){
                this.tipo = 'DOUBLE';
                this.valor = -valorIzq;
                return Number(this.valor);
            }
            // Error de datos
            else{
                this.tipo = "ERROR";
                console.log("Error Semantico: Error de tipo de dato");
                return this.tipo;
            }
        }
        
    }
}


module.exports = Aritmetica;