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
            //Todo: Aca irian validaciones extras de la tabla variables.word
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.ID){
                //console.log("Hola");
                var izquierdo = entorno.getSimbolo(this.expIzq.valor);
                var derecho = entorno.getSimbolo(this.expDer.valor);

                //console.log(izquierdo.tipo);
                //console.log(entorno.getSimbolo(derecho));
                if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.INT){
                    //console.log("Hola2");
                    this.tipo = TipoDato.INT;
                    this.valor = izquierdo.valor + derecho.valor;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.INT){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = izquierdo.valor + derecho.valor;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.BOOLEAN || izquierdo.tipo === TipoDato.BOOLEAN && derecho.tipo === TipoDato.INT ){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(izquierdo.valor) + Number(derecho.valor);
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.CHAR || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.INT){
                    //console.log("Hola2");
                    this.tipo = TipoDato.INT;
                    this.valor = Number(izquierdo.valor) + Number(derecho.valor);
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.CADENA || izquierdo.tipo === TipoDato.CADENA && derecho.tipo === TipoDato.INT){
                    //console.log("Hola2");
                    this.tipo = TipoDato.CADENA;
                    this.valor = izquierdo.valor + derecho.valor;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.DOUBLE){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(izquierdo.valor) + Number(derecho.valor);
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.BOOLEAN || izquierdo.tipo === TipoDato.BOOLEAN && derecho.tipo === TipoDato.DOUBLE){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(izquierdo.valor) + Number(derecho.valor);
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.CHAR || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.DOUBLE){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(izquierdo.valor) + Number(derecho.valor);
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.CADENA || izquierdo.tipo === TipoDato.CADENA && derecho.tipo === TipoDato.DOUBLE){
                    //console.log("Hola2");
                    this.tipo = TipoDato.CADENA;
                    this.valor = izquierdo.valor + derecho.valor;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.BOOLEAN && derecho.tipo === TipoDato.CADENA || izquierdo.tipo === TipoDato.CADENA && derecho.tipo === TipoDato.BOOLEAN){
                    //console.log("Hola2");
                    this.tipo = TipoDato.CADENA;
                    this.valor = izquierdo.valor + derecho.valor;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.CHAR){
                    //console.log("Hola2");
                    this.tipo = TipoDato.CADENA;
                    this.valor = izquierdo.valor + derecho.valor;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.CADENA || izquierdo.tipo === TipoDato.CADENA && derecho.tipo === TipoDato.CHAR){
                    //console.log("Hola2");
                    this.tipo = TipoDato.CADENA;
                    this.valor = izquierdo.valor + derecho.valor;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.CADENA && derecho.tipo === TipoDato.CADENA){
                    //console.log("Hola2");
                    this.tipo = TipoDato.CADENA;
                    this.valor = izquierdo.valor + derecho.valor;
                    return this;
                }
                // Error de datos
                else{
                    this.tipo = TipoDato.ERROR;
                    console.log("Error Semantico: Error de tipo de dato en variables");
                    return this;
                }
            }
            // Inicio columna: -----int------ a + 2 (id + int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.INT){
                //(id.int + int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) + Number(this.expDer.valor);
                    return this;
                }
                //(id.double + int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) + Number(this.expDer.valor);
                    return this;
                }
                //(id.boolean + int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) + Number(this.expDer.valor);
                    return this;
                }
                //(id.char + int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) + Number(this.expDer.valor);
                    return this;
                }
                //(id.cadena + int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CADENA){
                    this.tipo = TipoDato.CADENA;
                    this.valor = entorno.getSimbolo(this.expIzq.valor).valor + this.expDer.valor;
                    return this;
                }
            }       // 2 + a (int + id)
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.ID){
                //(int + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(this.expIzq.valor) + Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(int + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) + Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(int + id.boolean)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(this.expIzq.valor) + Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(int + id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(this.expIzq.valor) + Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(int + id.cadena)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CADENA){
                    this.tipo = TipoDato.CADENA;
                    this.valor = this.expIzq.valor + entorno.getSimbolo(this.expDer.valor).valor;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----double------ a + 2.2 (id + double)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.DOUBLE){
                //(id.int + double)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) + Number(this.expDer.valor);
                    return this;
                }
                //(id.double + double)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) + Number(this.expDer.valor);
                    return this;
                }
                //(id.boolean + double)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) + Number(this.expDer.valor);
                    return this;
                }
                //(id.char + double)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) + Number(this.expDer.valor);
                    return this;
                }
                //(id.cadena + double)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CADENA){
                    this.tipo = TipoDato.CADENA;
                    this.valor = entorno.getSimbolo(this.expIzq.valor).valor + this.expDer.valor;
                    return this;
                }
            }       // 2.2 + a (double + id)
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.ID){
                //(double + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) + Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(double + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) + Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(double + id.boolean)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) + Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(double + id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) + Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(double + id.cadena)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CADENA){
                    this.tipo = TipoDato.CADENA;
                    this.valor = this.expIzq.valor + entorno.getSimbolo(this.expDer.valor).valor;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----boolean------ a + false (id + boolean)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.BOOLEAN){
                if(String(this.expDer.valor).toLowerCase() === "true")this.expDer.valor = true;
                else if(String(this.expDer.valor).toLowerCase() === "false")this.expDer.valor = false;
                //(id.int + boolean)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) + Number(this.expDer.valor);
                    return this;
                }
                //(id.double + boolean)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) + Number(this.expDer.valor);
                    return this;
                }
                //(id.cadena + boolean)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CADENA){
                    this.tipo = TipoDato.CADENA;
                    this.valor = entorno.getSimbolo(this.expIzq.valor).valor + this.expDer.valor;
                    return this;
                }
            }       // false + a (boolean + id)
            else if(this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.ID){
                if(String(this.expIzq.valor).toLowerCase() === "true")this.expIzq.valor = true;
                else if(String(this.expIzq.valor).toLowerCase() === "false")this.expIzq.valor = false;
                //(boolean + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(this.expIzq.valor) + Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(boolean + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) + Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(boolean + id.cadena)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CADENA){
                    this.tipo = TipoDato.CADENA;
                    this.valor = this.expIzq.valor + entorno.getSimbolo(this.expDer.valor).valor;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----char------ a + 'd' (id + char)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.CHAR){
                //(id.int + char)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) + Number(this.expDer.valor);
                    return this;
                }
                //(id.double + char)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) + Number(this.expDer.valor);
                    return this;
                }
                //(id.char + char)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.CADENA;
                    this.valor = entorno.getSimbolo(this.expIzq.valor).valor + this.expDer.valor;
                    return this;
                }
                //(id.cadena + char)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CADENA){
                    this.tipo = TipoDato.CADENA;
                    this.valor = entorno.getSimbolo(this.expIzq.valor).valor + this.expDer.valor;
                    return this;
                }
            }       // 'd' + a (char + id)
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.ID){
                //(char + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(this.expIzq.valor) + Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(char + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) + Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(char + id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.CADENA;
                    this.valor = this.expIzq.valor + entorno.getSimbolo(this.expDer.valor).valor;
                    return this;
                }
                //(char + id.cadena)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CADENA){
                    this.tipo = TipoDato.CADENA;
                    this.valor = this.expIzq.valor + entorno.getSimbolo(this.expDer.valor).valor;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----cadena------ a + "hola" (id + cadena)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.CADENA){
                //(id.int + cadena)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.CADENA;
                    this.valor = entorno.getSimbolo(this.expIzq.valor).valor + this.expDer.valor;
                    return this;
                }
                //(id.double + cadena)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.CADENA;
                    this.valor = entorno.getSimbolo(this.expIzq.valor).valor + this.expDer.valor;
                    return this;
                }
                //(id.boolean + cadena)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.CADENA;
                    this.valor = entorno.getSimbolo(this.expIzq.valor).valor + this.expDer.valor;
                    return this;
                }
                //(id.char + cadena)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.CADENA;
                    this.valor = entorno.getSimbolo(this.expIzq.valor).valor + this.expDer.valor;
                    return this;
                }
                //(id.cadena + cadena)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CADENA){
                    this.tipo = TipoDato.CADENA;
                    this.valor = entorno.getSimbolo(this.expIzq.valor).valor + this.expDer.valor;
                    return this;
                }
            }       // 2.2 + a (cadena + id)
            else if(this.expIzq.tipo == TipoDato.CADENA && this.expDer.tipo == TipoDato.ID){
                //(cadena + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.CADENA;
                    this.valor = this.expIzq.valor + entorno.getSimbolo(this.expDer.valor).valor;
                    return this;
                }
                //(cadena + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.CADENA;
                    this.valor = this.expIzq.valor + entorno.getSimbolo(this.expDer.valor).valor;
                    return this;
                }
                //(cadena + id.boolean)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.CADENA;
                    this.valor = this.expIzq.valor + entorno.getSimbolo(this.expDer.valor).valor;
                    return this;
                }
                //(cadena + id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.CADENA;
                    this.valor = this.expIzq.valor + entorno.getSimbolo(this.expDer.valor).valor;
                    return this;
                }
                //(cadena + id.cadena)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CADENA){
                    this.tipo = TipoDato.CADENA;
                    this.valor = this.expIzq.valor + entorno.getSimbolo(this.expDer.valor).valor;
                    return this;
                }
            }
            //fin       
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
            //Todo: Aca irian validaciones extras de la tabla variables.word
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.ID){
                //console.log("Hola");
                var izquierdo = entorno.getSimbolo(this.expIzq.valor);
                var derecho = entorno.getSimbolo(this.expDer.valor);

                //console.log(izquierdo.tipo);
                //console.log(entorno.getSimbolo(derecho));
                if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.INT){
                    //console.log("Hola2");
                    this.tipo = TipoDato.INT;
                    this.valor = izquierdo.valor - derecho.valor;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.INT){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = izquierdo.valor - derecho.valor;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.BOOLEAN || izquierdo.tipo === TipoDato.BOOLEAN && derecho.tipo === TipoDato.INT ){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(izquierdo.valor) - Number(derecho.valor);
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.CHAR || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.INT){
                    //console.log("Hola2");
                    this.tipo = TipoDato.INT;
                    this.valor = Number(izquierdo.valor) - Number(derecho.valor);
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.DOUBLE){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(izquierdo.valor) - Number(derecho.valor);
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.BOOLEAN || izquierdo.tipo === TipoDato.BOOLEAN && derecho.tipo === TipoDato.DOUBLE){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(izquierdo.valor) - Number(derecho.valor);
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.CHAR || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.DOUBLE){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(izquierdo.valor) - Number(derecho.valor);
                    return this;
                }
                // Error de datos
                else{
                    this.tipo = TipoDato.ERROR;
                    console.log("Error Semantico: Error de tipo de dato en variables");
                    return this;
                }
            }
            // Inicio columna: -----int------ a + 2 (id + int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.INT){
                //(id.int + int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) - Number(this.expDer.valor);
                    return this;
                }
                //(id.double + int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) - Number(this.expDer.valor);
                    return this;
                }
                //(id.boolean + int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) - Number(this.expDer.valor);
                    return this;
                }
                //(id.char + int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) - Number(this.expDer.valor);
                    return this;
                }
            }       // 2 + a (int + id)
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.ID){
                //(int + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(this.expIzq.valor) - Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(int + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) - Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(int + id.boolean)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(this.expIzq.valor) - Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(int + id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(this.expIzq.valor) - Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
            }
            //fin
            // Inicio columna: -----double------ a + 2.2 (id + double)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.DOUBLE){
                //(id.int + double)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) - Number(this.expDer.valor);
                    return this;
                }
                //(id.double + double)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) - Number(this.expDer.valor);
                    return this;
                }
                //(id.boolean + double)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) - Number(this.expDer.valor);
                    return this;
                }
                //(id.char + double)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) - Number(this.expDer.valor);
                    return this;
                }
            }       // 2.2 + a (double + id)
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.ID){
                //(double + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) - Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(double + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) - Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(double + id.boolean)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) - Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(double + id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) - Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
            }
            //fin
            // Inicio columna: -----boolean------ a + false (id + boolean)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.BOOLEAN){
                if(String(this.expDer.valor).toLowerCase() === "true")this.expDer.valor = true;
                else if(String(this.expDer.valor).toLowerCase() === "false")this.expDer.valor = false;
                //(id.int + boolean)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) - Number(this.expDer.valor);
                    return this;
                }
                //(id.double + boolean)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) - Number(this.expDer.valor);
                    return this;
                }
            }       // false + a (boolean + id)
            else if(this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.ID){
                if(String(this.expIzq.valor).toLowerCase() === "true")this.expIzq.valor = true;
                else if(String(this.expIzq.valor).toLowerCase() === "false")this.expIzq.valor = false;
                //(boolean + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(this.expIzq.valor) - Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(boolean + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) - Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
            }
            //fin
            // Inicio columna: -----char------ a + 'd' (id + char)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.CHAR){
                //(id.int + char)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) - Number(this.expDer.valor);
                    return this;
                }
                //(id.double + char)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) - Number(this.expDer.valor);
                    return this;
                }
            }       // 'd' + a (char + id)
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.ID){
                //(char + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(this.expIzq.valor) - Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(char + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) - Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
            }
            //fin
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
            //Todo: Aca irian validaciones extras de la tabla variables.word
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.ID){
                //console.log("Hola");
                var izquierdo = entorno.getSimbolo(this.expIzq.valor);
                var derecho = entorno.getSimbolo(this.expDer.valor);

                //console.log(izquierdo.tipo);
                //console.log(entorno.getSimbolo(derecho));
                if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.INT){
                    //console.log("Hola2");
                    this.tipo = TipoDato.INT;
                    this.valor = izquierdo.valor * derecho.valor;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.INT){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = izquierdo.valor * derecho.valor;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.CHAR || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.INT){
                    //console.log("Hola2");
                    this.tipo = TipoDato.INT;
                    this.valor = Number(izquierdo.valor) * Number(derecho.valor);
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.DOUBLE){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(izquierdo.valor) * Number(derecho.valor);
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.CHAR || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.DOUBLE){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(izquierdo.valor) * Number(derecho.valor);
                    return this;
                }
                // Error de datos
                else{
                    this.tipo = TipoDato.ERROR;
                    console.log("Error Semantico: Error de tipo de dato en variables");
                    return this;
                }
            }
            // Inicio columna: -----int------ a + 2 (id + int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.INT){
                //(id.int + int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) * Number(this.expDer.valor);
                    return this;
                }
                //(id.double + int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) * Number(this.expDer.valor);
                    return this;
                }
                //(id.char + int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) * Number(this.expDer.valor);
                    return this;
                }
            }       // 2 + a (int + id)
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.ID){
                //(int + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(this.expIzq.valor) * Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(int + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) * Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(int + id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(this.expIzq.valor) * Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
            }
            //fin
            // Inicio columna: -----double------ a + 2.2 (id + double)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.DOUBLE){
                //(id.int + double)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) * Number(this.expDer.valor);
                    return this;
                }
                //(id.double + double)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) * Number(this.expDer.valor);
                    return this;
                }
                //(id.char + double)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) * Number(this.expDer.valor);
                    return this;
                }
            }       // 2.2 + a (double + id)
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.ID){
                //(double + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) * Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(double + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) * Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(double + id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) * Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
            }
            //fin
            // Inicio columna: -----char------ a + 'd' (id + char)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.CHAR){
                //(id.int + char)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) * Number(this.expDer.valor);
                    return this;
                }
                //(id.double + char)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) * Number(this.expDer.valor);
                    return this;
                }
            }       // 'd' + a (char + id)
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.ID){
                //(char + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(this.expIzq.valor) * Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(char + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) * Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
            }
            //fin
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
            //Todo: Aca irian validaciones extras de la tabla variables.word
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.ID){
                //console.log("Hola");
                var izquierdo = entorno.getSimbolo(this.expIzq.valor);
                var derecho = entorno.getSimbolo(this.expDer.valor);

                //console.log(izquierdo.tipo);
                //console.log(entorno.getSimbolo(derecho));
                if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.INT){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = izquierdo.valor / derecho.valor;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.INT){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = izquierdo.valor / derecho.valor;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.CHAR || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.INT){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(izquierdo.valor) / Number(derecho.valor);
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.DOUBLE){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(izquierdo.valor) / Number(derecho.valor);
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.CHAR || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.DOUBLE){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(izquierdo.valor) / Number(derecho.valor);
                    return this;
                }
                // Error de datos
                else{
                    this.tipo = TipoDato.ERROR;
                    console.log("Error Semantico: Error de tipo de dato en variables");
                    return this;
                }
            }
            // Inicio columna: -----int------ a + 2 (id + int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.INT){
                //(id.int + int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) / Number(this.expDer.valor);
                    return this;
                }
                //(id.double + int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) / Number(this.expDer.valor);
                    return this;
                }
                //(id.char + int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) / Number(this.expDer.valor);
                    return this;
                }
            }       // 2 + a (int + id)
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.ID){
                //(int + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) / Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(int + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) / Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(int + id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) / Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
            }
            //fin
            // Inicio columna: -----double------ a + 2.2 (id + double)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.DOUBLE){
                //(id.int + double)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) / Number(this.expDer.valor);
                    return this;
                }
                //(id.double + double)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) / Number(this.expDer.valor);
                    return this;
                }
                //(id.char + double)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) / Number(this.expDer.valor);
                    return this;
                }
            }       // 2.2 + a (double + id)
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.ID){
                //(double + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) / Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(double + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) / Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(double + id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) / Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
            }
            //fin
            // Inicio columna: -----char------ a + 'd' (id + char)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.CHAR){
                //(id.int + char)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) / Number(this.expDer.valor);
                    return this;
                }
                //(id.double + char)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) / Number(this.expDer.valor);
                    return this;
                }
            }       // 'd' + a (char + id)
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.ID){
                //(char + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) / Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(char + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) / Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
            }
            //fin
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
            //Todo: Aca irian validaciones extras de la tabla variables.word
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.ID){
                //console.log("Hola");
                var izquierdo = entorno.getSimbolo(this.expIzq.valor);
                var derecho = entorno.getSimbolo(this.expDer.valor);

                //console.log(izquierdo.tipo);
                //console.log(entorno.getSimbolo(derecho));
                if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.INT){
                    //console.log("Hola2");
                    this.tipo = TipoDato.INT;
                    this.valor = izquierdo.valor ** derecho.valor;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.INT){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = izquierdo.valor ** derecho.valor;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.DOUBLE){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(izquierdo.valor) ** Number(derecho.valor);
                    return this;
                }
                // Error de datos
                else{
                    this.tipo = TipoDato.ERROR;
                    console.log("Error Semantico: Error de tipo de dato en variables");
                    return this;
                }
            }
            // Inicio columna: -----int------ a + 2 (id + int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.INT){
                //(id.int + int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) ** Number(this.expDer.valor);
                    return this;
                }
                //(id.double + int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) ** Number(this.expDer.valor);
                    return this;
                }
            }       // 2 + a (int + id)
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.ID){
                //(int + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.INT;
                    this.valor = Number(this.expIzq.valor) ** Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(int + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) ** Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
            }
            //fin
            // Inicio columna: -----double------ a + 2.2 (id + double)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.DOUBLE){
                //(id.int + double)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) ** Number(this.expDer.valor);
                    return this;
                }
                //(id.double + double)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) ** Number(this.expDer.valor);
                    return this;
                }
            }       // 2.2 + a (double + id)
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.ID){
                //(double + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) ** Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(double + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) ** Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
            }
            //fin
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
            //Todo: Aca irian validaciones extras de la tabla variables.word
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.ID){
                //console.log("Hola");
                var izquierdo = entorno.getSimbolo(this.expIzq.valor);
                var derecho = entorno.getSimbolo(this.expDer.valor);

                //console.log(izquierdo.tipo);
                //console.log(entorno.getSimbolo(derecho));
                if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.INT){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = izquierdo.valor % derecho.valor;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.INT){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = izquierdo.valor % derecho.valor;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.DOUBLE){
                    //console.log("Hola2");
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(izquierdo.valor) % Number(derecho.valor);
                    return this;
                }
                // Error de datos
                else{
                    this.tipo = TipoDato.ERROR;
                    console.log("Error Semantico: Error de tipo de dato en variables");
                    return this;
                }
            }
            // Inicio columna: -----int------ a + 2 (id + int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.INT){
                //(id.int + int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) % Number(this.expDer.valor);
                    return this;
                }
                //(id.double + int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) % Number(this.expDer.valor);
                    return this;
                }
            }       // 2 + a (int + id)
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.ID){
                //(int + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) % Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(int + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) % Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
            }
            //fin
            // Inicio columna: -----double------ a + 2.2 (id + double)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.DOUBLE){
                //(id.int + double)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) % Number(this.expDer.valor);
                    return this;
                }
                //(id.double + double)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(entorno.getSimbolo(this.expIzq.valor).valor) % Number(this.expDer.valor);
                    return this;
                }
            }       // 2.2 + a (double + id)
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.ID){
                //(double + id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) % Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
                //(double + id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.DOUBLE;
                    this.valor = Number(this.expIzq.valor) % Number(entorno.getSimbolo(this.expDer.valor).valor);
                    return this;
                }
            }
            //fin
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
            //Todo: Aca irian validaciones extras de la tabla variables.word
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.ID){
                //console.log("Hola");
                var izquierdo = entorno.getSimbolo(this.expIzq.valor);
                var derecho = entorno.getSimbolo(this.expDer.valor);

                if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) == Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) == Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.CHAR || izquierdo.tipo === TipoDato.BOOLEAN && derecho.tipo === TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) == Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                // Error de datos
                else{
                    this.tipo = TipoDato.ERROR;
                    console.log("Error Semantico: Error de tipo de dato en variables");
                    return this;
                }
            }
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.INT){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) == Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) == Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) == Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) == Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) == Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) == Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.DOUBLE){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) == Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) == Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) == Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) == Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) == Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) == Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.BOOLEAN){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (String(this.expDer.valor).toLowerCase() === "true") this.expDer.valor = true;
                    else if (String(this.expDer.valor).toLowerCase() === "false") this.expDer.valor = false;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) == Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (String(this.expIzq.valor).toLowerCase() === "true") this.expIzq.valor = true;
                    else if (String(this.expIzq.valor).toLowerCase() === "false")this.expIzq.valor = false;
                    if (Number(this.expIzq.valor) == Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.CHAR){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) == Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) == Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) == Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) == Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) == Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) == Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
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
            //Todo: Aca irian validaciones extras de la tabla variables.word
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.ID){
                //console.log("Hola");
                var izquierdo = entorno.getSimbolo(this.expIzq.valor);
                var derecho = entorno.getSimbolo(this.expDer.valor);

                if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) != Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) != Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.CHAR || izquierdo.tipo === TipoDato.BOOLEAN && derecho.tipo === TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) != Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                // Error de datos
                else{
                    this.tipo = TipoDato.ERROR;
                    console.log("Error Semantico: Error de tipo de dato en variables");
                    return this;
                }
            }
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.INT){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) != Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) != Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) != Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) != Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) != Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) != Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.DOUBLE){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) != Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) != Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) != Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) != Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) != Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) != Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.BOOLEAN){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (String(this.expDer.valor).toLowerCase() === "true") this.expDer.valor = true;
                    else if (String(this.expDer.valor).toLowerCase() === "false") this.expDer.valor = false;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) != Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (String(this.expIzq.valor).toLowerCase() === "true") this.expIzq.valor = true;
                    else if (String(this.expIzq.valor).toLowerCase() === "false")this.expIzq.valor = false;
                    if (Number(this.expIzq.valor) != Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.CHAR){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) != Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) != Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) != Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) != Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) != Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) != Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
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
            //Todo: Aca irian validaciones extras de la tabla variables.word
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.ID){
                //console.log("Hola");
                var izquierdo = entorno.getSimbolo(this.expIzq.valor);
                var derecho = entorno.getSimbolo(this.expDer.valor);

                if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) < Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) < Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.CHAR || izquierdo.tipo === TipoDato.BOOLEAN && derecho.tipo === TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) < Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                // Error de datos
                else{
                    this.tipo = TipoDato.ERROR;
                    console.log("Error Semantico: Error de tipo de dato en variables");
                    return this;
                }
            }
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.INT){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) < Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) < Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) < Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) < Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) < Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) < Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.DOUBLE){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) < Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) < Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) < Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) < Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) < Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) < Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.BOOLEAN){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (String(this.expDer.valor).toLowerCase() === "true") this.expDer.valor = true;
                    else if (String(this.expDer.valor).toLowerCase() === "false") this.expDer.valor = false;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) < Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (String(this.expIzq.valor).toLowerCase() === "true") this.expIzq.valor = true;
                    else if (String(this.expIzq.valor).toLowerCase() === "false")this.expIzq.valor = false;
                    if (Number(this.expIzq.valor) < Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.CHAR){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) < Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) < Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) < Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) < Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) < Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) < Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
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
            //Todo: Aca irian validaciones extras de la tabla variables.word
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.ID){
                //console.log("Hola");
                var izquierdo = entorno.getSimbolo(this.expIzq.valor);
                var derecho = entorno.getSimbolo(this.expDer.valor);

                if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) <= Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) <= Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.CHAR || izquierdo.tipo === TipoDato.BOOLEAN && derecho.tipo === TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) <= Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                // Error de datos
                else{
                    this.tipo = TipoDato.ERROR;
                    console.log("Error Semantico: Error de tipo de dato en variables");
                    return this;
                }
            }
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.INT){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) <= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) <= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) <= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) <= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) <= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) <= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.DOUBLE){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) <= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) <= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) <= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) <= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) <= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) <= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.BOOLEAN){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (String(this.expDer.valor).toLowerCase() === "true") this.expDer.valor = true;
                    else if (String(this.expDer.valor).toLowerCase() === "false") this.expDer.valor = false;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) <= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (String(this.expIzq.valor).toLowerCase() === "true") this.expIzq.valor = true;
                    else if (String(this.expIzq.valor).toLowerCase() === "false")this.expIzq.valor = false;
                    if (Number(this.expIzq.valor) <= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.CHAR){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) <= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) <= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) <= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) <= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) <= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) <= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
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
            //Todo: Aca irian validaciones extras de la tabla variables.word
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.ID){
                //console.log("Hola");
                var izquierdo = entorno.getSimbolo(this.expIzq.valor);
                var derecho = entorno.getSimbolo(this.expDer.valor);

                if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) > Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) > Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.CHAR || izquierdo.tipo === TipoDato.BOOLEAN && derecho.tipo === TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) > Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                // Error de datos
                else{
                    this.tipo = TipoDato.ERROR;
                    console.log("Error Semantico: Error de tipo de dato en variables");
                    return this;
                }
            }
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.INT){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) > Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) > Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) > Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) > Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) > Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) > Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.DOUBLE){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) > Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) > Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) > Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) > Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) > Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) > Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.BOOLEAN){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (String(this.expDer.valor).toLowerCase() === "true") this.expDer.valor = true;
                    else if (String(this.expDer.valor).toLowerCase() === "false") this.expDer.valor = false;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) > Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (String(this.expIzq.valor).toLowerCase() === "true") this.expIzq.valor = true;
                    else if (String(this.expIzq.valor).toLowerCase() === "false")this.expIzq.valor = false;
                    if (Number(this.expIzq.valor) > Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.CHAR){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) > Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) > Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) > Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) > Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) > Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) > Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
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
            //Todo: Aca irian validaciones extras de la tabla variables.word
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.ID){
                //console.log("Hola");
                var izquierdo = entorno.getSimbolo(this.expIzq.valor);
                var derecho = entorno.getSimbolo(this.expDer.valor);

                if(izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.INT && derecho.tipo === TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) >= Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.DOUBLE && derecho.tipo === TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) >= Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                else if(izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.INT || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.DOUBLE || izquierdo.tipo === TipoDato.CHAR && derecho.tipo === TipoDato.CHAR || izquierdo.tipo === TipoDato.BOOLEAN && derecho.tipo === TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if(Number(izquierdo.valor) >= Number(derecho.valor))this.valor = true;
                    else this.valor = false;
                    return this;
                }
                // Error de datos
                else{
                    this.tipo = TipoDato.ERROR;
                    console.log("Error Semantico: Error de tipo de dato en variables");
                    return this;
                }
            }
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.INT){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) >= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) >= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) >= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.INT && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) >= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) >= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) >= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.DOUBLE){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) >= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) >= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) >= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.DOUBLE && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) >= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) >= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) >= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.BOOLEAN){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (String(this.expDer.valor).toLowerCase() === "true") this.expDer.valor = true;
                    else if (String(this.expDer.valor).toLowerCase() === "false") this.expDer.valor = false;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) >= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (String(this.expIzq.valor).toLowerCase() === "true") this.expIzq.valor = true;
                    else if (String(this.expIzq.valor).toLowerCase() === "false")this.expIzq.valor = false;
                    if (Number(this.expIzq.valor) >= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.CHAR){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) >= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.double == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.DOUBLE){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) >= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(id.char == int)
                else if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(entorno.getSimbolo(this.expIzq.valor).valor) >= Number(this.expDer.valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.CHAR && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.INT){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) >= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.double)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) >= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
                //(int == id.char)
                else if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.CHAR){
                    this.tipo = TipoDato.BOOLEAN;
                    if (Number(this.expIzq.valor) >= Number(entorno.getSimbolo(this.expDer.valor).valor)) this.valor = true;
                    else this.valor = false;
                    return this;
                }
            }
            //fin
            // Error de datos
            else{
                this.tipo = TipoDato.ERROR;
                console.log("Error Semantico: Error de tipo de dato");
                return this;
            }
        }
        else if (this.operador == "||"){
            //String(this.expIzq.valor).toLowerCase()
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
            //Todo: Aca irian validaciones extras de la tabla variables.word
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.ID){
                //console.log("Hola");
                var izquierdo = entorno.getSimbolo(this.expIzq.valor);
                var derecho = entorno.getSimbolo(this.expDer.valor);

                if(izquierdo.valor === true || derecho.valor === true){
                    this.tipo = TipoDato.BOOLEAN;
                    this.valor = true;
                    return this;
                }
                else if(izquierdo.valor === false && derecho.valor === false){
                    this.tipo = TipoDato.BOOLEAN;
                    this.valor = false;
                    return this;
                }
                // Error de datos
                else{
                    this.tipo = TipoDato.ERROR;
                    console.log("Error Semantico: Error de tipo de dato en variables");
                    return this;
                }
            }
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.BOOLEAN){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.BOOLEAN){
                    if (String(this.expDer.valor).toLowerCase() === "true") this.expDer.valor = true;
                    else if (String(this.expDer.valor).toLowerCase() === "false") this.expDer.valor = false;
                    if (entorno.getSimbolo(this.expIzq.valor).valor == true || this.expDer.valor == true){
                        this.tipo = TipoDato.BOOLEAN;
                        this.valor = true;
                        return this;
                    }
                    else if (entorno.getSimbolo(this.expIzq.valor).valor == false && this.expDer.valor == false){
                        this.tipo = TipoDato.BOOLEAN;
                        this.valor = false;
                        return this;
                    }
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    if (String(this.expIzq.valor).toLowerCase() === "true")this.expIzq.valor = true;
                    else if (String(this.expIzq.valor).toLowerCase() === "false")this.expIzq.valor = false;
                    if (this.expIzq.valor == true || entorno.getSimbolo(this.expDer.valor).valor == true){
                        this.tipo = TipoDato.BOOLEAN;
                        this.valor = true;
                        return this;
                    }
                    else if (this.expIzq.valor == false && entorno.getSimbolo(this.expDer.valor).valor == false){
                        this.tipo = TipoDato.BOOLEAN;
                        this.valor = false;
                        return this;
                    }
                }
            }
            //fin
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
            //Todo: Aca irian validaciones extras de la tabla variables.word
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.ID){
                //console.log("Hola");
                var izquierdo = entorno.getSimbolo(this.expIzq.valor);
                var derecho = entorno.getSimbolo(this.expDer.valor);

                if(izquierdo.valor === true && derecho.valor === true){
                    this.tipo = TipoDato.BOOLEAN;
                    this.valor = true;
                    return this;
                }
                else if(izquierdo.valor === false || derecho.valor === false){
                    this.tipo = TipoDato.BOOLEAN;
                    this.valor = false;
                    return this;
                }
                // Error de datos
                else{
                    this.tipo = TipoDato.ERROR;
                    console.log("Error Semantico: Error de tipo de dato en variables");
                    return this;
                }
            }
            // Inicio columna: -----int------ a == 2 (id == int)
            else if(this.expIzq.tipo == TipoDato.ID && this.expDer.tipo == TipoDato.BOOLEAN){
                //(id.int == int)
                if(entorno.getSimbolo(this.expIzq.valor).tipo == TipoDato.BOOLEAN){
                    if (String(this.expDer.valor).toLowerCase() === "true") this.expDer.valor = true;
                    else if (String(this.expDer.valor).toLowerCase() === "false") this.expDer.valor = false;
                    if (entorno.getSimbolo(this.expIzq.valor).valor == true && this.expDer.valor == true){
                        this.tipo = TipoDato.BOOLEAN;
                        this.valor = true;
                        return this;
                    }
                    else if (entorno.getSimbolo(this.expIzq.valor).valor == false || this.expDer.valor == false){
                        this.tipo = TipoDato.BOOLEAN;
                        this.valor = false;
                        return this;
                    }
                }
            }       // 2 == a (int == id)
            else if(this.expIzq.tipo == TipoDato.BOOLEAN && this.expDer.tipo == TipoDato.ID){
                //(int == id.in)
                if(entorno.getSimbolo(this.expDer.valor).tipo == TipoDato.BOOLEAN){
                    if (String(this.expIzq.valor).toLowerCase() === "true")this.expIzq.valor = true;
                    else if (String(this.expIzq.valor).toLowerCase() === "false")this.expIzq.valor = false;
                    if (this.expIzq.valor == true && entorno.getSimbolo(this.expDer.valor).valor == true){
                        this.tipo = TipoDato.BOOLEAN;
                        this.valor = true;
                        return this;
                    }
                    else if (this.expIzq.valor == false || entorno.getSimbolo(this.expDer.valor).valor == false){
                        this.tipo = TipoDato.BOOLEAN;
                        this.valor = false;
                        return this;
                    }
                }
            }
            //fin
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
            //Todo: Reviasr hacer cambios
            else if(this.expDer.tipo == TipoDato.ID){
                var derecho = entorno.getSimbolo(this.expDer.valor);

                if(derecho.valor == true){
                    this.tipo = TipoDato.BOOLEAN;
                    this.valor = false;
                    return this;
                }
                else if(derecho.valor == false){
                    this.tipo = TipoDato.BOOLEAN;
                    this.valor = true;
                    return this;
                }
                // Error de datos
                else{
                    this.tipo = TipoDato.ERROR;
                    console.log("Error Semantico: Error de tipo de dato en variables");
                    return this;
                }
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