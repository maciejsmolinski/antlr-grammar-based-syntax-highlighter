import { TokenType, TOKEN_TYPES } from "../../Token";
import antlr, { Lexer } from "antlr4";

type AntlrTokenId = number;

const getTokenize = (
  LexerClass: typeof Lexer,
  tokenMapping: Map<AntlrTokenId, TokenType>
) => {
  return (text: string): { text: string; type: TokenType }[] => {
    const input = new antlr.InputStream(text);
    const lexer = new LexerClass(input);

    const tokens = lexer
      .getAllTokens()
      .map(({ text, type }: { text: string; type: AntlrTokenId }) => ({
        text,
        type: tokenMapping.get(type) || TOKEN_TYPES.NONE,
      }));

    return tokens;
  };
};

export default getTokenize;
