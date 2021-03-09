import { Character } from "../api/types"

export const CHARACTER_LIST_FETCH = 'CHARACTER_LIST_FETCH'
export const CHARACTER_LIST_SUCCESS = 'CHARACTER_LIST_SUCCESS'
export const CHARACTERS_CREATE = 'CHARACTER_CREATE'

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
    payload: [{
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
    }] // TODO: add actual characters here
  }
}

interface CharacterCreateAction {
  type: typeof CHARACTERS_CREATE
  payload: Character
}
export function createCharacter(payload: Character): CharacterCreateAction {
  return {
    type: CHARACTERS_CREATE,
    payload
  }
}

export type CharacterListActionTypes = CharacterListFetchAction | CharacterListSuccessAction

export type ActionTypes = CharacterListActionTypes | CharacterCreateAction

export const actions = {
  createCharacter,
  fetchCharacters,
  fetchCharactersSuccess
}
