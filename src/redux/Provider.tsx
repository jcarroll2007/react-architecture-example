import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'

export const Provider: React.FunctionComponent = ({
  children
}) => {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  )
}
