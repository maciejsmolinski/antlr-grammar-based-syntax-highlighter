// Generated from Lang.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from "antlr4";

const serializedATN = [
  "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
  "\u5964\u0002\u000b\u00b5\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
  "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
  "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
  "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
  "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
  "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
  "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
  "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
  '\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004"\t"\u0004#',
  "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0003\u0002\u0003\u0002\u0003\u0003",
  "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0006\u0005U\n\u0005",
  "\r\u0005\u000e\u0005V\u0003\u0005\u0003\u0005\u0003\u0006\u0006\u0006",
  "\\\n\u0006\r\u0006\u000e\u0006]\u0003\u0006\u0003\u0006\u0003\u0007",
  "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b",
  "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0006\tn\n\t\r\t\u000e\to\u0003",
  "\n\u0003\n\u0005\nt\n\n\u0003\n\u0003\n\u0003\n\u0007\ny\n\n\f\n\u000e",
  "\n|\u000b\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r",
  "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
  "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
  "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
  "\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019",
  "\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c",
  "\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f",
  '\u0003 \u0003 \u0003!\u0003!\u0003"\u0003"\u0003#\u0003#\u0003$\u0003',
  "$\u0003%\u0003%\u0003&\u0003&\u0002\u0002'\u0003\u0003\u0005\u0004",
  "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
  "\u0002\u0017\u0002\u0019\u0002\u001b\u0002\u001d\u0002\u001f\u0002!",
  "\u0002#\u0002%\u0002'\u0002)\u0002+\u0002-\u0002/\u00021\u00023\u0002",
  "5\u00027\u00029\u0002;\u0002=\u0002?\u0002A\u0002C\u0002E\u0002G\u0002",
  'I\u0002K\u0002\u0003\u0002!\u0004\u0002\u000b\u000b""\u0004\u0002',
  "\f\f\u000f\u000f\u0003\u00022;\u0004\u0002CCcc\u0004\u0002DDdd\u0004",
  "\u0002EEee\u0004\u0002FFff\u0004\u0002GGgg\u0004\u0002HHhh\u0004\u0002",
  "IIii\u0004\u0002JJjj\u0004\u0002KKkk\u0004\u0002LLll\u0004\u0002MMm",
  "m\u0004\u0002NNnn\u0004\u0002OOoo\u0004\u0002PPpp\u0004\u0002QQqq\u0004",
  "\u0002RRrr\u0004\u0002SSss\u0004\u0002TTtt\u0004\u0002UUuu\u0004\u0002",
  "VVvv\u0004\u0002WWww\u0004\u0002XXxx\u0004\u0002YYyy\u0004\u0002ZZz",
  "z\u0004\u0002[[{{\u0004\u0002\\\\||\u0003\u0002c|\u0003\u0002C\\\u0002",
  "\u009f\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
  "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
  "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
  "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
  "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0003M\u0003\u0002\u0002",
  "\u0002\u0005O\u0003\u0002\u0002\u0002\u0007Q\u0003\u0002\u0002\u0002",
  "\tT\u0003\u0002\u0002\u0002\u000b[\u0003\u0002\u0002\u0002\ra\u0003",
  "\u0002\u0002\u0002\u000fg\u0003\u0002\u0002\u0002\u0011m\u0003\u0002",
  "\u0002\u0002\u0013s\u0003\u0002\u0002\u0002\u0015}\u0003\u0002\u0002",
  "\u0002\u0017\u007f\u0003\u0002\u0002\u0002\u0019\u0081\u0003\u0002\u0002",
  "\u0002\u001b\u0083\u0003\u0002\u0002\u0002\u001d\u0085\u0003\u0002\u0002",
  "\u0002\u001f\u0087\u0003\u0002\u0002\u0002!\u0089\u0003\u0002\u0002",
  "\u0002#\u008b\u0003\u0002\u0002\u0002%\u008d\u0003\u0002\u0002\u0002",
  "'\u008f\u0003\u0002\u0002\u0002)\u0091\u0003\u0002\u0002\u0002+\u0093",
  "\u0003\u0002\u0002\u0002-\u0095\u0003\u0002\u0002\u0002/\u0097\u0003",
  "\u0002\u0002\u00021\u0099\u0003\u0002\u0002\u00023\u009b\u0003\u0002",
  "\u0002\u00025\u009d\u0003\u0002\u0002\u00027\u009f\u0003\u0002\u0002",
  "\u00029\u00a1\u0003\u0002\u0002\u0002;\u00a3\u0003\u0002\u0002\u0002",
  "=\u00a5\u0003\u0002\u0002\u0002?\u00a7\u0003\u0002\u0002\u0002A\u00a9",
  "\u0003\u0002\u0002\u0002C\u00ab\u0003\u0002\u0002\u0002E\u00ad\u0003",
  "\u0002\u0002\u0002G\u00af\u0003\u0002\u0002\u0002I\u00b1\u0003\u0002",
  "\u0002\u0002K\u00b3\u0003\u0002\u0002\u0002MN\u0007}\u0002\u0002N\u0004",
  "\u0003\u0002\u0002\u0002OP\u0007\u007f\u0002\u0002P\u0006\u0003\u0002",
  "\u0002\u0002QR\u0007B\u0002\u0002R\b\u0003\u0002\u0002\u0002SU\t\u0002",
  "\u0002\u0002TS\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VT\u0003",
  "\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002",
  "XY\b\u0005\u0002\u0002Y\n\u0003\u0002\u0002\u0002Z\\\t\u0003\u0002\u0002",
  "[Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002][\u0003\u0002",
  "\u0002\u0002]^\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_`\b",
  "\u0006\u0002\u0002`\f\u0003\u0002\u0002\u0002ab\u0005\u001b\u000e\u0002",
  "bc\u0005\u001d\u000f\u0002cd\u0005\u001f\u0010\u0002de\u0005=\u001f",
  "\u0002ef\u0005/\u0018\u0002f\u000e\u0003\u0002\u0002\u0002gh\u0005\u0019",
  "\r\u0002hi\u0005\u0015\u000b\u0002ij\u0005+\u0016\u0002jk\u0005+\u0016",
  "\u0002k\u0010\u0003\u0002\u0002\u0002ln\t\u0004\u0002\u0002ml\u0003",
  "\u0002\u0002\u0002no\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002",
  "op\u0003\u0002\u0002\u0002p\u0012\u0003\u0002\u0002\u0002qt\u0005I%",
  "\u0002rt\u0005K&\u0002sq\u0003\u0002\u0002\u0002sr\u0003\u0002\u0002",
  "\u0002tz\u0003\u0002\u0002\u0002uy\u0005I%\u0002vy\u0005K&\u0002wy\u0005",
  "\u0011\t\u0002xu\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002x",
  "w\u0003\u0002\u0002\u0002y|\u0003\u0002\u0002\u0002zx\u0003\u0002\u0002",
  "\u0002z{\u0003\u0002\u0002\u0002{\u0014\u0003\u0002\u0002\u0002|z\u0003",
  "\u0002\u0002\u0002}~\t\u0005\u0002\u0002~\u0016\u0003\u0002\u0002\u0002",
  "\u007f\u0080\t\u0006\u0002\u0002\u0080\u0018\u0003\u0002\u0002\u0002",
  "\u0081\u0082\t\u0007\u0002\u0002\u0082\u001a\u0003\u0002\u0002\u0002",
  "\u0083\u0084\t\b\u0002\u0002\u0084\u001c\u0003\u0002\u0002\u0002\u0085",
  "\u0086\t\t\u0002\u0002\u0086\u001e\u0003\u0002\u0002\u0002\u0087\u0088",
  "\t\n\u0002\u0002\u0088 \u0003\u0002\u0002\u0002\u0089\u008a\t\u000b",
  '\u0002\u0002\u008a"\u0003\u0002\u0002\u0002\u008b\u008c\t\f\u0002\u0002',
  "\u008c$\u0003\u0002\u0002\u0002\u008d\u008e\t\r\u0002\u0002\u008e&\u0003",
  "\u0002\u0002\u0002\u008f\u0090\t\u000e\u0002\u0002\u0090(\u0003\u0002",
  "\u0002\u0002\u0091\u0092\t\u000f\u0002\u0002\u0092*\u0003\u0002\u0002",
  "\u0002\u0093\u0094\t\u0010\u0002\u0002\u0094,\u0003\u0002\u0002\u0002",
  "\u0095\u0096\t\u0011\u0002\u0002\u0096.\u0003\u0002\u0002\u0002\u0097",
  "\u0098\t\u0012\u0002\u0002\u00980\u0003\u0002\u0002\u0002\u0099\u009a",
  "\t\u0013\u0002\u0002\u009a2\u0003\u0002\u0002\u0002\u009b\u009c\t\u0014",
  "\u0002\u0002\u009c4\u0003\u0002\u0002\u0002\u009d\u009e\t\u0015\u0002",
  "\u0002\u009e6\u0003\u0002\u0002\u0002\u009f\u00a0\t\u0016\u0002\u0002",
  "\u00a08\u0003\u0002\u0002\u0002\u00a1\u00a2\t\u0017\u0002\u0002\u00a2",
  ":\u0003\u0002\u0002\u0002\u00a3\u00a4\t\u0018\u0002\u0002\u00a4<\u0003",
  "\u0002\u0002\u0002\u00a5\u00a6\t\u0019\u0002\u0002\u00a6>\u0003\u0002",
  "\u0002\u0002\u00a7\u00a8\t\u001a\u0002\u0002\u00a8@\u0003\u0002\u0002",
  "\u0002\u00a9\u00aa\t\u001b\u0002\u0002\u00aaB\u0003\u0002\u0002\u0002",
  "\u00ab\u00ac\t\u001c\u0002\u0002\u00acD\u0003\u0002\u0002\u0002\u00ad",
  "\u00ae\t\u001d\u0002\u0002\u00aeF\u0003\u0002\u0002\u0002\u00af\u00b0",
  "\t\u001e\u0002\u0002\u00b0H\u0003\u0002\u0002\u0002\u00b1\u00b2\t\u001f",
  "\u0002\u0002\u00b2J\u0003\u0002\u0002\u0002\u00b3\u00b4\t \u0002\u0002",
  "\u00b4L\u0003\u0002\u0002\u0002\t\u0002V]osxz\u0003\u0002\u0003\u0002",
].join("");

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map(
  (ds, index) => new antlr4.dfa.DFA(ds, index)
);

export default class LangLexer extends antlr4.Lexer {
  static grammarFileName = "Lang.g4";
  static channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];
  static modeNames = ["DEFAULT_MODE"];
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
    "NUMBER",
    "IDENTIFIER",
  ];
  static ruleNames = [
    "T__0",
    "T__1",
    "T__2",
    "WS",
    "NL",
    "DEFUN",
    "CALL",
    "NUMBER",
    "IDENTIFIER",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "LOWERCASE",
    "UPPERCASE",
  ];

  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.LexerATNSimulator(
      this,
      atn,
      decisionsToDFA,
      new antlr4.PredictionContextCache()
    );
  }

  get atn() {
    return atn;
  }
}

LangLexer.EOF = antlr4.Token.EOF;
LangLexer.T__0 = 1;
LangLexer.T__1 = 2;
LangLexer.T__2 = 3;
LangLexer.WS = 4;
LangLexer.NL = 5;
LangLexer.DEFUN = 6;
LangLexer.CALL = 7;
LangLexer.NUMBER = 8;
LangLexer.IDENTIFIER = 9;