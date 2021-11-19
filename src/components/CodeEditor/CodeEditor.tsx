import './styles.css';
import { useState, useRef, useEffect, FC } from 'react';
import TokenComponent from '../Token';
import { Token as GenericToken, Tokenizer } from '../../types';
import { TOKEN_TYPES } from '../../constants';

function renderToken({ text, type }: GenericToken, index?: number) {
  return <TokenComponent text={text} type={type} key={text + index} />;
}

function renderChar(char: string, index: number, active: boolean) {
  return (
    <span key={index} className={active ? 'active' : undefined}>
      {char}
    </span>
  );
}

type ComponentProps = { code: string; tokenize: Tokenizer };

type EditorState = {
  line: number;
  pos: number;
  value: string;
};

// type ViewState = {
//   x: number;
//   y: number;
//   scrollX: number;
//   scrollY: number;
// };

// @TODO: Expose editing utils, e.g. insertAt, replaceAt, etc.
const useEditorState = function (initialState?: Partial<EditorState>) {
  const defaultState = { line: 0, pos: 0, value: '' };

  return useState<EditorState>({
    ...defaultState,
    ...initialState,
  });
};

// const useViewState = function (initialState?: Partial<ViewState>) {
//   const defaultState = { x: 0, y: 0 };

//   return useState<ViewState>({
//     ...defaultState,
//     ...initialState,
//   });
// };

const CodeEditor: FC<ComponentProps> = ({ code, tokenize }) => {
  const [editorState, setEditorState] = useEditorState({ value: code || '' });
  const { value } = editorState;

  const [scroll, setScroll] = useState({ x: 0, y: 0 });
  const output = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);

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

  const tokens = tokenize(value);

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

            setEditorState({
              ...editorState,
              value: element.value || '',
            });
          }}
          onSelect={({ target }) => {
            const element = target as HTMLTextAreaElement;

            setEditorState({ ...editorState, pos: element.selectionEnd });
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
          {tokens.length && tokens[tokens.length - 1].text.endsWith('\n')
            ? renderToken({ text: '\n', type: TOKEN_TYPES.NONE })
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
