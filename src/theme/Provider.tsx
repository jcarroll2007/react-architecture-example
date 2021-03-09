import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`

export const Provider: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={{}}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)
