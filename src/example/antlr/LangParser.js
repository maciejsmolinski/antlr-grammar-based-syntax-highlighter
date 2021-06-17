// Generated from src/support/lang/Lang.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LangListener from './LangListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\n6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0007\u0002\u0010\n\u0002\f\u0002\u000e\u0002\u0013\u000b",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0019",
    "\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0007\u0006\"\n\u0006\f\u0006\u000e\u0006%",
    "\u000b\u0006\u0003\u0007\u0003\u0007\u0006\u0007)\n\u0007\r\u0007\u000e",
    "\u0007*\u0003\u0007\u0003\u0007\u0007\u0007/\n\u0007\f\u0007\u000e\u0007",
    "2\u000b\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0002\u0002\b\u0002",
    "\u0004\u0006\b\n\f\u0002\u0002\u00026\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0004\u0018\u0003\u0002\u0002\u0002\u0006\u001a\u0003\u0002\u0002",
    "\u0002\b\u001c\u0003\u0002\u0002\u0002\n\u001e\u0003\u0002\u0002\u0002",
    "\f&\u0003\u0002\u0002\u0002\u000e\u0010\u0005\u0004\u0003\u0002\u000f",
    "\u000e\u0003\u0002\u0002\u0002\u0010\u0013\u0003\u0002\u0002\u0002\u0011",
    "\u000f\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002\u0012",
    "\u0003\u0003\u0002\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0014",
    "\u0019\u0005\u0006\u0004\u0002\u0015\u0019\u0005\b\u0005\u0002\u0016",
    "\u0019\u0005\n\u0006\u0002\u0017\u0019\u0005\f\u0007\u0002\u0018\u0014",
    "\u0003\u0002\u0002\u0002\u0018\u0015\u0003\u0002\u0002\u0002\u0018\u0016",
    "\u0003\u0002\u0002\u0002\u0018\u0017\u0003\u0002\u0002\u0002\u0019\u0005",
    "\u0003\u0002\u0002\u0002\u001a\u001b\u0007\u0007\u0002\u0002\u001b\u0007",
    "\u0003\u0002\u0002\u0002\u001c\u001d\u0007\b\u0002\u0002\u001d\t\u0003",
    "\u0002\u0002\u0002\u001e\u001f\u0007\u0006\u0002\u0002\u001f#\u0005",
    "\b\u0005\u0002 \"\u0005\u0004\u0003\u0002! \u0003\u0002\u0002\u0002",
    "\"%\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#$\u0003\u0002",
    "\u0002\u0002$\u000b\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002",
    "&(\u0007\u0005\u0002\u0002\')\u0005\b\u0005\u0002(\'\u0003\u0002\u0002",
    "\u0002)*\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*+\u0003\u0002",
    "\u0002\u0002+,\u0003\u0002\u0002\u0002,0\u0007\t\u0002\u0002-/\u0005",
    "\u0004\u0003\u0002.-\u0003\u0002\u0002\u0002/2\u0003\u0002\u0002\u0002",
    "0.\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u000213\u0003\u0002\u0002",
    "\u000220\u0003\u0002\u0002\u000234\u0007\n\u0002\u00024\r\u0003\u0002",
    "\u0002\u0002\u0007\u0011\u0018#*0"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class LangParser extends antlr4.Parser {

    static grammarFileName = "Lang.g4";
    static literalNames = [ null, null, null, null, null, null, null, "'{'", 
                            "'}'" ];
    static symbolicNames = [ null, "Whitespace", "Newline", "Defun", "Call", 
                             "Integer", "Identifier", "LeftBrace", "RightBrace" ];
    static ruleNames = [ "program", "expression", "integer", "identifier", 
                         "functionCall", "functionDefinition" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LangParser.ruleNames;
        this.literalNames = LangParser.literalNames;
        this.symbolicNames = LangParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LangParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LangParser.Defun) | (1 << LangParser.Call) | (1 << LangParser.Integer) | (1 << LangParser.Identifier))) !== 0)) {
	            this.state = 12;
	            this.expression();
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LangParser.RULE_expression);
	    try {
	        this.state = 22;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LangParser.Integer:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 18;
	            this.integer();
	            break;
	        case LangParser.Identifier:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 19;
	            this.identifier();
	            break;
	        case LangParser.Call:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 20;
	            this.functionCall();
	            break;
	        case LangParser.Defun:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 21;
	            this.functionDefinition();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LangParser.RULE_integer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(LangParser.Integer);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LangParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(LangParser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LangParser.RULE_functionCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(LangParser.Call);
	        this.state = 29;
	        this.identifier();
	        this.state = 33;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 30;
	                this.expression(); 
	            }
	            this.state = 35;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDefinition() {
	    let localctx = new FunctionDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LangParser.RULE_functionDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(LangParser.Defun);
	        this.state = 38; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 37;
	            this.identifier();
	            this.state = 40; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===LangParser.Identifier);
	        this.state = 42;
	        this.match(LangParser.LeftBrace);
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LangParser.Defun) | (1 << LangParser.Call) | (1 << LangParser.Integer) | (1 << LangParser.Identifier))) !== 0)) {
	            this.state = 43;
	            this.expression();
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 49;
	        this.match(LangParser.RightBrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LangParser.EOF = antlr4.Token.EOF;
LangParser.Whitespace = 1;
LangParser.Newline = 2;
LangParser.Defun = 3;
LangParser.Call = 4;
LangParser.Integer = 5;
LangParser.Identifier = 6;
LangParser.LeftBrace = 7;
LangParser.RightBrace = 8;

LangParser.RULE_program = 0;
LangParser.RULE_expression = 1;
LangParser.RULE_integer = 2;
LangParser.RULE_identifier = 3;
LangParser.RULE_functionCall = 4;
LangParser.RULE_functionDefinition = 5;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_program;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitProgram(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_expression;
    }

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	functionDefinition() {
	    return this.getTypedRuleContext(FunctionDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitExpression(this);
		}
	}


}



class IntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_integer;
    }

	Integer() {
	    return this.getToken(LangParser.Integer, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitInteger(this);
		}
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_identifier;
    }

	Identifier() {
	    return this.getToken(LangParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_functionCall;
    }

	Call() {
	    return this.getToken(LangParser.Call, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitFunctionCall(this);
		}
	}


}



class FunctionDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_functionDefinition;
    }

	Defun() {
	    return this.getToken(LangParser.Defun, 0);
	};

	LeftBrace() {
	    return this.getToken(LangParser.LeftBrace, 0);
	};

	RightBrace() {
	    return this.getToken(LangParser.RightBrace, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterFunctionDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitFunctionDefinition(this);
		}
	}


}




LangParser.ProgramContext = ProgramContext; 
LangParser.ExpressionContext = ExpressionContext; 
LangParser.IntegerContext = IntegerContext; 
LangParser.IdentifierContext = IdentifierContext; 
LangParser.FunctionCallContext = FunctionCallContext; 
LangParser.FunctionDefinitionContext = FunctionDefinitionContext; 
