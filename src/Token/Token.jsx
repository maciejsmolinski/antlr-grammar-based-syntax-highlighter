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
  [1, TOKENS.BRACE],      // {
  [2, TOKENS.BRACE],      // }
  [3, TOKENS.NONE],       // WS
  [4, TOKENS.NONE],       // NL
  [5, TOKENS.KEYWORD],    // DEFUN
  [6, TOKENS.KEYWORD],    // CALL
  [7, TOKENS.NUMBER],     // NUMBER
  [8, TOKENS.IDENTIFIER], // IDENTIFIER
])

export default function Token({ text, type }) {
  const tokenType = TOKEN_TYPES.get(type) || "none";

  return <span className={`Token Token--${tokenType}`}>{text}</span>;
}
