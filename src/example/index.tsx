import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import LangEditor from './LangEditor';

const code = `glossary:
GlossDiv:
GlossList:
  GlossEntry:
  Abbrev: ISO 8879:1986
  Acronym: SGML
  GlossDef:
    GlossSeeAlso: [GML, XML]
    para: A meta-markup language, used to create markup languages such as DocBook.
  GlossSee: markup
  GlossTerm: Standard Generalized Markup Language
  ID: SGML
  SortAs: SGML
title: example glossary`;

ReactDOM.render(
  <StrictMode>
    <LangEditor code={code} />
  </StrictMode>,
  document.getElementById('root')
);
