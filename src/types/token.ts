export type TokenType = "none" | "identifier" | "number" | "keyword" | "brace";

export type Token = { text: string; type: TokenType };
