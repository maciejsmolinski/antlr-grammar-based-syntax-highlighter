import { FC } from 'react';
import { CodeEditor } from '../components';
import { TOKEN_TYPES } from '../constants';
import { makeTokenizeFn } from '../support';
import { YAMLLexer } from 'antlr4-parsers/yaml/YAMLLexer';
import * as YAMLTokenConstants from 'antlr4-parsers/yaml/token-constants';
import { Token } from '../types';

const TOKEN_MAPPING = new Map([
  [YAMLTokenConstants.EOF, TOKEN_TYPES.NONE],
  [YAMLTokenConstants.COMMENT, TOKEN_TYPES.RAW],
  [YAMLTokenConstants.SCALAR, TOKEN_TYPES.IDENTIFIER],
  [YAMLTokenConstants.ELEMENT, TOKEN_TYPES.IDENTIFIER],
  [YAMLTokenConstants.MAP_START, TOKEN_TYPES.NONE],
  [YAMLTokenConstants.LIST_START, TOKEN_TYPES.NONE],
  [YAMLTokenConstants.MAP_END, TOKEN_TYPES.NONE],
  [YAMLTokenConstants.LIST_END, TOKEN_TYPES.NONE],
  [YAMLTokenConstants.COLON, TOKEN_TYPES.RAW],
  [YAMLTokenConstants.START_DOCUMENT, TOKEN_TYPES.NONE],
  [YAMLTokenConstants.END_DOCUMENT, TOKEN_TYPES.NONE],
  [YAMLTokenConstants.EMPTY, TOKEN_TYPES.NONE],
]);

type LangEditorProps = { code: string };

const withSubstitution: typeof makeTokenizeFn = (...args) => {
  return function (...finalArgs) {
    let indentation = 0;
    const indent = '  ';

    const tokens = makeTokenizeFn(...args)(...finalArgs).reduce(
      (all, i, idx, array) => {
        if (
          [
            'MAP_START',
            'MAP_END',
            'LIST_START',
            'LIST_END',
            'START_DOCUMENT',
            'END_DOCUMENT',
          ].includes(i.text)
        ) {
          all.push({
            ...i,
            text: i.text.includes('START')
              ? indent.repeat(indentation++)
              : indent.repeat(indentation--),
          });
          return all;
        }

        if (['COLON'].includes(i.text)) {
          all.push({
            ...i,
            text:
              array[idx + 1] && i?.line < array[idx + 1]!.line
                ? ':\n' + indent.repeat(indentation)
                : ': ',
          });
          return all;
        }

        all.push(i);
        return all;
      },
      [] as Token[]
    );

    console.log(tokens);

    return tokens;
  };
};

const LangEditor: FC<LangEditorProps> = ({ code }) => {
  return (
    <CodeEditor
      code={code}
      tokenize={withSubstitution(YAMLLexer, TOKEN_MAPPING)}
    />
  );
};

export default LangEditor;
