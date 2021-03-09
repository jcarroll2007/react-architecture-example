import { Character } from "../api/types";
import { ActionTypes } from "./actions";

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
    data: null
  }
}

export const reducer = function (state: State = initialState, action: ActionTypes) {
  switch (action.type) {
    default:
      return state;
  }
};
