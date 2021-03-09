import React from 'react'
import { ThemeProvider } from 'styled-components'

export const Provider: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={{}}>{children}</ThemeProvider>
)
