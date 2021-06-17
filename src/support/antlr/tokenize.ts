import antlr from "antlr4";
import { TOKEN_TYPES } from "../../constants";
import {
  TokenType as GenericTokenType,
  Token as GenericToken,
} from "../../types";

type Lexer = {
  new (input: antlr.InputStream): antlr.Lexer;
};

type AntlrTokenType = number;

type AntlrToken = { text: string; type: AntlrTokenType };

const getTokenize = (
  LexerClass: Lexer,
  tokenMapping: Map<AntlrTokenType, GenericTokenType>
) => {
  return (text: string): GenericToken[] => {
    const input = new antlr.InputStream(text);
    const lexer = new LexerClass(input);

    const tokens = lexer.getAllTokens().map(({ text, type }: AntlrToken) => ({
      text,
      type: tokenMapping.get(type) || TOKEN_TYPES.NONE,
    }));

    return tokens;
  };
};

export default getTokenize;
