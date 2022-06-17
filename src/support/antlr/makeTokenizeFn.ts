import antlr from 'antlr4';
import { TOKEN_TYPES } from '../../constants';
import {
  TokenType as GenericTokenType,
  Token as GenericToken,
  Lexer,
} from '../../types';

type AntlrTokenType = number;
interface AntlrToken {
  text: string;
  line: number;
  type: AntlrTokenType;
}

const makeTokenizeFn = (
  LexerClass: Lexer,
  tokenMapping: Map<AntlrTokenType, GenericTokenType>
) => {
  return (text: string): GenericToken[] => {
    const input = new antlr.InputStream(text);
    const lexer = new LexerClass(input);

    const tokens = lexer
      .getAllTokens()
      .map(({ text, line, type }: AntlrToken) => ({
        text,
        line,
        type: tokenMapping.get(type) || TOKEN_TYPES.NONE,
      }));

    return tokens;
  };
};

export default makeTokenizeFn;
