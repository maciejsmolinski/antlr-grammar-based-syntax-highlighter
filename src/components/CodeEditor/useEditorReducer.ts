import { useReducer } from 'react';
import { EditorState } from './types';

interface ActionPayloads {
  setCursorPosition: number;
  setValue: string;
}

type Actions = {
  [k in keyof ActionPayloads]: { type: k; payload: ActionPayloads[k] };
}[keyof ActionPayloads];

type ActionsAPI = {
  [k in keyof ActionPayloads]: (value: ActionPayloads[k]) => void;
};

const useEditorReducer = (
  initialState: EditorState
): [EditorState, ActionsAPI] => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions: ActionsAPI = {
    setCursorPosition: (x: number) =>
      dispatch({ type: 'setCursorPosition', payload: x }),
    setValue: (code: string) =>
      dispatch({ type: 'setValue', payload: code || '' }),
  };

  return [state, actions];
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
