import "./styles.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom";

import SyntaxHighlightedInput from "./SyntaxHighlightedInput";

const code = `@variable

defun test {
  @anothervariable

  defun anotherfun {
    @test
  }
  
}

call test`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SyntaxHighlightedInput code={code} />
  </StrictMode>,
  rootElement
);
