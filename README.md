# Antlr Syntax Highlighter

A work in progress simple syntax highlighter powered by [ANTLR](https://www.antlr.org/) grammars.

<img width="700" src="/assets/preview.gif" />

## Sample Usage

First, we import ANTLR-generated Lexer, Highlight component, some support functions. Then, we create a mapping from ANTLR tokens to generic token types:

```jsx
import MyLanguageLexer from "./antlr/MyLanguageLexer";
import { SyntaxHighlightedInput as Highlight } from "./components";
import { getTokenize as makeTokenizeFn } from "./support/lang";

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

Finally, we pass the code and generate tokenize fn to make things magically work without writing extra code:

```jsx
const code = `return { id: 175 }`;
const tokenize = makeTokenizeFn(MyLanguageLexer, TOKEN_MAPPING);

<Highlight code={code} tokenize={tokenize} />;
```

## Inspiration

- [Creating an Editable Textarea That Supports Syntax-Highlighted Code](https://css-tricks.com/creating-an-editable-textarea-that-supports-syntax-highlighted-code/)

## Local Setup

Clone the repository and execute the following commands in the project's dir from the terminal:

```bash
$ npm install --force
$ npm start # opens localhost:3000
```

## Updating Grammar and generating JavaScript parser/lexer

Grammar definition is located under `src/support/lang/Lang.g4`. To generate Parser, Lexer and Listener javascript files, run `make js` in the root dir of the project.

[ANTLR](https://www.antlr.org/) installation is required.
