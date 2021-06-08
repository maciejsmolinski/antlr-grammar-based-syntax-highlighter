import "./styles.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom";

import SyntaxHighlightedInput from "./SyntaxHighlightedInput";
import { tokenize, token } from "./support/lang";

const code = `defun inspect value {
  defun internal {
    call logger value
  }
  call internal
}

call inspect 1340

call inspect inspect`;

const tokenizer = (code: string) => tokenize(code).getAllTokens().map(token);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SyntaxHighlightedInput code={code} tokenize={tokenizer} />
  </StrictMode>,
  rootElement
);
