import { InputStream as AntlrInputStream, Lexer as AntlrLexer } from 'antlr4';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer as Antlr4tsLexer } from 'antlr4ts/Lexer';

// @TODO: Wider type, not specific to any lib (i.e. { getAllTokens: (...) => {}})
export type Lexer = {
  // new (input: AntlrInputStream | CharStream): AntlrLexer | Antlr4tsLexer;
  new (input: CharStream): Antlr4tsLexer;
};
