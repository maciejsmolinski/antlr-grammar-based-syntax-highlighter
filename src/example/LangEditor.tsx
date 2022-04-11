import { FC } from 'react';
import { CodeEditor } from '../components';
import { TOKEN_TYPES } from '../constants';
import { makeTokenizeFn } from '../support';

import { HTMLLexer } from 'html-antlr4';

const TOKEN_MAPPING = new Map([
  [HTMLLexer.TAG_NAME, TOKEN_TYPES.IDENTIFIER],
  [HTMLLexer.TAG_CLOSE, TOKEN_TYPES.BRACE],
  [HTMLLexer.TAG_OPEN, TOKEN_TYPES.BRACE],
  [HTMLLexer.TAG_SLASH_CLOSE, TOKEN_TYPES.BRACE],
  [HTMLLexer.TAG_SLASH, TOKEN_TYPES.BRACE],
  [HTMLLexer.HTML_TEXT, TOKEN_TYPES.RAW],
]);

type LangEditorProps = { code: string };

const LangEditor: FC<LangEditorProps> = ({ code }) => {
  return (
    <CodeEditor
      code={code}
      tokenize={makeTokenizeFn(HTMLLexer, TOKEN_MAPPING)}
    />
  );
};

export default LangEditor;
