import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { Button, ListWithActions, Spinner } from '@fullstory/components'
// import {
//   starWarsCharacterSelector,
//   starWarsCharactersLoadingSelector
// } from './selectors';
// import { actions } from './selectors';
import { CharacterList } from '../../components/CharacterList'
import { ActionList } from '../../components/ActionList';
import { characterListLoadingSelector, characterListSelector } from '../../redux/selectors';
import { actions } from '../../redux/actions';

interface CharacterListContainerProps {
  createCharacterPath: string
}

export const CharacterListContainer: React.FunctionComponent<CharacterListContainerProps> = ({
  createCharacterPath
}) => {
  const characters = useSelector(characterListSelector);
  const loading = useSelector(characterListLoadingSelector);
  const dispatch = useDispatch();

  if (!characters) dispatch(actions.fetchCharacters());
  if (loading) return <div>loading</div>;

  return (
    <ActionList actions={[{ to: createCharacterPath, label: 'Create a New Character' }]}>
      {characters ?
        <CharacterList
          characters={characters}
        /> :
        null
      }
    </ActionList>
  );
};
