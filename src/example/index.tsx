import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import LangEditor from './LangEditor';

const code = `defun inspect value {
  call logger '[DEBUG]', value
}

call inspect 1340`;

ReactDOM.render(
  <StrictMode>
    <LangEditor code={code} />
  </StrictMode>,
  document.getElementById('root')
);
