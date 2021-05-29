# ANTLR Highlighter

A simple [ANTLR](https://www.antlr.org/)-compatible syntax highlighter.

Uses [ANTLR-generated lexers](https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md) to turn the input string into a stream of tokens, and works with the outcome to highlight the code.

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
