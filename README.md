# Antlr Syntax Highlighter

A work in progress simple syntax highlighter and code editor powered by [ANTLR](https://www.antlr.org/) grammars.

Given an antlr-generated lexer and a mapping from lexer-specific token ids to general token types, it is going to highlight the code without the need to install extra libraries.

<img width="700" src="/assets/preview.gif" />

## Sample Usage

First, in addition to MyLanguageLexer, we import the default CodeEditor, makeTokenizeFn function and TOKEN_TYPES constant from this project:

```jsx
import {
  CodeEditor,
  makeTokenizeFn,
  TOKEN_TYPES,
} from 'antlr-grammar-based-syntax-highlighter';

import { MyLanguageLexer } from 'antlr-generated-my-language-lexer-and-parser';
```

Next, we create a mapping from MyLanguageLexer tokens to generally recognized token types to apply different highlighting style for each token:

```jsx
const TOKEN_MAPPING = new Map([
  [MyLanguageLexer.Integer, TOKEN_TYPES.NUMBER],
  [MyLanguageLexer.Identifier, TOKEN_TYPES.IDENTIFIER],
  [MyLanguageLexer.Return, TOKEN_TYPES.KEYWORD],
  [MyLanguageLexer.Break, TOKEN_TYPES.KEYWORD],
  [MyLanguageLexer.Continue, TOKEN_TYPES.KEYWORD],
  [MyLanguageLexer.LeftBrace, TOKEN_TYPES.BRACE],
  [MyLanguageLexer.RightBrace, TOKEN_TYPES.BRACE],
]);
```

Then, we create a custom highlighter with the lexer and mapping rules:

```jsx
const tokenize = makeTokenizeFn(MyLanguageLexer, TOKEN_MAPPING);

const MyLanguageEditor = ({ code }) => {
  return (
    <CodeEditor
      code={code}
      tokenize={makeTokenizeFn(MyLanguageLexer, TOKEN_MAPPING)}
    />
  );
};

export default MyLanguageEditor;
```

Finally, we can use the newly created `<MyLanguageEditor code="..." />` component:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import MyLanguageEditor from './MyLanguageEditor';

const code = 'return { id: 175 }';

ReactDOM.render(
  <MyLanguageEditor code={code} />,
  document.getElementById('root')
);
```

## Types and constants

```ts
type TokenType = 'none' | 'identifier' | 'number' | 'keyword' | 'brace';
```

```js
const TOKEN_TYPES = {
  NONE: 'none',
  IDENTIFIER: 'identifier',
  NUMBER: 'number',
  KEYWORD: 'keyword',
  BRACE: 'brace',
};
```

## Inspiration

- [Creating an Editable Textarea That Supports Syntax-Highlighted Code](https://css-tricks.com/creating-an-editable-textarea-that-supports-syntax-highlighted-code/)

## Local Setup

Clone the repository and execute the following commands in the project's dir from the terminal:

```bash
$ npm install --force
$ npm start # starts a server at localhost:3000
```

## Updating Grammar and generating JavaScript parser/lexer

Grammar definition is located under `src/support/lang/Lang.g4`. To generate Parser, Lexer and Listener javascript files, run `make js` in the root dir of the project.

[ANTLR](https://www.antlr.org/) installation is required.
