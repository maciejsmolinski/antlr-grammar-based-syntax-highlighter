import { ANTLRInputStream } from 'antlr4ts';
import { TOKEN_TYPES } from '../../constants';
import {
  TokenType as GenericTokenType,
  Token as GenericToken,
  Lexer,
} from '../../types';

type AntlrTokenType = number;
type AntlrToken = { text: string | undefined; type: AntlrTokenType };

const makeTokenizeFn = (
  LexerClass: Lexer,
  tokenMapping: Map<AntlrTokenType, GenericTokenType>
) => {
  return (text: string): GenericToken[] => {
    const input = new ANTLRInputStream(text);
    const lexer = new LexerClass(input);

    const tokens = lexer.getAllTokens().map(({ text, type }: AntlrToken) => ({
      text: text ?? '',
      type: tokenMapping.get(type) || TOKEN_TYPES.NONE,
    }));

    return tokens;
  };
};

export default makeTokenizeFn;
