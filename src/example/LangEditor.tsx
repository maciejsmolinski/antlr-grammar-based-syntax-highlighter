import { FC } from 'react';
import LangLexer from './antlr/LangLexer';
import CodeEditor from '../components/CodeEditor';
import { TOKEN_TYPES } from '../constants';
import { getTokenize as makeTokenizeFn } from '../support/antlr';

const TOKEN_MAPPING = new Map([
  [LangLexer.Whitespace, TOKEN_TYPES.NONE],
  [LangLexer.Newline, TOKEN_TYPES.NONE],
  [LangLexer.Defun, TOKEN_TYPES.KEYWORD],
  [LangLexer.Call, TOKEN_TYPES.KEYWORD],
  [LangLexer.Integer, TOKEN_TYPES.NUMBER],
  [LangLexer.Identifier, TOKEN_TYPES.IDENTIFIER],
  [LangLexer.LeftBrace, TOKEN_TYPES.BRACE],
  [LangLexer.RightBrace, TOKEN_TYPES.BRACE],
]);

type LangEditorProps = { code: string };

const LangEditor: FC<LangEditorProps> = ({ code }) => {
  return (
    <CodeEditor
      code={code}
      tokenize={makeTokenizeFn(LangLexer, TOKEN_MAPPING)}
    />
  );
};

export default LangEditor;