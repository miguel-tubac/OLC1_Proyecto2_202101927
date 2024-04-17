/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,6],$V1=[1,8],$V2=[1,9],$V3=[1,10],$V4=[1,11],$V5=[1,12],$V6=[1,13],$V7=[1,14],$V8=[2,5,11,16,19,20,21,22,24],$V9=[1,19],$Va=[1,28],$Vb=[13,14,23],$Vc=[1,42],$Vd=[1,37],$Ve=[1,38],$Vf=[1,39],$Vg=[1,40],$Vh=[1,41],$Vi=[1,43],$Vj=[1,45],$Vk=[1,44],$Vl=[1,47],$Vm=[1,69],$Vn=[1,56],$Vo=[1,57],$Vp=[1,58],$Vq=[1,59],$Vr=[1,60],$Vs=[1,61],$Vt=[1,62],$Vu=[1,63],$Vv=[1,64],$Vw=[1,65],$Vx=[1,66],$Vy=[1,67],$Vz=[1,68],$VA=[13,23,25,28,29,36,37,38,39,42,43,44,45,46,47,48,49,50,51],$VB=[13,23,25,28,29,42,50,51],$VC=[13,23,25,28,29,36,37,42,44,45,46,47,48,49,50,51],$VD=[13,23,25,28,29,42,44,45,46,47,48,49,50,51];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"inicio":3,"lista_instrucciones":4,"EOF":5,"instruccion":6,"cuerpo":7,"variables":8,"PYC":9,"print":10,"INT":11,"rep_iden":12,"PUNTOYCOMA":13,"IGUAL":14,"expresion":15,"STD":16,"DOBLEDOSPUNTOS":17,"STRING":18,"CHAR":19,"BOOL":20,"DOUBLE":21,"ID":22,"COMA":23,"COUT":24,"DOBLEMENOR":25,"ENDL":26,"ternario":27,"INTEROGACION":28,"DOSPUNTOS":29,"ENTERO":30,"NUMERODECIMA":31,"CARACTER":32,"TRUE":33,"FALSE":34,"TEXTO":35,"MAS":36,"MENOS":37,"MULTI":38,"DIVICION":39,"POW":40,"PARENTESIS_A":41,"PARENTESIS_C":42,"MODULO":43,"DOBLEIGUAL":44,"DIFERENCIACION":45,"MENORIGUAL":46,"MENOR":47,"MAYORIGUAL":48,"MAYOR":49,"OR":50,"AND":51,"NOT":52,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"PYC",11:"INT",13:"PUNTOYCOMA",14:"IGUAL",16:"STD",17:"DOBLEDOSPUNTOS",18:"STRING",19:"CHAR",20:"BOOL",21:"DOUBLE",22:"ID",23:"COMA",24:"COUT",25:"DOBLEMENOR",26:"ENDL",28:"INTEROGACION",29:"DOSPUNTOS",30:"ENTERO",31:"NUMERODECIMA",32:"CARACTER",33:"TRUE",34:"FALSE",35:"TEXTO",36:"MAS",37:"MENOS",38:"MULTI",39:"DIVICION",40:"POW",41:"PARENTESIS_A",42:"PARENTESIS_C",43:"MODULO",44:"DOBLEIGUAL",45:"DIFERENCIACION",46:"MENORIGUAL",47:"MENOR",48:"MAYORIGUAL",49:"MAYOR",50:"OR",51:"AND",52:"NOT"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,2],[7,1],[8,3],[8,5],[8,5],[8,7],[8,3],[8,5],[8,3],[8,5],[8,3],[8,5],[8,4],[12,3],[12,1],[10,4],[10,6],[27,5],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,3],[15,3],[15,3],[15,3],[15,6],[15,3],[15,2],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,1],[15,3],[15,3],[15,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 var final={'errores': listaDeErrores}; this.$ = $$[$0-1], final; listaDeErrores=[] ; return this.$; 
break;
case 2:
 this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 3:
 this.$ = []; this.$.push($$[$0]); 
break;
case 4: case 5: case 7:
 this.$ = $$[$0] 
break;
case 6:
 var nuevo_error = new Error("Error Sintáctico","Recuperado con: "+yytext, this._$.first_line, this._$.first_column); listaDeErrores.push(nuevo_error);
                            console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);
break;
case 8:
 this.$ = new Declarar($$[$0-1], TipoDato.INT, "ERROR_1", _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 9:
 this.$ = new Declarar($$[$0-3], TipoDato.INT, $$[$0-1], _$[$0-4].first_line, _$[$0-4].first_column); 
break;
case 10:
 this.$ = new Declarar($$[$0-1], TipoDato.CADENA, "ERROR_2", _$[$0-4].first_line, _$[$0-4].first_column); 
break;
case 11:
 this.$ = new Declarar($$[$0-3], TipoDato.CADENA, $$[$0-1], _$[$0-6].first_line, _$[$0-6].first_column); 
break;
case 12:
 this.$ = new Declarar($$[$0-1], TipoDato.CHAR, "ERROR_3", _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 13:
 this.$ = new Declarar($$[$0-3], TipoDato.CHAR, $$[$0-1], _$[$0-4].first_line, _$[$0-4].first_column); 
break;
case 14:
 this.$ = new Declarar($$[$0-1], TipoDato.BOOLEAN, "ERROR_4", _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 15:
 this.$ = new Declarar($$[$0-3], TipoDato.BOOLEAN, $$[$0-1], _$[$0-4].first_line, _$[$0-4].first_column); 
break;
case 16:
 this.$ = new Declarar($$[$0-1], TipoDato.DOUBLE, "ERROR_5", _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 17:
 this.$ = new Declarar($$[$0-3], TipoDato.DOUBLE, $$[$0-1], _$[$0-4].first_line, _$[$0-4].first_column); 
break;
case 18:
 this.$ = new Declarar($$[$0-3], $$[$0-1], "RENOMBRAR", _$[$0-3].first_line, _$[$0-3].first_column); 
break;
case 19:
 this.$ = $$[$0-2] ; this.$.push(new Dato($$[$0], TipoDato.ID, _$[$0-2].first_line, _$[$0-2].first_column)); 
break;
case 20:
 this.$ = [] ;  this.$.push(new Dato($$[$0], TipoDato.ID, _$[$0].first_line, _$[$0].first_column)); 
break;
case 21:
 this.$ = new Print($$[$0-1], null, _$[$0-3].first_line, _$[$0-3].first_column); 
break;
case 22:
 this.$ = new Print($$[$0-3], TipoDato.ENDL, _$[$0-5].first_line, _$[$0-5].first_column); 
break;
case 23:
 this.$ = new Ternario($$[$0-4], $$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column); 
break;
case 24:
 this.$ = new Dato($$[$0], TipoDato.INT, _$[$0].first_line, _$[$0].first_column); 
break;
case 25:
 this.$ = new Dato($$[$0], TipoDato.DOUBLE, _$[$0].first_line, _$[$0].first_column); 
break;
case 26:
 this.$ = new Dato($$[$0].replace(/^'|'$/g, ''), TipoDato.CHAR, _$[$0].first_line, _$[$0].first_column); 
break;
case 27: case 28:
 this.$ = new Dato($$[$0], TipoDato.BOOLEAN, _$[$0].first_line, _$[$0].first_column); 
break;
case 29:
 this.$ = new Dato($$[$0], TipoDato.ID, _$[$0].first_line, _$[$0].first_column); 
break;
case 30:
 this.$ = new Dato($$[$0], TipoDato.CADENA, _$[$0].first_line, _$[$0].first_column); 
break;
case 31: case 32: case 33: case 34: case 36: case 38: case 39: case 40: case 41: case 42: case 43: case 45: case 46:
 this.$ = new Aritmetica($$[$0-2] ,$$[$0-1] ,$$[$0], _$[$0-2].first_line, _$[$0-2].first_column); 
break;
case 35:
 this.$ = new Aritmetica($$[$0-3] ,"pow" ,$$[$0-1], _$[$0-5].first_line, _$[$0-5].first_column); 
break;
case 37:
 this.$ = new Negativo($$[$0], _$[$0-1].first_line, _$[$0-1].first_column); 
break;
case 44:
this.$ = $$[$0];
break;
case 47:
 this.$ = new Aritmetica($$[$0] ,$$[$0-1] ,$$[$0], _$[$0-1].first_line, _$[$0-1].first_column); 
break;
}
},
table: [{2:$V0,3:1,4:2,6:3,7:4,8:5,10:7,11:$V1,16:$V2,19:$V3,20:$V4,21:$V5,22:$V6,24:$V7},{1:[3]},{2:$V0,5:[1,15],6:16,7:4,8:5,10:7,11:$V1,16:$V2,19:$V3,20:$V4,21:$V5,22:$V6,24:$V7},o($V8,[2,3]),o($V8,[2,4]),o($V8,[2,5]),{9:[1,17]},o($V8,[2,7]),{12:18,22:$V9},{17:[1,20]},{12:21,22:$V9},{12:22,22:$V9},{12:23,22:$V9},{14:[1,24]},{25:[1,25]},{1:[2,1]},o($V8,[2,2]),o($V8,[2,6]),{13:[1,26],14:[1,27],23:$Va},o($Vb,[2,20]),{18:[1,29]},{13:[1,30],14:[1,31],23:$Va},{13:[1,32],14:[1,33],23:$Va},{13:[1,34],14:[1,35],23:$Va},{15:36,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{15:48,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},o($V8,[2,8]),{15:49,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{22:[1,50]},{12:51,22:$V9},o($V8,[2,12]),{15:52,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},o($V8,[2,14]),{15:53,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},o($V8,[2,16]),{15:54,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{13:[1,55],28:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz},o($VA,[2,24]),o($VA,[2,25]),o($VA,[2,26]),o($VA,[2,27]),o($VA,[2,28]),o($VA,[2,29]),o($VA,[2,30]),{41:[1,70]},{15:71,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},o($VA,[2,44]),{15:72,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{13:[1,73],25:[1,74],28:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz},{13:[1,75],28:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz},o($Vb,[2,19]),{13:[1,76],14:[1,77],23:$Va},{13:[1,78],28:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz},{13:[1,79],28:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz},{13:[1,80],28:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz},o($V8,[2,18]),{15:81,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{15:82,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{15:83,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{15:84,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{15:85,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{15:86,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{15:87,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{15:88,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{15:89,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{15:90,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{15:91,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{15:92,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{15:93,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{15:94,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{15:95,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},o($VA,[2,37]),o($VB,[2,47],{36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx}),o($V8,[2,21]),{26:[1,96]},o($V8,[2,9]),o($V8,[2,10]),{15:97,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},o($V8,[2,13]),o($V8,[2,15]),o($V8,[2,17]),o($VC,[2,31],{38:$Vp,39:$Vq,43:$Vr}),o($VC,[2,32],{38:$Vp,39:$Vq,43:$Vr}),o($VA,[2,33]),o($VA,[2,34]),o($VA,[2,36]),o($VD,[2,38],{36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr}),o($VD,[2,39],{36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr}),o($VD,[2,40],{36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr}),o($VD,[2,41],{36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr}),o($VD,[2,42],{36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr}),o($VD,[2,43],{36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr}),o([13,23,25,28,29,42,50],[2,45],{36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,51:$Vz}),o($VB,[2,46],{36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx}),{28:$Vm,29:[1,98],36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz},{23:[1,99],28:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz},{13:[1,100]},{13:[1,101],28:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz},{15:102,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},{15:103,22:$Vc,27:46,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,37:$Vj,40:$Vk,52:$Vl},o($V8,[2,22]),o($V8,[2,11]),o([13,23,25,28,29,42],[2,23],{36:$Vn,37:$Vo,38:$Vp,39:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz}),{28:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,42:[1,104],43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw,49:$Vx,50:$Vy,51:$Vz},o($VA,[2,35])],
defaultActions: {15:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

    var cadena="";
    var listaDeErrores=[];
    const Error = require("../Interprete/instruccion/Errores.js");

    //Dato Asociado
    const {TipoDato} = require("../Interprete/Expresion.js");

    //Expresion:
    const Dato = require("../Interprete/exprecion/Dato.js");
    const Aritmetica = require("../Interprete/exprecion/Aritmeticas.js");
    const Ternario = require("../Interprete/exprecion/Ternarios.js");
    const Negativo = require("../Interprete/exprecion/Negativo.js");

    //Instruccion:
    const Print = require("../Interprete/instruccion/Print.js");
    const Declarar = require("../Interprete/instruccion/Declarar.js");
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:// comentario de linea
break;
case 1:// comentario multiples lineas
break;
case 2: return 24; 
break;
case 3: return 26; 
break;
case 4: return 40; 
break;
case 5: return 16; 
break;
case 6: return 33; 
break;
case 7: return 34; 
break;
case 8: return 11; 
break;
case 9: return 16; 
break;
case 10: return 18; 
break;
case 11: return 19; 
break;
case 12: return 20; 
break;
case 13: return 21; 
break;
case 14: return 45; 
break;
case 15: return 44; 
break;
case 16: return 14; 
break;
case 17: return 46; 
break;
case 18: return 25; 
break;
case 19: return 47; 
break;
case 20: return 48; 
break;
case 21: return 49; 
break;
case 22: return 50; 
break;
case 23: return 51; 
break;
case 24: return 52; 
break;
case 25: return 17; 
break;
case 26: return 29; 
break;
case 27: return 13; 
break;
case 28: return 23; 
break;
case 29: return 41; 
break;
case 30: return 42; 
break;
case 31: return 36; 
break;
case 32: return 37; 
break;
case 33: return 38; 
break;
case 34: return 39; 
break;
case 35: return 43; 
break;
case 36: return 28; 
break;
case 37: return 31; 
break;
case 38: return 30; 
break;
case 39: return 22; 
break;
case 40: cadena=""; this.begin("string"); 
break;
case 41: cadena+=yy_.yytext; 
break;
case 42: cadena+="\""; 
break;
case 43: cadena+="\n"; 
break;
case 44: cadena+=" ";  
break;
case 45: cadena+="\t"; 
break;
case 46: cadena+="\\"; 
break;
case 47: cadena+="\'"; 
break;
case 48: yy_.yytext=cadena; this.popState(); return 35; 
break;
case 49: return 32 
break;
case 50:/* Espacios se ignoran */
break;
case 51:return 5;
break;
case 52: var nuevo_error = new Error("Error Léxico","Caracter Incorrecto: "+yy_.yytext, yy_.yylloc.first_line, yy_.yylloc.first_column); listaDeErrores.push(nuevo_error); 
    console.error('Error léxico: \"' + yy_.yytext + '\", linea: ' + yy_.yylloc.first_line + ', columna: ' + yy_.yylloc.first_column);
    return 'INVALIDO' 
break;
}
},
rules: [/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:cout\b)/i,/^(?:endl\b)/i,/^(?:pow\b)/i,/^(?:std\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:int\b)/i,/^(?:std\b)/i,/^(?:string\b)/i,/^(?:char\b)/i,/^(?:bool\b)/i,/^(?:double\b)/i,/^(?:!=)/i,/^(?:==)/i,/^(?:=)/i,/^(?:<=)/i,/^(?:<<)/i,/^(?:<)/i,/^(?:>=)/i,/^(?:>)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:::)/i,/^(?::)/i,/^(?:;)/i,/^(?:,)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\?)/i,/^(?:(([0-9]+[.][0-9]+)))/i,/^(?:([0-9]+))/i,/^(?:([a-zA-Z][a-zA-Z0-9_]*))/i,/^(?:["])/i,/^(?:[^"\\]+)/i,/^(?:\\")/i,/^(?:\\n)/i,/^(?:\s)/i,/^(?:\\t)/i,/^(?:\\\\)/i,/^(?:\\\\')/i,/^(?:["])/i,/^(?:["\'"]([^"\'"])?["\'"])/i,/^(?:[ \s\r\n\t])/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"string":{"rules":[41,42,43,44,45,46,47,48],"inclusive":false},"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,49,50,51,52],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}