import "./styles.css";
import { FC } from "react";

export type TokenType = "none" | "identifier" | "number" | "keyword" | "brace";

export const TOKEN_TYPES: Record<Uppercase<TokenType>, TokenType> = {
  NONE: "none",
  IDENTIFIER: "identifier",
  NUMBER: "number",
  KEYWORD: "keyword",
  BRACE: "brace",
};

type ComponentProps = { text: string; type: TokenType };

const Token: FC<ComponentProps> = ({ text, type }) => {
  return <span className={`Token Token--${type}`}>{text}</span>;
};

export default Token;
