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
            // Entero + Boolean = Entero
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.BOOLEAN){
                if(String(this.expDer.valor).toLowerCase() === "true"){
                    this.expDer.valor = 1;
                }else if(String(this.expDer.valor).toLowerCase() === "false"){
                    this.expDer.valor = 0;
                }
                this.tipo = TipoDato.INT;
                this.valor = Number(this.expIzq.valor) + Number(this.expDer.valor);
                return this;
            }
            // Boolean + Entero = Entero
            else if(this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.INT){
                if(String(this.expIzq.valor).toLowerCase() === "true"){
                    this.expIzq.valor = 1;
                }else if(String(this.expIzq.valor).toLowerCase() === "false"){
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
                if(String(this.expDer.valor).toLowerCase() === "true"){
                    this.expDer.valor = 1;
                }else if(String(this.expDer.valor).toLowerCase() === "false"){
                    this.expDer.valor = 0;
                }
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) + Number(this.expDer.valor);
                return this;
            }
            // Boolean + Double = Doubel
            else if (this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.DOUBLE){
                if(String(this.expIzq.valor).toLowerCase() === "true"){
                    this.expIzq.valor = 1;
                }else if(String(this.expIzq.valor).toLowerCase() === "false"){
                    this.expIzq.valor = 0;
                }
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) + Number(this.expDer.valor);
                return this;
            }
            // Boolean + String = String
            else if (this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.CADENA){
                if(String(this.expIzq.valor).toLowerCase() === "true"){
                    this.expIzq.valor = 1;
                }else if(String(this.expIzq.valor).toLowerCase() == "false"){
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
                if(String(this.expDer.valor).toLowerCase() === "true"){
                    this.expDer.valor = 1;
                }else if(String(this.expDer.valor).toLowerCase() === "false"){
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
        else if(this.operador == "-"){
            // Entero - Entero = Entero
            if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.INT){
                this.tipo = TipoDato.INT;
                this.valor = Number(this.expIzq.valor) - Number(this.expDer.valor);
                return this;
            }
            // Entero - Double o Double - Entero = Double
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.INT){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) - Number(this.expDer.valor);
                return this;
            }
            // Entero - Boolean = Entero
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.BOOLEAN){
                if(String(this.expDer.valor).toLowerCase() === "true"){
                    this.expDer.valor = 1;
                }else if(String(this.expDer.valor).toLowerCase() === "false"){
                    this.expDer.valor = 0;
                }
                this.tipo = TipoDato.INT;
                this.valor = Number(this.expIzq.valor) - Number(this.expDer.valor);
                return this;
            }
            // Boolean - Entero = Entero
            else if(this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.INT){
                if(String(this.expIzq.valor).toLowerCase() === "true"){
                    this.expIzq.valor = 1;
                }else if(String(this.expIzq.valor).toLowerCase() === "false"){
                    this.expIzq.valor = 0;
                }
                this.tipo = TipoDato.INT;
                this.valor = Number(this.expIzq.valor) - Number(this.expDer.valor);
                return this;
            }
            // Entero - Caracter = Entero
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.INT;
                this.valor = Number(this.expIzq.valor) - Number(this.expDer.valor);
                return this;
            }
            // Caracter - Entero = Entero
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.INT){
                this.tipo = TipoDato.INT;
                this.valor = Number(this.expIzq.valor) - Number(this.expDer.valor);
                return this;
            }
            // Double - Doubel = Doubel
            else if (this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.DOUBLE){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) - Number(this.expDer.valor);
                return this;
            }
            // Double - Boolean = Doubel
            else if (this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.BOOLEAN){
                if(String(this.expDer.valor).toLowerCase() === "true"){
                    this.expDer.valor = 1;
                }else if(String(this.expDer.valor).toLowerCase() === "false"){
                    this.expDer.valor = 0;
                }
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) - Number(this.expDer.valor);
                return this;
            }
            // Boolean - Double = Doubel
            else if (this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.DOUBLE){
                if(String(this.expIzq.valor).toLowerCase() === "true"){
                    this.expIzq.valor = 1;
                }else if(String(this.expIzq.valor).toLowerCase() === "false"){
                    this.expIzq.valor = 0;
                }
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) - Number(this.expDer.valor);
                return this;
            }
            // Doule - Caracter = Double
            else if (this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) - Number(this.expDer.valor);
                return this;
            }
            // Caracter -  Doule = Double
            else if (this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.DOUBLE){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) - Number(this.expDer.valor);
                return this;
            }
            // Error de datos
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato");
                return this;
            }
        }
        else if(this.operador == "*"){
            // Entero * Entero = Entero
            if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.INT){
                this.tipo = TipoDato.INT;
                this.valor = Number(this.expIzq.valor) * Number(this.expDer.valor);
                return this;
            }
            // Entero * Double o Double * Entero = Double
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.INT){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) * Number(this.expDer.valor);
                return this;
            }
            // Entero * Caracter = Entero
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.INT;
                this.valor = Number(this.expIzq.valor) * Number(this.expDer.valor);
                return this;
            }
            // Caracter * Entero = Entero
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.INT){
                this.tipo = TipoDato.INT;
                this.valor = Number(this.expIzq.valor) * Number(this.expDer.valor);
                return this;
            }
            // Double * Doubel = Doubel
            else if (this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.DOUBLE){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) * Number(this.expDer.valor);
                return this;
            }
            // Doule * Caracter = Double
            else if (this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) * Number(this.expDer.valor);
                return this;
            }
            // Caracter *  Doule = Double
            else if (this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.DOUBLE){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) * Number(this.expDer.valor);
                return this;
            }
            // Error de datos
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato");
                return this;
            }
        }
        else if (this.operador == "/"){
            // Entero / Entero = DOUBLE
            if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.INT){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) / Number(this.expDer.valor);
                return this;
            }
            // Entero / Double o Double / Entero = Double
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.INT){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) / Number(this.expDer.valor);
                return this;
            }
            // Entero / Caracter = DOUBLE
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) / Number(this.expDer.valor);
                return this;
            }
            // Caracter / Entero = DOUBLE
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.INT){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) / Number(this.expDer.valor);
                return this;
            }
            // Double / Doubel = Doubel
            else if (this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.DOUBLE){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) / Number(this.expDer.valor);
                return this;
            }
            // Doule / Caracter = Double
            else if (this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) / Number(this.expDer.valor);
                return this;
            }
            // Caracter /  Doule = Double
            else if (this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.DOUBLE){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) / Number(this.expDer.valor);
                return this;
            }
            // Error de datos
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato");
                return this;
            }
        }
        else if (this.operador == "pow"){
            // pow (Entero , Entero) = INT
            if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.INT){
                this.tipo = TipoDato.INT;
                this.valor = Number(this.expIzq.valor) ** Number(this.expDer.valor);
                return this;
            }
            // pow (Entero , Double o Double , Entero) = Double
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.INT){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) ** Number(this.expDer.valor);
                return this;
            }
            //pow ( Double , Doubel) = Doubel
            else if (this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.DOUBLE){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) ** Number(this.expDer.valor);
                return this;
            }
            // Error de datos
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato");
                return this;
            }
        }
        else if (this.operador == "%"){
            // Entero % Entero = INT
            if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.INT){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) % Number(this.expDer.valor);
                return this;
            }
            // Entero % Double o Double % Entero = Double
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.INT){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) % Number(this.expDer.valor);
                return this;
            }
            // Double % Doubel = Doubel
            else if (this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.DOUBLE){
                this.tipo = TipoDato.DOUBLE;
                this.valor = Number(this.expIzq.valor) % Number(this.expDer.valor);
                return this;
            }
            // Error de datos
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato");
                return this;
            }
        }
        else if (this.operador == "=="){
            // Entero == Entero o Entero == Double o Entero == caracter = True or False
            if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.DOUBLE  || this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) == Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Double == Entero o Double == Double o Doble == caracter= True or False
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) == Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Caracter == Entero o Caracter == Double o Caracter == caracter = True or False
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.CHAR || this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.BOOLEAN){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) == Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Error de datos
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato");
                return this;
            }
        }
        else if (this.operador == "!="){
            // Entero != Entero o Entero != Double o Entero != caracter = True or False
            if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.DOUBLE  || this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) != Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Double != Entero o Double != Double o Doble != caracter= True or False
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) != Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Caracter != Entero o Caracter != Double o Caracter != caracter = True or False
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.CHAR || this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.BOOLEAN){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) != Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Error de datos
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato");
                return this;
            }
        }
        else if (this.operador == "<"){
            // Entero < Entero o Entero < Double o Entero < caracter = True or False
            if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.DOUBLE  || this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) < Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Double < Entero o Double < Double o Doble < caracter= True or False
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) < Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Caracter < Entero o Caracter < Double o Caracter < caracter = True or False
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.CHAR || this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.BOOLEAN){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) < Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Error de datos
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato");
                return this;
            }
        }
        else if (this.operador == "<="){
            // Entero <= Entero o Entero <= Double o Entero <= caracter = True or False
            if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.DOUBLE  || this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) <= Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Double <= Entero o Double <= Double o Doble <= caracter= True or False
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) <= Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Caracter <= Entero o Caracter <= Double o Caracter <= caracter = True or False
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.CHAR || this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.BOOLEAN){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) <= Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Error de datos
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato");
                return this;
            }
        }
        else if (this.operador == ">"){
            // Entero > Entero o Entero > Double o Entero > caracter = True or False
            if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.DOUBLE  || this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) > Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Double > Entero o Double > Double o Doble > caracter= True or False
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) > Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Caracter > Entero o Caracter > Double o Caracter > caracter = True or False
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.CHAR || this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.BOOLEAN){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) > Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Error de datos
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato");
                return this;
            }
        }
        else if (this.operador == ">="){
            // Entero >= Entero o Entero >= Double o Entero >= caracter = True or False
            if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.DOUBLE  || this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) >= Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Double >= Entero o Double >= Double o Doble >=caracter= True or False
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.CHAR){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) >= Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Caracter >= Entero o Caracter >= Double o Caracter >= caracter = True or False
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.INT || this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.DOUBLE || this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.CHAR || this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.BOOLEAN){
                this.tipo = TipoDato.BOOLEAN;
                if(Number(this.expIzq.valor) >= Number(this.expDer.valor))this.valor = true;
                else this.valor = false;
                return this;
            }
            // Error de datos
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato");
                return this;
            }
        }
        else if (this.operador == "||"){
            String(this.expIzq.valor).toLowerCase()
            if (String(this.expIzq.valor).toLowerCase() === "true" || String(this.expDer.valor).toLowerCase() === "true"){
                this.tipo = TipoDato.BOOLEAN;
                this.valor = true;
                return this;
            }
            else if (String(this.expIzq.valor).toLowerCase() === "false" && String(this.expDer.valor).toLowerCase() === "false"){
                this.tipo = TipoDato.BOOLEAN;
                this.valor = false;
                return this;
            }
            // Error de datos
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato");
                return this;
            }
        }
        else if (this.operador == "&&"){
            if (String(this.expIzq.valor).toLowerCase() === "true" && String(this.expDer.valor).toLowerCase() == "true"){
                this.tipo = TipoDato.BOOLEAN;
                this.valor = true;
                return this;
            }
            else if (String(this.expIzq.valor).toLowerCase() === "false" || String(this.expDer.valor).toLowerCase() === "false"){
                this.tipo = TipoDato.BOOLEAN;
                this.valor = false;
                return this;
            }
            // Error de datos
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato");
                return this;
            }
        }
        else if (this.operador == "!"){
            if (String(this.expDer.valor).toLowerCase() === "true"){
                this.tipo = TipoDato.BOOLEAN;
                this.valor = false;
                return this;
            }
            else if (String(this.expDer.valor).toLowerCase() === "false"){
                this.tipo = TipoDato.BOOLEAN;
                this.valor = true;
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

module.exports = Arutmeticas;