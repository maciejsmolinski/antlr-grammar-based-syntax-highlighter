// Generated from src/support/lang/Lang.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\n\u00b1\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0006\u0004Q\n\u0004\r\u0004\u000e\u0004R\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0006\u0005X\n\u0005\r\u0005\u000e\u0005Y\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0006\bj\n\b\r\b\u000e\bk\u0003\t\u0003\t\u0005\tp\n\t\u0003",
    "\t\u0003\t\u0003\t\u0007\tu\n\t\f\t\u000e\tx\u000b\t\u0003\n\u0003\n",
    "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a",
    "\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d",
    "\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 ",
    "\u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003",
    "%\u0003%\u0002\u0002&\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\r\b\u000f\t\u0011\n\u0013\u0002\u0015\u0002\u0017\u0002\u0019",
    "\u0002\u001b\u0002\u001d\u0002\u001f\u0002!\u0002#\u0002%\u0002\'\u0002",
    ")\u0002+\u0002-\u0002/\u00021\u00023\u00025\u00027\u00029\u0002;\u0002",
    "=\u0002?\u0002A\u0002C\u0002E\u0002G\u0002I\u0002\u0003\u0002!\u0004",
    "\u0002\u000b\u000b\"\"\u0004\u0002\f\f\u000f\u000f\u0003\u00022;\u0004",
    "\u0002CCcc\u0004\u0002DDdd\u0004\u0002EEee\u0004\u0002FFff\u0004\u0002",
    "GGgg\u0004\u0002HHhh\u0004\u0002IIii\u0004\u0002JJjj\u0004\u0002KKk",
    "k\u0004\u0002LLll\u0004\u0002MMmm\u0004\u0002NNnn\u0004\u0002OOoo\u0004",
    "\u0002PPpp\u0004\u0002QQqq\u0004\u0002RRrr\u0004\u0002SSss\u0004\u0002",
    "TTtt\u0004\u0002UUuu\u0004\u0002VVvv\u0004\u0002WWww\u0004\u0002XXx",
    "x\u0004\u0002YYyy\u0004\u0002ZZzz\u0004\u0002[[{{\u0004\u0002\\\\||",
    "\u0003\u0002c|\u0003\u0002C\\\u0002\u009b\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0003K\u0003\u0002\u0002",
    "\u0002\u0005M\u0003\u0002\u0002\u0002\u0007P\u0003\u0002\u0002\u0002",
    "\tW\u0003\u0002\u0002\u0002\u000b]\u0003\u0002\u0002\u0002\rc\u0003",
    "\u0002\u0002\u0002\u000fi\u0003\u0002\u0002\u0002\u0011o\u0003\u0002",
    "\u0002\u0002\u0013y\u0003\u0002\u0002\u0002\u0015{\u0003\u0002\u0002",
    "\u0002\u0017}\u0003\u0002\u0002\u0002\u0019\u007f\u0003\u0002\u0002",
    "\u0002\u001b\u0081\u0003\u0002\u0002\u0002\u001d\u0083\u0003\u0002\u0002",
    "\u0002\u001f\u0085\u0003\u0002\u0002\u0002!\u0087\u0003\u0002\u0002",
    "\u0002#\u0089\u0003\u0002\u0002\u0002%\u008b\u0003\u0002\u0002\u0002",
    "\'\u008d\u0003\u0002\u0002\u0002)\u008f\u0003\u0002\u0002\u0002+\u0091",
    "\u0003\u0002\u0002\u0002-\u0093\u0003\u0002\u0002\u0002/\u0095\u0003",
    "\u0002\u0002\u00021\u0097\u0003\u0002\u0002\u00023\u0099\u0003\u0002",
    "\u0002\u00025\u009b\u0003\u0002\u0002\u00027\u009d\u0003\u0002\u0002",
    "\u00029\u009f\u0003\u0002\u0002\u0002;\u00a1\u0003\u0002\u0002\u0002",
    "=\u00a3\u0003\u0002\u0002\u0002?\u00a5\u0003\u0002\u0002\u0002A\u00a7",
    "\u0003\u0002\u0002\u0002C\u00a9\u0003\u0002\u0002\u0002E\u00ab\u0003",
    "\u0002\u0002\u0002G\u00ad\u0003\u0002\u0002\u0002I\u00af\u0003\u0002",
    "\u0002\u0002KL\u0007}\u0002\u0002L\u0004\u0003\u0002\u0002\u0002MN\u0007",
    "\u007f\u0002\u0002N\u0006\u0003\u0002\u0002\u0002OQ\t\u0002\u0002\u0002",
    "PO\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002",
    "\u0002RS\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002TU\b\u0004",
    "\u0002\u0002U\b\u0003\u0002\u0002\u0002VX\t\u0003\u0002\u0002WV\u0003",
    "\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002",
    "YZ\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[\\\b\u0005\u0002",
    "\u0002\\\n\u0003\u0002\u0002\u0002]^\u0005\u0019\r\u0002^_\u0005\u001b",
    "\u000e\u0002_`\u0005\u001d\u000f\u0002`a\u0005;\u001e\u0002ab\u0005",
    "-\u0017\u0002b\f\u0003\u0002\u0002\u0002cd\u0005\u0017\f\u0002de\u0005",
    "\u0013\n\u0002ef\u0005)\u0015\u0002fg\u0005)\u0015\u0002g\u000e\u0003",
    "\u0002\u0002\u0002hj\t\u0004\u0002\u0002ih\u0003\u0002\u0002\u0002j",
    "k\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002",
    "\u0002l\u0010\u0003\u0002\u0002\u0002mp\u0005G$\u0002np\u0005I%\u0002",
    "om\u0003\u0002\u0002\u0002on\u0003\u0002\u0002\u0002pv\u0003\u0002\u0002",
    "\u0002qu\u0005G$\u0002ru\u0005I%\u0002su\u0005\u000f\b\u0002tq\u0003",
    "\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002ts\u0003\u0002\u0002\u0002",
    "ux\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002",
    "\u0002w\u0012\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002yz\t",
    "\u0005\u0002\u0002z\u0014\u0003\u0002\u0002\u0002{|\t\u0006\u0002\u0002",
    "|\u0016\u0003\u0002\u0002\u0002}~\t\u0007\u0002\u0002~\u0018\u0003\u0002",
    "\u0002\u0002\u007f\u0080\t\b\u0002\u0002\u0080\u001a\u0003\u0002\u0002",
    "\u0002\u0081\u0082\t\t\u0002\u0002\u0082\u001c\u0003\u0002\u0002\u0002",
    "\u0083\u0084\t\n\u0002\u0002\u0084\u001e\u0003\u0002\u0002\u0002\u0085",
    "\u0086\t\u000b\u0002\u0002\u0086 \u0003\u0002\u0002\u0002\u0087\u0088",
    "\t\f\u0002\u0002\u0088\"\u0003\u0002\u0002\u0002\u0089\u008a\t\r\u0002",
    "\u0002\u008a$\u0003\u0002\u0002\u0002\u008b\u008c\t\u000e\u0002\u0002",
    "\u008c&\u0003\u0002\u0002\u0002\u008d\u008e\t\u000f\u0002\u0002\u008e",
    "(\u0003\u0002\u0002\u0002\u008f\u0090\t\u0010\u0002\u0002\u0090*\u0003",
    "\u0002\u0002\u0002\u0091\u0092\t\u0011\u0002\u0002\u0092,\u0003\u0002",
    "\u0002\u0002\u0093\u0094\t\u0012\u0002\u0002\u0094.\u0003\u0002\u0002",
    "\u0002\u0095\u0096\t\u0013\u0002\u0002\u00960\u0003\u0002\u0002\u0002",
    "\u0097\u0098\t\u0014\u0002\u0002\u00982\u0003\u0002\u0002\u0002\u0099",
    "\u009a\t\u0015\u0002\u0002\u009a4\u0003\u0002\u0002\u0002\u009b\u009c",
    "\t\u0016\u0002\u0002\u009c6\u0003\u0002\u0002\u0002\u009d\u009e\t\u0017",
    "\u0002\u0002\u009e8\u0003\u0002\u0002\u0002\u009f\u00a0\t\u0018\u0002",
    "\u0002\u00a0:\u0003\u0002\u0002\u0002\u00a1\u00a2\t\u0019\u0002\u0002",
    "\u00a2<\u0003\u0002\u0002\u0002\u00a3\u00a4\t\u001a\u0002\u0002\u00a4",
    ">\u0003\u0002\u0002\u0002\u00a5\u00a6\t\u001b\u0002\u0002\u00a6@\u0003",
    "\u0002\u0002\u0002\u00a7\u00a8\t\u001c\u0002\u0002\u00a8B\u0003\u0002",
    "\u0002\u0002\u00a9\u00aa\t\u001d\u0002\u0002\u00aaD\u0003\u0002\u0002",
    "\u0002\u00ab\u00ac\t\u001e\u0002\u0002\u00acF\u0003\u0002\u0002\u0002",
    "\u00ad\u00ae\t\u001f\u0002\u0002\u00aeH\u0003\u0002\u0002\u0002\u00af",
    "\u00b0\t \u0002\u0002\u00b0J\u0003\u0002\u0002\u0002\t\u0002RYkotv\u0003",
    "\u0002\u0003\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LangLexer extends antlr4.Lexer {

    static grammarFileName = "Lang.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'{'", "'}'" ];
	static symbolicNames = [ null, null, null, "WS", "NL", "DEFUN", "CALL", 
                          "NUMBER", "IDENTIFIER" ];
	static ruleNames = [ "T__0", "T__1", "WS", "NL", "DEFUN", "CALL", "NUMBER", 
                      "IDENTIFIER", "A", "B", "C", "D", "E", "F", "G", "H", 
                      "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
                      "S", "T", "U", "V", "W", "X", "Y", "Z", "LOWERCASE", 
                      "UPPERCASE" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

LangLexer.EOF = antlr4.Token.EOF;
LangLexer.T__0 = 1;
LangLexer.T__1 = 2;
LangLexer.WS = 3;
LangLexer.NL = 4;
LangLexer.DEFUN = 5;
LangLexer.CALL = 6;
LangLexer.NUMBER = 7;
LangLexer.IDENTIFIER = 8;



