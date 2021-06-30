grammar Lang;

program: expressionList;

expressionList
    : expression*
    ;

expression
    : literal
    | identifier
    | functionDeclaration
    | functionCall
    ;

literal
    : integer
    | string
    ;

integer: Integer;

string: String;

identifier: Identifier;

functionCall: Call identifier expression? (Comma expression)*;

functionDeclaration: Defun identifier identifier* blockStatement;

blockStatement: LeftBrace expressionList RightBrace;

Whitespace: [ \t]+ -> channel(HIDDEN);
Newline: [\r\n]+ -> channel(HIDDEN);

Defun: D E F U N;
Call: C A L L;

Integer: [+-]? Numeric+;
String
    : DQuote NDQuote* DQuote
    | SQuote NSQuote* SQuote
    ;

Identifier: (LowerCase | UpperCase) (LowerCase | UpperCase | Numeric)*;
LeftBrace: '{';
RightBrace: '}';
Comma: ',';

fragment SQuote: '\'';
fragment NSQuote: ~'\'';

fragment DQuote: '"';
fragment NDQuote: ~'"';

fragment LowerCase: [a-z];
fragment UpperCase: [A-Z];

fragment Numeric: [0-9];

fragment A: [aA];
fragment B: [bB];
fragment C: [cC];
fragment D: [dD];
fragment E: [eE];
fragment F: [fF];
fragment G: [gG];
fragment H: [hH];
fragment I: [iI];
fragment J: [jJ];
fragment K: [kK];
fragment L: [lL];
fragment M: [mM];
fragment N: [nN];
fragment O: [oO];
fragment P: [pP];
fragment Q: [qQ];
fragment R: [rR];
fragment S: [sS];
fragment T: [tT];
fragment U: [uU];
fragment V: [vV];
fragment W: [wW];
fragment X: [xX];
fragment Y: [yY];
fragment Z: [zZ];

Any: . ;
