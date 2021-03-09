import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CHARACTERS, HOME } from '../../routes'
import { CharactersView } from '../Characters'
import { HomeView } from '../Home'

export const RootView: React.FunctionComponent = () => (
  <Switch>
    <Route exact path={HOME} component={HomeView} />
    <Route path={CHARACTERS} component={CharactersView} />
  </Switch>
)
