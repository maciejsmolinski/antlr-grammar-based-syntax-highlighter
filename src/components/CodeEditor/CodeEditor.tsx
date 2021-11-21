import './styles.css';
import { useState, useReducer, useRef, useEffect, FC } from 'react';
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

type Action =
  | {
      type: 'setCursorPosition';
      payload: number;
    }
  | { type: 'setValue'; payload: string };

type Actions = Action['type'];

// @TODO: Expose editing utils, e.g. insertAt, replaceAt, etc.
const useEditorReducer = function <T>(
  initialState: T
): [T, Record<Actions, any>] {
  const reducer = (state: T, action: Action) => {
    switch (action.type) {
      case 'setCursorPosition':
        return { ...state, pos: action.payload };
      case 'setValue':
        return { ...state, value: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    setCursorPosition: (x: number) =>
      dispatch({ type: 'setCursorPosition', payload: x }),
    setValue: (code: string) =>
      dispatch({ type: 'setValue', payload: code || '' }),
  };

  return [state, actions];
};

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

  const [editorState, actions] = useEditorReducer<EditorState>({
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
