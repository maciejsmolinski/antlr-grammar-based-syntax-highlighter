import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import LangEditor from './LangEditor';

const code = `defun inspect value {
  defun internal {
    call logger value
  }
  call internal
}

call inspect 1340

call inspect inspect

call inspect "[LOG]", 'test value', 531`;

ReactDOM.render(
  <StrictMode>
    <LangEditor code={code} />
  </StrictMode>,
  document.getElementById('root')
);
