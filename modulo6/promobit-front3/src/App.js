import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
// import DetailsPage from './Pages/Details/DetailsPage'
// import Login from './Pages/LoginPage/Login'

function App() {
  // const user = null

  return (
    <div>
      <HomePage />
      {/* <Router>
        {!user ? (
          <Login />
        ) : (
          <Route path="/">
            <HomePage />
          </Route> 
        
           <Route path="/:id" >
                <DetailsPage />
              </Route> 
        
        </Router> */}
    </div>
  )
}

export default App
