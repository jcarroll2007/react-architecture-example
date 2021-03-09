import React from 'react'
import { Redirect } from 'react-router-dom'
import { CHARACTERS } from '../../routes'

export const HomeView: React.FunctionComponent = () => (
  <Redirect to={CHARACTERS} />
)
