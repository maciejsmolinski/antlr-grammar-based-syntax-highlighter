import './styles.css';
import { useState, useRef, useEffect, FC } from 'react';
import TokenComponent from '../Token';
import { Token as GenericToken, Tokenizer } from '../../types';
import { TOKEN_TYPES } from '../../constants';

function renderToken({ text, type }: GenericToken, index?: number) {
  return <TokenComponent text={text} type={type} key={text + index} />;
}

function renderChar(char: string, index: number) {
  return <span key={index}>{char}</span>;
}

type ComponentProps = { code: string; tokenize: Tokenizer };

const CodeEditor: FC<ComponentProps> = ({ code, tokenize }) => {
  const [value, setValue] = useState(code || '');
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
          onChange={({ target }) => setValue(target.value)}
          onScroll={({ target }) => {
            const element = target as HTMLAreaElement;

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
          {value.split('').map(renderChar)}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
