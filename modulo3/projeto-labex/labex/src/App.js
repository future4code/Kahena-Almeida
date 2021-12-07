import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ListTrips from './pages/ListTripsPage'
import ApplicationForm from './pages/ApplicationFormPage'
import { createGlobalStyle } from 'styled-components'

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

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/listTrips">
            <ListTrips />
          </Route>

          <Route exact path="/applicationForm">
            <ApplicationForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
