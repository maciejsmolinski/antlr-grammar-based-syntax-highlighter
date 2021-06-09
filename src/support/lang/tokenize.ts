import LangLexer from "./LangLexer";
import { TokenType, TOKEN_TYPES } from "../../Token";
import { getTokenize } from "../antlr";
import { Lexer } from "antlr4";

type TokenId = number;

const TOKEN_MAPPING: Map<TokenId, TokenType> = new Map([
  [LangLexer.Whitespace, TOKEN_TYPES.NONE],
  [LangLexer.Newline, TOKEN_TYPES.NONE],
  [LangLexer.Defun, TOKEN_TYPES.KEYWORD],
  [LangLexer.Call, TOKEN_TYPES.KEYWORD],
  [LangLexer.Integer, TOKEN_TYPES.NUMBER],
  [LangLexer.Identifier, TOKEN_TYPES.IDENTIFIER],
  [LangLexer.LeftBrace, TOKEN_TYPES.BRACE],
  [LangLexer.RightBrace, TOKEN_TYPES.BRACE],
]);

export const tokenize = getTokenize(
  (LangLexer as unknown) as Lexer,
  TOKEN_MAPPING
);
