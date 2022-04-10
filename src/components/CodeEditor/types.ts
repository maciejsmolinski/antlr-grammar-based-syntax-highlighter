// @TODO: Expose editing utils, e.g. insertAt, replaceAt, etc.
export interface EditorState {
  line: number;
  pos: number;
  value: string;
}
