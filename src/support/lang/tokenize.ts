import LangLexer from "./LangLexer";
import { TokenType as GenericTokenType } from "../../types";
import { TOKEN_TYPES } from "../../constants";
import { getTokenize } from "../antlr";

type AntlrTokenType = number;

const TOKEN_MAPPING: Map<AntlrTokenType, GenericTokenType> = new Map([
  [LangLexer.Whitespace, TOKEN_TYPES.NONE],
  [LangLexer.Newline, TOKEN_TYPES.NONE],
  [LangLexer.Defun, TOKEN_TYPES.KEYWORD],
  [LangLexer.Call, TOKEN_TYPES.KEYWORD],
  [LangLexer.Integer, TOKEN_TYPES.NUMBER],
  [LangLexer.Identifier, TOKEN_TYPES.IDENTIFIER],
  [LangLexer.LeftBrace, TOKEN_TYPES.BRACE],
  [LangLexer.RightBrace, TOKEN_TYPES.BRACE],
]);

export const tokenize = getTokenize(LangLexer, TOKEN_MAPPING);
