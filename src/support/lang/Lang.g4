grammar Lang;

program: expression*;

expression
    : function_call
    | function_definition
    | variable
    | number
    ;

function_call: CALL identifier (variable | number)*;
function_definition: DEFUN identifier identifier* '{' expression* '}';
variable: '@' IDENTIFIER;
identifier: IDENTIFIER;
number: NUMBER;

WS: [ \t]+ -> channel(HIDDEN);
NL: [\r\n]+ -> channel(HIDDEN);

DEFUN: D E F U N ;

CALL: C A L L ;

NUMBER: [0-9]+;

IDENTIFIER: (LOWERCASE | UPPERCASE) (LOWERCASE | UPPERCASE | NUMBER)*;

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

fragment LOWERCASE: [a-z];
fragment UPPERCASE: [A-Z];
