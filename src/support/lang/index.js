import LangLexer from "./LangLexer";
import antlr from "antlr4";

export function tokenize(text) {
  const input = new antlr.InputStream(text);
  const lexer = new LangLexer(input);

  return lexer;
}

export const Lexer = LangLexer;
