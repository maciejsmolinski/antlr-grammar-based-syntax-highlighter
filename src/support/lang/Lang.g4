grammar Lang;

program: expression*;

expression
    : integer
    | identifier
    | functionCall
    | functionDefinition
    ;

integer: Integer;
identifier: Identifier;
functionCall: Call identifier expression*;
functionDefinition: Defun identifier+ LeftBrace expression* RightBrace;

Whitespace: [ \t]+ -> channel(HIDDEN);
Newline: [\r\n]+ -> channel(HIDDEN);

Defun: D E F U N;
Call: C A L L;

Integer: [+-]? Numeric+;
Identifier: (LowerCase | UpperCase) (LowerCase | UpperCase | Numeric)*;
LeftBrace: '{';
RightBrace: '}';

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

fragment LowerCase: [a-z];
fragment UpperCase: [A-Z];

fragment Numeric: [0-9];
