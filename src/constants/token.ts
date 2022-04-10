import { TokenType } from '../types';

type TokenTypesMapping = {
  [k in TokenType as Uppercase<k>]: k;
};

export const TOKEN_TYPES: TokenTypesMapping = {
  NONE: 'none',
  RAW: 'raw',
  IDENTIFIER: 'identifier',
  NUMBER: 'number',
  KEYWORD: 'keyword',
  BRACE: 'brace',
};
