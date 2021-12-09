import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import ListTrips from './ListTripsPage'
import ApplicationForm from './ApplicationFormPage'

export const Router = () => {
  return (
    <div>
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

          <Route exact path="/applicationForm">
            <ApplicationForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Router
