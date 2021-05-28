import "./styles.css";
import { useState, useRef, useEffect } from "react";
import Token from "../Token";
import { tokenize } from "../support/lang";

function renderToken({ text, type }, index) {
  return <Token text={text} type={type} key={text + index} />;
}

export default function SyntaxHighlightedInput({ code }) {
  const [value, setValue] = useState(code || "");
  const [scroll, setScroll] = useState({ x: 0, y: 0 });
  const output = useRef(null);

  useEffect(() => {
    output.current.scrollLeft = scroll.x;
    output.current.scrollTop = scroll.y;
  }, [scroll.x, scroll.y]);

  const tokens = tokenize(value).getAllTokens();

  return (
    <div className="SyntaxHighlightedInput">
      <textarea
        rows="10"
        cols="60"
        className="SyntaxHighlightedInput__input"
        spellCheck={false}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        onScroll={({ target }) =>
          setScroll({ x: target.scrollLeft, y: target.scrollTop })
        }
      />
      <div
        ref={output}
        className="SyntaxHighlightedInput__output"
        style={{ scrollLeft: scroll.x, scrollTop: scroll.y }}
      >
        {tokens.map(renderToken)}
      </div>
    </div>
  );
}
