export type TokenType =
  | 'none'
  | 'raw'
  | 'identifier'
  | 'number'
  | 'keyword'
  | 'brace';

export interface Token {
  text: string;
  line: number;
  type: TokenType;
}
