import React from 'react'
import { useHistory } from 'react-router-dom'
import { CharacterCreateModalContainer } from '../../containers/CharacterCreateModal'
import { CHARACTERS } from '../../routes'

export const CharactersCreateView: React.FunctionComponent = () => {
  const history = useHistory()
  return <CharacterCreateModalContainer onCreateSuccess={() => history.push(CHARACTERS)} />
}
