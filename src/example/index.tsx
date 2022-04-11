import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import LangEditor from './LangEditor';

const code = `<strong>Some Text</strong>`;

ReactDOM.render(
  <StrictMode>
    <LangEditor code={code} />
  </StrictMode>,
  document.getElementById('root')
);
