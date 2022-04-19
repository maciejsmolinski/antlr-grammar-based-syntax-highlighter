import antlr4 from 'antlr4';

export type Lexer = {
  new (input: antlr4.InputStream): antlr4.Lexer;
};
