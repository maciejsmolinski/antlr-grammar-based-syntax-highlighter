import "./styles.css";
import { useState, useRef, useEffect, FC } from "react";
import TokenComponent from "../Token";
import { Token as GenericToken, Tokenizer } from "../../types";
import { TOKEN_TYPES } from "../../constants";

function renderToken({ text, type }: GenericToken, index?: number) {
  return <TokenComponent text={text} type={type} key={text + index} />;
}

type ComponentProps = { code: string; tokenize: Tokenizer };

const SyntaxHighlightedInput: FC<ComponentProps> = ({ code, tokenize }) => {
  const [value, setValue] = useState(code || "");
  const [scroll, setScroll] = useState({ x: 0, y: 0 });
  const output = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!output.current) {
      return;
    }

    output.current.scrollLeft = scroll.x;
    output.current.scrollTop = scroll.y;
  }, [scroll.x, scroll.y]);

  const tokens = tokenize(value);

  return (
    <div className="SyntaxHighlightedInput">
      <div className="SyntaxHighlightedInput__container">
        <textarea
          className="SyntaxHighlightedInput__input"
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
        <div ref={output} className="SyntaxHighlightedInput__output">
          {tokens.map(renderToken)}
          {tokens.length && tokens[tokens.length - 1].text.endsWith("\n")
            ? renderToken({ text: "\n", type: TOKEN_TYPES.NONE })
            : null}
        </div>
      </div>
    </div>
  );
};

export default SyntaxHighlightedInput;
