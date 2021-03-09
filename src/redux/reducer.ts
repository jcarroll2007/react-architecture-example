import { Character } from "../api/types";
import { ActionTypes, CHARACTERS_CREATE } from "./actions";

export interface State {
  characters: {
    loading: boolean
    error: null | string
    data: null | Character[]
  }
}

const initialState: State = {
  characters: {
    loading: false,
    error: null,
    data: [{
      name: 'Obi Wan Kenobi',
      age: 55,
      isJedi: true
    }, {
      name: 'Yoda',
      age: 900,
      isJedi: true
    }, {
      name: 'Padme',
      age: 24,
      isJedi: false
    }]
  }
}

export const reducer = function (state: State = initialState, action: ActionTypes) {
  switch (action.type) {
    case CHARACTERS_CREATE: {
      const currentCharacters = state?.characters?.data || []
      return {
        ...state,
        characters: {
          ...state.characters,
          data: [
            ...currentCharacters,
            action.payload
          ]
        }
      }
    }
    default:
      return state;
  }
};
