// Generated from src/example/antlr/Lang.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\n\u00b8\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0003\u0002\u0006\u0002O\n\u0002\r",
    "\u0002\u000e\u0002P\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003",
    "V\n\u0003\r\u0003\u000e\u0003W\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0005\u0006h",
    "\n\u0006\u0003\u0006\u0006\u0006k\n\u0006\r\u0006\u000e\u0006l\u0003",
    "\u0007\u0003\u0007\u0005\u0007q\n\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0007\u0007v\n\u0007\f\u0007\u000e\u0007y\u000b\u0007\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003",
    "\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003",
    "\"\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0002\u0002",
    "\'\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u0002\u0015\u0002\u0017\u0002\u0019\u0002\u001b\u0002",
    "\u001d\u0002\u001f\u0002!\u0002#\u0002%\u0002\'\u0002)\u0002+\u0002",
    "-\u0002/\u00021\u00023\u00025\u00027\u00029\u0002;\u0002=\u0002?\u0002",
    "A\u0002C\u0002E\u0002G\u0002I\u0002K\u0002\u0003\u0002\"\u0004\u0002",
    "\u000b\u000b\"\"\u0004\u0002\f\f\u000f\u000f\u0004\u0002--//\u0004\u0002",
    "CCcc\u0004\u0002DDdd\u0004\u0002EEee\u0004\u0002FFff\u0004\u0002GGg",
    "g\u0004\u0002HHhh\u0004\u0002IIii\u0004\u0002JJjj\u0004\u0002KKkk\u0004",
    "\u0002LLll\u0004\u0002MMmm\u0004\u0002NNnn\u0004\u0002OOoo\u0004\u0002",
    "PPpp\u0004\u0002QQqq\u0004\u0002RRrr\u0004\u0002SSss\u0004\u0002TTt",
    "t\u0004\u0002UUuu\u0004\u0002VVvv\u0004\u0002WWww\u0004\u0002XXxx\u0004",
    "\u0002YYyy\u0004\u0002ZZzz\u0004\u0002[[{{\u0004\u0002\\\\||\u0003\u0002",
    "c|\u0003\u0002C\\\u0003\u00022;\u0002\u00a2\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002",
    "\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0003N\u0003\u0002",
    "\u0002\u0002\u0005U\u0003\u0002\u0002\u0002\u0007[\u0003\u0002\u0002",
    "\u0002\ta\u0003\u0002\u0002\u0002\u000bg\u0003\u0002\u0002\u0002\rp",
    "\u0003\u0002\u0002\u0002\u000fz\u0003\u0002\u0002\u0002\u0011|\u0003",
    "\u0002\u0002\u0002\u0013~\u0003\u0002\u0002\u0002\u0015\u0080\u0003",
    "\u0002\u0002\u0002\u0017\u0082\u0003\u0002\u0002\u0002\u0019\u0084\u0003",
    "\u0002\u0002\u0002\u001b\u0086\u0003\u0002\u0002\u0002\u001d\u0088\u0003",
    "\u0002\u0002\u0002\u001f\u008a\u0003\u0002\u0002\u0002!\u008c\u0003",
    "\u0002\u0002\u0002#\u008e\u0003\u0002\u0002\u0002%\u0090\u0003\u0002",
    "\u0002\u0002\'\u0092\u0003\u0002\u0002\u0002)\u0094\u0003\u0002\u0002",
    "\u0002+\u0096\u0003\u0002\u0002\u0002-\u0098\u0003\u0002\u0002\u0002",
    "/\u009a\u0003\u0002\u0002\u00021\u009c\u0003\u0002\u0002\u00023\u009e",
    "\u0003\u0002\u0002\u00025\u00a0\u0003\u0002\u0002\u00027\u00a2\u0003",
    "\u0002\u0002\u00029\u00a4\u0003\u0002\u0002\u0002;\u00a6\u0003\u0002",
    "\u0002\u0002=\u00a8\u0003\u0002\u0002\u0002?\u00aa\u0003\u0002\u0002",
    "\u0002A\u00ac\u0003\u0002\u0002\u0002C\u00ae\u0003\u0002\u0002\u0002",
    "E\u00b0\u0003\u0002\u0002\u0002G\u00b2\u0003\u0002\u0002\u0002I\u00b4",
    "\u0003\u0002\u0002\u0002K\u00b6\u0003\u0002\u0002\u0002MO\t\u0002\u0002",
    "\u0002NM\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002PN\u0003\u0002",
    "\u0002\u0002PQ\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RS\b",
    "\u0002\u0002\u0002S\u0004\u0003\u0002\u0002\u0002TV\t\u0003\u0002\u0002",
    "UT\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002",
    "\u0002WX\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002YZ\b\u0003",
    "\u0002\u0002Z\u0006\u0003\u0002\u0002\u0002[\\\u0005\u0019\r\u0002\\",
    "]\u0005\u001b\u000e\u0002]^\u0005\u001d\u000f\u0002^_\u0005;\u001e\u0002",
    "_`\u0005-\u0017\u0002`\b\u0003\u0002\u0002\u0002ab\u0005\u0017\f\u0002",
    "bc\u0005\u0013\n\u0002cd\u0005)\u0015\u0002de\u0005)\u0015\u0002e\n",
    "\u0003\u0002\u0002\u0002fh\t\u0004\u0002\u0002gf\u0003\u0002\u0002\u0002",
    "gh\u0003\u0002\u0002\u0002hj\u0003\u0002\u0002\u0002ik\u0005K&\u0002",
    "ji\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lj\u0003\u0002\u0002",
    "\u0002lm\u0003\u0002\u0002\u0002m\f\u0003\u0002\u0002\u0002nq\u0005",
    "G$\u0002oq\u0005I%\u0002pn\u0003\u0002\u0002\u0002po\u0003\u0002\u0002",
    "\u0002qw\u0003\u0002\u0002\u0002rv\u0005G$\u0002sv\u0005I%\u0002tv\u0005",
    "K&\u0002ur\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002ut\u0003",
    "\u0002\u0002\u0002vy\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002",
    "wx\u0003\u0002\u0002\u0002x\u000e\u0003\u0002\u0002\u0002yw\u0003\u0002",
    "\u0002\u0002z{\u0007}\u0002\u0002{\u0010\u0003\u0002\u0002\u0002|}\u0007",
    "\u007f\u0002\u0002}\u0012\u0003\u0002\u0002\u0002~\u007f\t\u0005\u0002",
    "\u0002\u007f\u0014\u0003\u0002\u0002\u0002\u0080\u0081\t\u0006\u0002",
    "\u0002\u0081\u0016\u0003\u0002\u0002\u0002\u0082\u0083\t\u0007\u0002",
    "\u0002\u0083\u0018\u0003\u0002\u0002\u0002\u0084\u0085\t\b\u0002\u0002",
    "\u0085\u001a\u0003\u0002\u0002\u0002\u0086\u0087\t\t\u0002\u0002\u0087",
    "\u001c\u0003\u0002\u0002\u0002\u0088\u0089\t\n\u0002\u0002\u0089\u001e",
    "\u0003\u0002\u0002\u0002\u008a\u008b\t\u000b\u0002\u0002\u008b \u0003",
    "\u0002\u0002\u0002\u008c\u008d\t\f\u0002\u0002\u008d\"\u0003\u0002\u0002",
    "\u0002\u008e\u008f\t\r\u0002\u0002\u008f$\u0003\u0002\u0002\u0002\u0090",
    "\u0091\t\u000e\u0002\u0002\u0091&\u0003\u0002\u0002\u0002\u0092\u0093",
    "\t\u000f\u0002\u0002\u0093(\u0003\u0002\u0002\u0002\u0094\u0095\t\u0010",
    "\u0002\u0002\u0095*\u0003\u0002\u0002\u0002\u0096\u0097\t\u0011\u0002",
    "\u0002\u0097,\u0003\u0002\u0002\u0002\u0098\u0099\t\u0012\u0002\u0002",
    "\u0099.\u0003\u0002\u0002\u0002\u009a\u009b\t\u0013\u0002\u0002\u009b",
    "0\u0003\u0002\u0002\u0002\u009c\u009d\t\u0014\u0002\u0002\u009d2\u0003",
    "\u0002\u0002\u0002\u009e\u009f\t\u0015\u0002\u0002\u009f4\u0003\u0002",
    "\u0002\u0002\u00a0\u00a1\t\u0016\u0002\u0002\u00a16\u0003\u0002\u0002",
    "\u0002\u00a2\u00a3\t\u0017\u0002\u0002\u00a38\u0003\u0002\u0002\u0002",
    "\u00a4\u00a5\t\u0018\u0002\u0002\u00a5:\u0003\u0002\u0002\u0002\u00a6",
    "\u00a7\t\u0019\u0002\u0002\u00a7<\u0003\u0002\u0002\u0002\u00a8\u00a9",
    "\t\u001a\u0002\u0002\u00a9>\u0003\u0002\u0002\u0002\u00aa\u00ab\t\u001b",
    "\u0002\u0002\u00ab@\u0003\u0002\u0002\u0002\u00ac\u00ad\t\u001c\u0002",
    "\u0002\u00adB\u0003\u0002\u0002\u0002\u00ae\u00af\t\u001d\u0002\u0002",
    "\u00afD\u0003\u0002\u0002\u0002\u00b0\u00b1\t\u001e\u0002\u0002\u00b1",
    "F\u0003\u0002\u0002\u0002\u00b2\u00b3\t\u001f\u0002\u0002\u00b3H\u0003",
    "\u0002\u0002\u0002\u00b4\u00b5\t \u0002\u0002\u00b5J\u0003\u0002\u0002",
    "\u0002\u00b6\u00b7\t!\u0002\u0002\u00b7L\u0003\u0002\u0002\u0002\n\u0002",
    "PWglpuw\u0003\u0002\u0003\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LangLexer extends antlr4.Lexer {

    static grammarFileName = "Lang.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, null, null, null, null, "'{'", 
                         "'}'" ];
	static symbolicNames = [ null, "Whitespace", "Newline", "Defun", "Call", 
                          "Integer", "Identifier", "LeftBrace", "RightBrace" ];
	static ruleNames = [ "Whitespace", "Newline", "Defun", "Call", "Integer", 
                      "Identifier", "LeftBrace", "RightBrace", "A", "B", 
                      "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
                      "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", 
                      "W", "X", "Y", "Z", "LowerCase", "UpperCase", "Numeric" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

LangLexer.EOF = antlr4.Token.EOF;
LangLexer.Whitespace = 1;
LangLexer.Newline = 2;
LangLexer.Defun = 3;
LangLexer.Call = 4;
LangLexer.Integer = 5;
LangLexer.Identifier = 6;
LangLexer.LeftBrace = 7;
LangLexer.RightBrace = 8;



