import LangLexer from "./LangLexer";
import { TokenType, TOKEN_TYPES } from "../../Token";
import { Lexer } from "antlr4";
import { getTokenize } from "../antlr";

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

// export function tokenize(
//   text: string
// ): { getAllTokens: () => { text: string; type: TokenId }[] } {
//   const input = new antlr.InputStream(text);
//   const lexer = new LangLexer(input);

//   return lexer;
// }

// export function token({
//   text,
//   type,
// }: {
//   text: string;
//   type: TokenId;
// }): { text: string; type: TokenType } {
//   return { text, type: TOKEN_MAPPING.get(type) || TOKEN_TYPES.NONE };
// }

export const tokenize = getTokenize(LangLexer, TOKEN_MAPPING);
