import "./styles.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom";

import SyntaxHighlightedInput from "./SyntaxHighlightedInput";

const code = `defun inspect value {
  call logger value
}

call inspect 1340

call inspect @variable`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SyntaxHighlightedInput code={code} />
  </StrictMode>,
  rootElement
);
