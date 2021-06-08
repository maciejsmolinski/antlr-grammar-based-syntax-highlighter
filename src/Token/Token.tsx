import "./styles.css";
import { FC } from "react";

type Tokens =
  | "Whitespace"
  | "Newline"
  | "Defun"
  | "Call"
  | "Integer"
  | "Identifier"
  | "{"
  | "}";

type TokenType = "none" | "identifier" | "number" | "keyword" | "brace";
type TokenId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const TOKEN_IDS: Record<Uppercase<Tokens>, TokenId> = {
  WHITESPACE: 1,
  NEWLINE: 2,
  DEFUN: 3,
  CALL: 4,
  INTEGER: 5,
  IDENTIFIER: 6,
  "{": 7,
  "}": 8,
};

const TOKEN_TYPES: Record<Uppercase<TokenType>, TokenType> = {
  NONE: "none",
  IDENTIFIER: "identifier",
  NUMBER: "number",
  KEYWORD: "keyword",
  BRACE: "brace",
};

const TOKEN_MAPPING: Map<TokenId, TokenType> = new Map([
  [TOKEN_IDS.WHITESPACE, TOKEN_TYPES.NONE],
  [TOKEN_IDS.NEWLINE, TOKEN_TYPES.NONE],
  [TOKEN_IDS.DEFUN, TOKEN_TYPES.KEYWORD],
  [TOKEN_IDS.CALL, TOKEN_TYPES.KEYWORD],
  [TOKEN_IDS.INTEGER, TOKEN_TYPES.NUMBER],
  [TOKEN_IDS.IDENTIFIER, TOKEN_TYPES.IDENTIFIER],
  [TOKEN_IDS["{"], TOKEN_TYPES.BRACE],
  [TOKEN_IDS["}"], TOKEN_TYPES.BRACE],
]);

type ComponentProps = { text: string; type?: TokenId };

const Token: FC<ComponentProps> = ({ text, type }) => {
  const tokenType =
    (typeof type === "number" && TOKEN_MAPPING.get(type)) || "none";

  return <span className={`Token Token--${tokenType}`}>{text}</span>;
};

export default Token;
