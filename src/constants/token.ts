import { TokenType } from '../types';

export const TOKEN_TYPES: Record<Uppercase<TokenType>, TokenType> = {
  NONE: 'none',
  RAW: 'raw',
  IDENTIFIER: 'identifier',
  NUMBER: 'number',
  KEYWORD: 'keyword',
  BRACE: 'brace',
};
