import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Router from './pages/Router'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  )
}
