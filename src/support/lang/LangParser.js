// Generated from Lang.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from "antlr4";
import LangListener from "./LangListener.js";

const serializedATN = [
  "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
  "\u5964\u0003\n-\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
  "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
  "\u0003\u0002\u0007\u0002\u0010\n\u0002\f\u0002\u000e\u0002\u0013\u000b",
  "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0018\n\u0003",
  "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
  "\u0003\u0005\u0007\u0005!\n\u0005\f\u0005\u000e\u0005$\u000b\u0005\u0003",
  "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
  "\u0007\u0003\u0007\u0002\u0002\b\u0002\u0004\u0006\b\n\f\u0002\u0002",
  "\u0002*\u0002\u0011\u0003\u0002\u0002\u0002\u0004\u0017\u0003\u0002",
  "\u0002\u0002\u0006\u0019\u0003\u0002\u0002\u0002\b\u001c\u0003\u0002",
  "\u0002\u0002\n'\u0003\u0002\u0002\u0002\f*\u0003\u0002\u0002\u0002",
  "\u000e\u0010\u0005\u0004\u0003\u0002\u000f\u000e\u0003\u0002\u0002\u0002",
  "\u0010\u0013\u0003\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002",
  "\u0011\u0012\u0003\u0002\u0002\u0002\u0012\u0003\u0003\u0002\u0002\u0002",
  "\u0013\u0011\u0003\u0002\u0002\u0002\u0014\u0018\u0005\u0006\u0004\u0002",
  "\u0015\u0018\u0005\b\u0005\u0002\u0016\u0018\u0005\n\u0006\u0002\u0017",
  "\u0014\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0017",
  "\u0016\u0003\u0002\u0002\u0002\u0018\u0005\u0003\u0002\u0002\u0002\u0019",
  "\u001a\u0007\t\u0002\u0002\u001a\u001b\u0005\f\u0007\u0002\u001b\u0007",
  "\u0003\u0002\u0002\u0002\u001c\u001d\u0007\b\u0002\u0002\u001d\u001e",
  '\u0005\f\u0007\u0002\u001e"\u0007\u0003\u0002\u0002\u001f!\u0005\u0004',
  "\u0003\u0002 \u001f\u0003\u0002\u0002\u0002!$\u0003\u0002\u0002\u0002",
  '" \u0003\u0002\u0002\u0002"#\u0003\u0002\u0002\u0002#%\u0003\u0002',
  '\u0002\u0002$"\u0003\u0002\u0002\u0002%&\u0007\u0004\u0002\u0002&\t',
  "\u0003\u0002\u0002\u0002'(\u0007\u0005\u0002\u0002()\u0007\n\u0002",
  "\u0002)\u000b\u0003\u0002\u0002\u0002*+\u0007\n\u0002\u0002+\r\u0003",
  '\u0002\u0002\u0002\u0005\u0011\u0017"'
].join("");

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map(
  (ds, index) => new antlr4.dfa.DFA(ds, index)
);

const sharedContextCache = new antlr4.PredictionContextCache();

export default class LangParser extends antlr4.Parser {
  static grammarFileName = "Lang.g4";
  static literalNames = [null, "'{'", "'}'", "'@'"];
  static symbolicNames = [
    null,
    null,
    null,
    null,
    "WS",
    "NL",
    "DEFUN",
    "CALL",
    "IDENTIFIER"
  ];
  static ruleNames = [
    "program",
    "expression_list",
    "function_call",
    "function_definition",
    "variable",
    "identifier"
  ];

  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.ParserATNSimulator(
      this,
      atn,
      decisionsToDFA,
      sharedContextCache
    );
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
      while (
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << LangParser.T__2) |
            (1 << LangParser.DEFUN) |
            (1 << LangParser.CALL))) !==
          0
      ) {
        this.state = 12;
        this.expression_list();
        this.state = 17;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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

  expression_list() {
    let localctx = new Expression_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LangParser.RULE_expression_list);
    try {
      this.state = 21;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case LangParser.CALL:
          this.enterOuterAlt(localctx, 1);
          this.state = 18;
          this.function_call();
          break;
        case LangParser.DEFUN:
          this.enterOuterAlt(localctx, 2);
          this.state = 19;
          this.function_definition();
          break;
        case LangParser.T__2:
          this.enterOuterAlt(localctx, 3);
          this.state = 20;
          this.variable();
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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

  function_call() {
    let localctx = new Function_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LangParser.RULE_function_call);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 23;
      this.match(LangParser.CALL);
      this.state = 24;
      this.identifier();
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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

  function_definition() {
    let localctx = new Function_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LangParser.RULE_function_definition);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 26;
      this.match(LangParser.DEFUN);
      this.state = 27;
      this.identifier();
      this.state = 28;
      this.match(LangParser.T__0);
      this.state = 32;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
          ((1 << LangParser.T__2) |
            (1 << LangParser.DEFUN) |
            (1 << LangParser.CALL))) !==
          0
      ) {
        this.state = 29;
        this.expression_list();
        this.state = 34;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 35;
      this.match(LangParser.T__1);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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

  variable() {
    let localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LangParser.RULE_variable);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 37;
      this.match(LangParser.T__2);
      this.state = 38;
      this.match(LangParser.IDENTIFIER);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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
    this.enterRule(localctx, 10, LangParser.RULE_identifier);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 40;
      this.match(LangParser.IDENTIFIER);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
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
LangParser.T__0 = 1;
LangParser.T__1 = 2;
LangParser.T__2 = 3;
LangParser.WS = 4;
LangParser.NL = 5;
LangParser.DEFUN = 6;
LangParser.CALL = 7;
LangParser.IDENTIFIER = 8;

LangParser.RULE_program = 0;
LangParser.RULE_expression_list = 1;
LangParser.RULE_function_call = 2;
LangParser.RULE_function_definition = 3;
LangParser.RULE_variable = 4;
LangParser.RULE_identifier = 5;

class ProgramContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LangParser.RULE_program;
  }

  expression_list = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Expression_listContext);
    } else {
      return this.getTypedRuleContext(Expression_listContext, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof LangListener) {
      listener.enterProgram(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof LangListener) {
      listener.exitProgram(this);
    }
  }
}

class Expression_listContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LangParser.RULE_expression_list;
  }

  function_call() {
    return this.getTypedRuleContext(Function_callContext, 0);
  }

  function_definition() {
    return this.getTypedRuleContext(Function_definitionContext, 0);
  }

  variable() {
    return this.getTypedRuleContext(VariableContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof LangListener) {
      listener.enterExpression_list(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof LangListener) {
      listener.exitExpression_list(this);
    }
  }
}

class Function_callContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LangParser.RULE_function_call;
  }

  CALL() {
    return this.getToken(LangParser.CALL, 0);
  }

  identifier() {
    return this.getTypedRuleContext(IdentifierContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof LangListener) {
      listener.enterFunction_call(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof LangListener) {
      listener.exitFunction_call(this);
    }
  }
}

class Function_definitionContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LangParser.RULE_function_definition;
  }

  DEFUN() {
    return this.getToken(LangParser.DEFUN, 0);
  }

  identifier() {
    return this.getTypedRuleContext(IdentifierContext, 0);
  }

  expression_list = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Expression_listContext);
    } else {
      return this.getTypedRuleContext(Expression_listContext, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof LangListener) {
      listener.enterFunction_definition(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof LangListener) {
      listener.exitFunction_definition(this);
    }
  }
}

class VariableContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LangParser.RULE_variable;
  }

  IDENTIFIER() {
    return this.getToken(LangParser.IDENTIFIER, 0);
  }

  enterRule(listener) {
    if (listener instanceof LangListener) {
      listener.enterVariable(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof LangListener) {
      listener.exitVariable(this);
    }
  }
}

class IdentifierContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LangParser.RULE_identifier;
  }

  IDENTIFIER() {
    return this.getToken(LangParser.IDENTIFIER, 0);
  }

  enterRule(listener) {
    if (listener instanceof LangListener) {
      listener.enterIdentifier(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof LangListener) {
      listener.exitIdentifier(this);
    }
  }
}

LangParser.ProgramContext = ProgramContext;
LangParser.Expression_listContext = Expression_listContext;
LangParser.Function_callContext = Function_callContext;
LangParser.Function_definitionContext = Function_definitionContext;
LangParser.VariableContext = VariableContext;
LangParser.IdentifierContext = IdentifierContext;
