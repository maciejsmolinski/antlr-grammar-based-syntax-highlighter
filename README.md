# Antlr Syntax Highlighter

A work in progress simple syntax highlighter powered by [ANTLR](https://www.antlr.org/) grammars.

Given an antlr-generated lexer and a mapping from lexer-specific token ids to general token types, it is going to highlight the code without the need to install extra libraries.

<img width="700" src="/assets/preview.gif" />

## Sample Usage

First, we import ANTLR-generated Lexer, Highlight component, some support functions:

```jsx
import MyLanguageLexer from "my-language-lexer-and-parser";
import { SyntaxHighlightedInput as Highlightm getTokenize as makeTokenizeFn } from "antlr-grammar-based-syntax-highlighter";
```

Next, we create a mapping from language tokens to generally recognized token types to apply different highlighting style for each token type:

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

Then, we create a custom highlighter given lexer and mapping rules: 

```jsx
const tokenize = makeTokenizeFn(MyLanguageLexer, TOKEN_MAPPING);

export default const MyLanguageHighlighter = ({ code  }) => {
  return <Highlight code={code} tokenize={makeTokenizeFn(MyLanguageLexer, TOKEN_MAPPING)} />;
}
```

Finally, we can use the `<MyLanguageHighlighter />` component:

```jsx
import ReactDOM from "react-dom";
import MyLanguageHighlighter from './MyLanguageHighlighter';

const rootElement = document.getElementById("root");
const code = 'return { id: 175 }';

ReactDOM.render(
  <MyLanguageHighlighter code={code} />
  rootElement
);
```

## Types and constants

```ts
type TokenType 
  = "none"
  | "identifier" 
  | "number" 
  | "keyword" 
  | "brace";
```

```js
const TOKEN_TYPES = {
  NONE: 'none',
  IDENTIFIER: "identifier",
  NUMBER: "number",
  KEYWORD: "keyword",
  BRACE: "brace",
}
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
