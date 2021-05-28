grammar Lang;

program: expression_list*;

expression_list
    : function_call
    | function_definition
    | variable
    ;
        
function_call: CALL identifier;
function_definition: DEFUN identifier '{' expression_list* '}';
variable: '@' IDENTIFIER;
identifier: IDENTIFIER;

WS: [ \t]+ -> channel(HIDDEN);
NL: [\r\n]+ -> channel(HIDDEN);

DEFUN: D E F U N ;

CALL: C A L L ;

IDENTIFIER: (LOWERCASE | UPPERCASE)+;

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
