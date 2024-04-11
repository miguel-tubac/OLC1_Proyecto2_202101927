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
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,6],$V1=[1,8],$V2=[1,7],$V3=[2,5,10,14],$V4=[1,14],$V5=[1,15],$V6=[1,16],$V7=[1,17],$V8=[1,18],$V9=[1,19],$Va=[1,20],$Vb=[1,22],$Vc=[1,21],$Vd=[1,24],$Ve=[1,41],$Vf=[1,28],$Vg=[1,29],$Vh=[1,30],$Vi=[1,31],$Vj=[1,32],$Vk=[1,33],$Vl=[1,34],$Vm=[1,35],$Vn=[1,36],$Vo=[1,37],$Vp=[1,38],$Vq=[1,39],$Vr=[1,40],$Vs=[12,13,15,18,19,27,28,29,30,33,34,35,36,37,38,39,40,41,42,43],$Vt=[12,13,15,18,19,33,34,42,43],$Vu=[12,13,15,18,19,27,28,33,34,36,37,38,39,40,41,42,43],$Vv=[12,13,15,18,19,33,34,36,37,38,39,40,41,42,43];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"inicio":3,"lista_instrucciones":4,"EOF":5,"instruccion":6,"print":7,"variables":8,"PYC":9,"INT":10,"expresion":11,"PUNTOYCOMA":12,"IGUAL":13,"COUT":14,"DOBLEMENOR":15,"ENDL":16,"ternario":17,"INTEROGACION":18,"DOSPUNTOS":19,"ENTERO":20,"NUMERODECIMA":21,"CARACTER":22,"TRUE":23,"FALSE":24,"ID":25,"TEXTO":26,"MAS":27,"MENOS":28,"MULTI":29,"DIVICION":30,"POW":31,"PARENTESIS_A":32,"COMA":33,"PARENTESIS_C":34,"MODULO":35,"DOBLEIGUAL":36,"DIFERENCIACION":37,"MENORIGUAL":38,"MENOR":39,"MAYORIGUAL":40,"MAYOR":41,"OR":42,"AND":43,"NOT":44,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"PYC",10:"INT",12:"PUNTOYCOMA",13:"IGUAL",14:"COUT",15:"DOBLEMENOR",16:"ENDL",18:"INTEROGACION",19:"DOSPUNTOS",20:"ENTERO",21:"NUMERODECIMA",22:"CARACTER",23:"TRUE",24:"FALSE",25:"ID",26:"TEXTO",27:"MAS",28:"MENOS",29:"MULTI",30:"DIVICION",31:"POW",32:"PARENTESIS_A",33:"COMA",34:"PARENTESIS_C",35:"MODULO",36:"DOBLEIGUAL",37:"DIFERENCIACION",38:"MENORIGUAL",39:"MENOR",40:"MAYORIGUAL",41:"MAYOR",42:"OR",43:"AND",44:"NOT"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,2],[8,3],[8,5],[7,4],[7,6],[17,5],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,3],[11,3],[11,3],[11,3],[11,6],[11,3],[11,2],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,1],[11,3],[11,3],[11,2]],
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
case 4: case 5:
 this.$ = $$[$0] 
break;
case 6:
 var nuevo_error = new Error("Error Sintáctico","Recuperado con: "+yytext, this._$.first_line, this._$.first_column); listaDeErrores.push(nuevo_error);
                            console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);
break;
case 7:
 this.$ = new Dato($$[$0-1], 'IDENTIFICADOR'); 
break;
case 8: case 10:
  
break;
case 9:
 this.$ = new Print($$[$0-1]); 
break;
case 11:
 this.$ = new Ternario($$[$0-4], $$[$0-2], $$[$0]); 
break;
case 12:
 this.$ = new Dato($$[$0], 'INT'); 
break;
case 13:
 this.$ = new Dato($$[$0], 'DOUBLE'); 
break;
case 14:
 this.$ = new Dato($$[$0].replace(/^'|'$/g, ''), 'CARACTER'); 
break;
case 15: case 16:
 this.$ = new Dato($$[$0].toUpperCase(), 'BOOLEAN'); 
break;
case 17:
 this.$ = new Dato($$[$0], 'ID'); 
break;
case 18:
 this.$ = new Dato($$[$0], 'STRING'); 
break;
case 19: case 20: case 21: case 22: case 24: case 26: case 27: case 28: case 29: case 30: case 31: case 33: case 34:
 this.$ = new Aritmetica($$[$0-2] ,$$[$0-1] ,$$[$0]); 
break;
case 23:
 this.$ = new Aritmetica($$[$0-3] ,"pow" ,$$[$0-1]); 
break;
case 25:
 this.$ = new Aritmetica($$[$0] ,"negativo",$$[$0]); 
break;
case 32:
this.$ = $$[$0];
break;
case 35:
 this.$ = new Aritmetica($$[$0] ,$$[$0-1] ,$$[$0]); 
break;
}
},
table: [{2:$V0,3:1,4:2,6:3,7:4,8:5,10:$V1,14:$V2},{1:[3]},{2:$V0,5:[1,9],6:10,7:4,8:5,10:$V1,14:$V2},o($V3,[2,3]),o($V3,[2,4]),o($V3,[2,5]),{9:[1,11]},{15:[1,12]},{11:13,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{1:[2,1]},o($V3,[2,2]),o($V3,[2,6]),{11:25,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{12:[1,26],13:[1,27],18:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr},o($Vs,[2,12]),o($Vs,[2,13]),o($Vs,[2,14]),o($Vs,[2,15]),o($Vs,[2,16]),o($Vs,[2,17]),o($Vs,[2,18]),{32:[1,42]},{11:43,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},o($Vs,[2,32]),{11:44,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{12:[1,45],15:[1,46],18:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr},o($V3,[2,7]),{11:47,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{11:48,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{11:49,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{11:50,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{11:51,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{11:52,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{11:53,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{11:54,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{11:55,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{11:56,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{11:57,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{11:58,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{11:59,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{11:60,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{11:61,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{11:62,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},o($Vs,[2,25]),o($Vt,[2,35],{27:$Vf,28:$Vg,29:$Vh,30:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp}),o($V3,[2,9]),{16:[1,63]},{12:[1,64],18:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr},o($Vu,[2,19],{29:$Vh,30:$Vi,35:$Vj}),o($Vu,[2,20],{29:$Vh,30:$Vi,35:$Vj}),o($Vs,[2,21]),o($Vs,[2,22]),o($Vs,[2,24]),o($Vv,[2,26],{27:$Vf,28:$Vg,29:$Vh,30:$Vi,35:$Vj}),o($Vv,[2,27],{27:$Vf,28:$Vg,29:$Vh,30:$Vi,35:$Vj}),o($Vv,[2,28],{27:$Vf,28:$Vg,29:$Vh,30:$Vi,35:$Vj}),o($Vv,[2,29],{27:$Vf,28:$Vg,29:$Vh,30:$Vi,35:$Vj}),o($Vv,[2,30],{27:$Vf,28:$Vg,29:$Vh,30:$Vi,35:$Vj}),o($Vv,[2,31],{27:$Vf,28:$Vg,29:$Vh,30:$Vi,35:$Vj}),o([12,13,15,18,19,33,34,42],[2,33],{27:$Vf,28:$Vg,29:$Vh,30:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,43:$Vr}),o($Vt,[2,34],{27:$Vf,28:$Vg,29:$Vh,30:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp}),{18:$Ve,19:[1,65],27:$Vf,28:$Vg,29:$Vh,30:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr},{18:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi,33:[1,66],35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr},{12:[1,67]},o($V3,[2,8]),{11:68,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},{11:69,17:23,20:$V4,21:$V5,22:$V6,23:$V7,24:$V8,25:$V9,26:$Va,28:$Vb,31:$Vc,44:$Vd},o($V3,[2,10]),o([12,13,15,18,19,33,34],[2,11],{27:$Vf,28:$Vg,29:$Vh,30:$Vi,35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr}),{18:$Ve,27:$Vf,28:$Vg,29:$Vh,30:$Vi,34:[1,70],35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr},o($Vs,[2,23])],
defaultActions: {9:[2,1]},
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

    //Aqui se inporta todas las clases que se creen para la ejecucion:
    const Dato = require("../Interprete/exprecion/Dato.js");
    const Print = require("../Interprete/instruccion/Principio.js");
    const Aritmetica = require("../Interprete/exprecion/Aritmetica.js");
    const Ternario = require("../Interprete/exprecion/Ternarios.js");
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
case 2: return 14; 
break;
case 3: return 16; 
break;
case 4: return 31; 
break;
case 5: return 23; 
break;
case 6: return 24; 
break;
case 7: return 10; 
break;
case 8: return 'STD'; 
break;
case 9: return 'STRING'; 
break;
case 10: return 'CHAR'; 
break;
case 11: return 'BOOL'; 
break;
case 12: return 'DOUBLE'; 
break;
case 13: return 37; 
break;
case 14: return 36; 
break;
case 15: return 13; 
break;
case 16: return 38; 
break;
case 17: return 15; 
break;
case 18: return 39; 
break;
case 19: return 40; 
break;
case 20: return 41; 
break;
case 21: return 42; 
break;
case 22: return 43; 
break;
case 23: return 44; 
break;
case 24: return 'DOBLEDOSPUNTOS'; 
break;
case 25: return 19; 
break;
case 26: return 12; 
break;
case 27: return 33; 
break;
case 28: return 32; 
break;
case 29: return 34; 
break;
case 30: return 27; 
break;
case 31: return 28; 
break;
case 32: return 29; 
break;
case 33: return 30; 
break;
case 34: return 35; 
break;
case 35: return 18; 
break;
case 36: return 21; 
break;
case 37: return 20; 
break;
case 38: return 25; 
break;
case 39: cadena=""; this.begin("string"); 
break;
case 40: cadena+=yy_.yytext; 
break;
case 41: cadena+="\""; 
break;
case 42: cadena+="\n"; 
break;
case 43: cadena+=" ";  
break;
case 44: cadena+="\t"; 
break;
case 45: cadena+="\\"; 
break;
case 46: cadena+="\'"; 
break;
case 47: yy_.yytext=cadena; this.popState(); return 26; 
break;
case 48: return 22 
break;
case 49:/* Espacios se ignoran */
break;
case 50:return 5;
break;
case 51: var nuevo_error = new Error("Error Léxico","Caracter Incorrecto: "+yy_.yytext, yy_.yylloc.first_line, yy_.yylloc.first_column); listaDeErrores.push(nuevo_error); 
    console.error('Error léxico: \"' + yy_.yytext + '\", linea: ' + yy_.yylloc.first_line + ', columna: ' + yy_.yylloc.first_column);
    return 'INVALIDO' 
break;
}
},
rules: [/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:cout\b)/i,/^(?:endl\b)/i,/^(?:pow\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:int\b)/i,/^(?:std\b)/i,/^(?:string\b)/i,/^(?:char\b)/i,/^(?:bool\b)/i,/^(?:double\b)/i,/^(?:!=)/i,/^(?:==)/i,/^(?:=)/i,/^(?:<=)/i,/^(?:<<)/i,/^(?:<)/i,/^(?:>=)/i,/^(?:>)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:!)/i,/^(?:::)/i,/^(?::)/i,/^(?:;)/i,/^(?:,)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\?)/i,/^(?:(([0-9]+[.][0-9]+)))/i,/^(?:([0-9]+))/i,/^(?:([a-zA-Z][a-zA-Z0-9_]*))/i,/^(?:["])/i,/^(?:[^"\\]+)/i,/^(?:\\")/i,/^(?:\\n)/i,/^(?:\s)/i,/^(?:\\t)/i,/^(?:\\\\)/i,/^(?:\\\\')/i,/^(?:["])/i,/^(?:["\'"]([^"\'"])?["\'"])/i,/^(?:[ \s\r\n\t])/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"string":{"rules":[40,41,42,43,44,45,46,47],"inclusive":false},"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,48,49,50,51],"inclusive":true}}
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