import { Token as GenericToken } from './token';

export type Tokenizer = (code: string) => GenericToken[];
