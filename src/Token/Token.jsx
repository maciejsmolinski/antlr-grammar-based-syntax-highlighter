import "./styles.css";

const TOKENS = {
  NONE: "none",
  IDENTIFIER: "identifier",
  NUMBER: "number",
  KEYWORD: "keyword",
  BRACE: "brace",
};

// prettier-ignore
const TOKEN_TYPES = new Map([
  [1, TOKENS.NONE],       // Whitespace
  [2, TOKENS.NONE],       // Newline
  [3, TOKENS.KEYWORD],    // Defun
  [4, TOKENS.KEYWORD],    // Call
  [5, TOKENS.NUMBER],     // Integer
  [6, TOKENS.IDENTIFIER], // Identifier
  [7, TOKENS.BRACE],      // {
  [8, TOKENS.BRACE],      // }
])

export default function Token({ text, type }) {
  const tokenType = TOKEN_TYPES.get(type) || "none";

  return <span className={`Token Token--${tokenType}`}>{text}</span>;
}
