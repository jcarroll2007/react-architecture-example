import { Character } from "../api/types"

export const CHARACTER_LIST_FETCH = 'CHARACTER_LIST_FETCH'
export const CHARACTER_LIST_SUCCESS = 'CHARACTER_LIST_SUCCESS'

interface CharacterListFetchAction {
  type: typeof CHARACTER_LIST_FETCH
}
export function fetchCharacters(): CharacterListFetchAction {
  return {
    type: CHARACTER_LIST_FETCH
  }
}

interface CharacterListSuccessAction {
  type: typeof CHARACTER_LIST_SUCCESS
  payload: Character[]
}
export function fetchCharactersSuccess(): CharacterListSuccessAction {
  return {
    type: CHARACTER_LIST_SUCCESS,
    payload: [] // TODO: add actual characters here
  }
}

export type CharacterListActionTypes = CharacterListFetchAction | CharacterListSuccessAction

export type ActionTypes = CharacterListActionTypes

export const actions = {
  fetchCharacters,
  fetchCharactersSuccess
}
