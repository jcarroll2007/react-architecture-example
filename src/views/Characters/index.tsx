import React from 'react';
import { Route } from 'react-router-dom';
import { Page } from '../../components/Page';
import { CharacterListContainer } from '../../containers/CharacterList';
import { CHARACTERS_CREATE } from '../../routes';
import { CharactersCreateView } from '../CharactersCreate';

export const CharactersView: React.FunctionComponent = () => {
  return (
    <Page>
      <CharacterListContainer createCharacterPath={CHARACTERS_CREATE} />
      <Route
        exact
        path={CHARACTERS_CREATE}
        component={CharactersCreateView}
      />
    </Page>
  )
};
