import "./styles.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom";

import SyntaxHighlightedInput from "./SyntaxHighlightedInput";

const code = `defun inspect value {
  defun internal {
    call logger value
  }
  call internal
}

call inspect 1340

call inspect inspect`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SyntaxHighlightedInput code={code} />
  </StrictMode>,
  rootElement
);
