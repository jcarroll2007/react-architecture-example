import React from 'react';
import { Route } from 'react-router-dom';
import { CharacterListContainer } from '../../containers/CharacterList';
import { CHARACTERS_CREATE } from '../../routes';
// import { CharacterCreateModalContainer } from '../../containers/CharacterCreateModal';

export const CharactersView: React.FunctionComponent = () => {
  return (
    <main>
      <CharacterListContainer createCharacterPath="create" />
      <Route
        path={CHARACTERS_CREATE}
        render={() => <div>create</div>}
      />
    </main>
  )
};
