# Antlr Syntax Highlighter

A work in progress simple syntax highlighter powered by [ANTLR](https://www.antlr.org/) grammars.

<img width="400" src="/assets/preview.gif" />

## Sample Usage

```jsx
const code = `defun helloWorld {
  call anotherFunction
}`;

<Highlight code={code} />;
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
