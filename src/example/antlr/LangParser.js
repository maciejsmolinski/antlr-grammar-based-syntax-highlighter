// Generated from src/example/antlr/Lang.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LangListener from './LangListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\rI\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0007\u0003\u001a\n\u0003\f\u0003\u000e\u0003",
    "\u001d\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004#\n\u0004\u0003\u0005\u0003\u0005\u0005\u0005\'\n\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0005\t2\n\t\u0003\t\u0003\t\u0007\t6\n\t\f\t\u000e\t9\u000b",
    "\t\u0003\n\u0003\n\u0003\n\u0007\n>\n\n\f\n\u000e\nA\u000b\n\u0003\n",
    "\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0002\u0002\f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002",
    "\u0002\u0002F\u0002\u0016\u0003\u0002\u0002\u0002\u0004\u001b\u0003",
    "\u0002\u0002\u0002\u0006\"\u0003\u0002\u0002\u0002\b&\u0003\u0002\u0002",
    "\u0002\n(\u0003\u0002\u0002\u0002\f*\u0003\u0002\u0002\u0002\u000e,",
    "\u0003\u0002\u0002\u0002\u0010.\u0003\u0002\u0002\u0002\u0012:\u0003",
    "\u0002\u0002\u0002\u0014D\u0003\u0002\u0002\u0002\u0016\u0017\u0005",
    "\u0004\u0003\u0002\u0017\u0003\u0003\u0002\u0002\u0002\u0018\u001a\u0005",
    "\u0006\u0004\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u001a\u001d\u0003",
    "\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001c\u0003",
    "\u0002\u0002\u0002\u001c\u0005\u0003\u0002\u0002\u0002\u001d\u001b\u0003",
    "\u0002\u0002\u0002\u001e#\u0005\b\u0005\u0002\u001f#\u0005\u000e\b\u0002",
    " #\u0005\u0012\n\u0002!#\u0005\u0010\t\u0002\"\u001e\u0003\u0002\u0002",
    "\u0002\"\u001f\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"",
    "!\u0003\u0002\u0002\u0002#\u0007\u0003\u0002\u0002\u0002$\'\u0005\n",
    "\u0006\u0002%\'\u0005\f\u0007\u0002&$\u0003\u0002\u0002\u0002&%\u0003",
    "\u0002\u0002\u0002\'\t\u0003\u0002\u0002\u0002()\u0007\u0007\u0002\u0002",
    ")\u000b\u0003\u0002\u0002\u0002*+\u0007\b\u0002\u0002+\r\u0003\u0002",
    "\u0002\u0002,-\u0007\t\u0002\u0002-\u000f\u0003\u0002\u0002\u0002./",
    "\u0007\u0006\u0002\u0002/1\u0005\u000e\b\u000202\u0005\u0006\u0004\u0002",
    "10\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u000227\u0003\u0002\u0002",
    "\u000234\u0007\f\u0002\u000246\u0005\u0006\u0004\u000253\u0003\u0002",
    "\u0002\u000269\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u000278\u0003",
    "\u0002\u0002\u00028\u0011\u0003\u0002\u0002\u000297\u0003\u0002\u0002",
    "\u0002:;\u0007\u0005\u0002\u0002;?\u0005\u000e\b\u0002<>\u0005\u000e",
    "\b\u0002=<\u0003\u0002\u0002\u0002>A\u0003\u0002\u0002\u0002?=\u0003",
    "\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@B\u0003\u0002\u0002\u0002",
    "A?\u0003\u0002\u0002\u0002BC\u0005\u0014\u000b\u0002C\u0013\u0003\u0002",
    "\u0002\u0002DE\u0007\n\u0002\u0002EF\u0005\u0004\u0003\u0002FG\u0007",
    "\u000b\u0002\u0002G\u0015\u0003\u0002\u0002\u0002\b\u001b\"&17?"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class LangParser extends antlr4.Parser {

    static grammarFileName = "Lang.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            "'{'", "'}'", "','" ];
    static symbolicNames = [ null, "Whitespace", "Newline", "Defun", "Call", 
                             "Integer", "String", "Identifier", "LeftBrace", 
                             "RightBrace", "Comma", "Any" ];
    static ruleNames = [ "program", "expressionList", "expression", "literal", 
                         "integer", "string", "identifier", "functionCall", 
                         "functionDeclaration", "blockStatement" ];

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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.expressionList();
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



	expressionList() {
	    let localctx = new ExpressionListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LangParser.RULE_expressionList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LangParser.Defun) | (1 << LangParser.Call) | (1 << LangParser.Integer) | (1 << LangParser.String) | (1 << LangParser.Identifier))) !== 0)) {
	            this.state = 22;
	            this.expression();
	            this.state = 27;
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
	    this.enterRule(localctx, 4, LangParser.RULE_expression);
	    try {
	        this.state = 32;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LangParser.Integer:
	        case LangParser.String:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 28;
	            this.literal();
	            break;
	        case LangParser.Identifier:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 29;
	            this.identifier();
	            break;
	        case LangParser.Defun:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 30;
	            this.functionDeclaration();
	            break;
	        case LangParser.Call:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 31;
	            this.functionCall();
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LangParser.RULE_literal);
	    try {
	        this.state = 36;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LangParser.Integer:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.integer();
	            break;
	        case LangParser.String:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.string();
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
	    this.enterRule(localctx, 8, LangParser.RULE_integer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
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



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LangParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(LangParser.String);
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
	    this.enterRule(localctx, 12, LangParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
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
	    this.enterRule(localctx, 14, LangParser.RULE_functionCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(LangParser.Call);
	        this.state = 45;
	        this.identifier();
	        this.state = 47;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 46;
	            this.expression();

	        }
	        this.state = 53;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 49;
	                this.match(LangParser.Comma);
	                this.state = 50;
	                this.expression(); 
	            }
	            this.state = 55;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LangParser.RULE_functionDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(LangParser.Defun);
	        this.state = 57;
	        this.identifier();
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LangParser.Identifier) {
	            this.state = 58;
	            this.identifier();
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 64;
	        this.blockStatement();
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



	blockStatement() {
	    let localctx = new BlockStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LangParser.RULE_blockStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(LangParser.LeftBrace);
	        this.state = 67;
	        this.expressionList();
	        this.state = 68;
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
LangParser.String = 6;
LangParser.Identifier = 7;
LangParser.LeftBrace = 8;
LangParser.RightBrace = 9;
LangParser.Comma = 10;
LangParser.Any = 11;

LangParser.RULE_program = 0;
LangParser.RULE_expressionList = 1;
LangParser.RULE_expression = 2;
LangParser.RULE_literal = 3;
LangParser.RULE_integer = 4;
LangParser.RULE_string = 5;
LangParser.RULE_identifier = 6;
LangParser.RULE_functionCall = 7;
LangParser.RULE_functionDeclaration = 8;
LangParser.RULE_blockStatement = 9;

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

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
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



class ExpressionListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_expressionList;
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
	        listener.enterExpressionList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitExpressionList(this);
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

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
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



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_literal;
    }

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitLiteral(this);
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



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_string;
    }

	String() {
	    return this.getToken(LangParser.String, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitString(this);
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

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangParser.Comma);
	    } else {
	        return this.getToken(LangParser.Comma, i);
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



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_functionDeclaration;
    }

	Defun() {
	    return this.getToken(LangParser.Defun, 0);
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

	blockStatement() {
	    return this.getTypedRuleContext(BlockStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}


}



class BlockStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangParser.RULE_blockStatement;
    }

	LeftBrace() {
	    return this.getToken(LangParser.LeftBrace, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	RightBrace() {
	    return this.getToken(LangParser.RightBrace, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.enterBlockStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangListener ) {
	        listener.exitBlockStatement(this);
		}
	}


}




LangParser.ProgramContext = ProgramContext; 
LangParser.ExpressionListContext = ExpressionListContext; 
LangParser.ExpressionContext = ExpressionContext; 
LangParser.LiteralContext = LiteralContext; 
LangParser.IntegerContext = IntegerContext; 
LangParser.StringContext = StringContext; 
LangParser.IdentifierContext = IdentifierContext; 
LangParser.FunctionCallContext = FunctionCallContext; 
LangParser.FunctionDeclarationContext = FunctionDeclarationContext; 
LangParser.BlockStatementContext = BlockStatementContext; 
