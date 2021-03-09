import { State } from './reducer'

export const characterListSelector = (state: State) => state.characters.data
export const characterListLoadingSelector = (state: State) => state.characters.loading
