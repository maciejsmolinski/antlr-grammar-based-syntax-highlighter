import './styles.css';
import { useState, useRef, useEffect, FC, useMemo } from 'react';
import TokenComponent from '../Token';
import { Token as GenericToken, Tokenizer } from '../../types';
import { TOKEN_TYPES } from '../../constants';
import useEditorReducer from './useEditorReducer';

function renderToken({ text, line, type }: GenericToken, index?: number) {
  return (
    <TokenComponent text={text} line={line} type={type} key={text + index} />
  );
}

function renderChar(char: string, index: number, active: boolean) {
  return (
    <span key={index} className={active ? 'active' : undefined}>
      {char}
    </span>
  );
}

type ComponentProps = { code: string; tokenize: Tokenizer };

// type ViewState = {
//   x: number;
//   y: number;
//   scrollX: number;
//   scrollY: number;
// };

// const useViewState = function (initialState?: Partial<ViewState>) {
//   const defaultState = { x: 0, y: 0 };

//   return useState<ViewState>({
//     ...defaultState,
//     ...initialState,
//   });
// };

const CodeEditor: FC<ComponentProps> = ({ code, tokenize }) => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });
  const output = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);

  const [editorState, actions] = useEditorReducer({
    value: code || '',
    line: 0,
    pos: 0,
  });

  const { value } = editorState;

  useEffect(() => {
    if (!output.current) {
      return;
    }

    output.current.scrollLeft = scroll.x;
    output.current.scrollTop = scroll.y;

    if (!cursor.current) {
      return;
    }

    cursor.current.scrollLeft = scroll.x;
    cursor.current.scrollTop = scroll.y;
  }, [scroll.x, scroll.y]);

  const tokens = useMemo(() => tokenize(value), [tokenize, value]);

  return (
    <div className="CodeEditor">
      <div className="CodeEditor__container">
        <textarea
          className="CodeEditor__input"
          spellCheck={false}
          autoFocus={true}
          value={value}
          onChange={({ target }) => {
            const element = target as HTMLTextAreaElement;

            actions.setValue(element.value || '');
          }}
          onSelect={({ target }) => {
            const element = target as HTMLTextAreaElement;

            actions.setCursorPosition(element.selectionEnd);
          }}
          onScroll={({ target }) => {
            const element = target as HTMLTextAreaElement;

            setScroll({
              x: element.scrollLeft,
              y: element.scrollTop,
            });
          }}
        />
        <div ref={output} className="CodeEditor__output">
          {tokens.map(renderToken)}
          {tokens.length && tokens[tokens.length - 1]!.text.endsWith('\n')
            ? renderToken({
                text: '\n',
                type: TOKEN_TYPES.NONE,
                line: tokens[tokens.length - 1]!.line + 1,
              })
            : null}
        </div>
        <div ref={cursor} className="CodeEditor__cursor">
          {value
            .split('')
            .map((char, index) =>
              renderChar(char, index, editorState.pos === index)
            )}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
