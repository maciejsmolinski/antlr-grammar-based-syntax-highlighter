import "./styles.css";

// prettier-ignore
const TOKEN_TYPES = new Map([
  [1, 'braces'],     // {
  [2, 'braces'],     // }
  [3, 'identifier'], // @
  [4, 'none'],       // WS
  [5, 'none'],       // NL
  [6, 'keyword'],    // DEFUN
  [7, 'keyword'],    // CALL
  [8, 'identifier'], // IDENTIFIER
])

export default function Token({ text, type }) {
  const tokenType = TOKEN_TYPES.get(type) || "none";

  return <span className={`Token Token--${tokenType}`}>{text}</span>;
}
