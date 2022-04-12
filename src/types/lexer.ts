import { InputStream as AntlrInputStream, Lexer as AntlrLexer } from 'antlr4';

export type Lexer = {
  new (input: AntlrInputStream): AntlrLexer;
};
