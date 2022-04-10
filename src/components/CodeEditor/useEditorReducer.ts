import { useReducer } from 'react';
import { EditorState } from './types';

type Actions =
  | { type: 'setCursorPosition'; payload: number }
  | { type: 'setValue'; payload: string };

type ActionsAPI = {
  [k in Actions as k['type']]: k extends { payload: any }
    ? (value: k['payload']) => void
    : () => void;
};

const useEditorReducer = (initialState: EditorState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions: ActionsAPI = {
    setCursorPosition: (x: number) =>
      dispatch({ type: 'setCursorPosition', payload: x }),
    setValue: (code: string) =>
      dispatch({ type: 'setValue', payload: code || '' }),
  };

  return [state, actions] as const;
};

function reducer(state: EditorState, action: Actions): EditorState {
  switch (action.type) {
    case 'setCursorPosition':
      return { ...state, pos: action.payload };
    case 'setValue':
      return { ...state, value: action.payload };
    default:
      return state;
  }
}

export default useEditorReducer;
