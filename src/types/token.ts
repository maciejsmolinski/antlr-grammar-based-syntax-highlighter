export type TokenType =
  | 'none'
  | 'raw'
  | 'identifier'
  | 'number'
  | 'keyword'
  | 'brace';

export type Token = { text: string; type: TokenType };
