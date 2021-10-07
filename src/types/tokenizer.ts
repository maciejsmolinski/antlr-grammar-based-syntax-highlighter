import { Token } from './token';

export type Tokenizer = (code: string) => Token[];
