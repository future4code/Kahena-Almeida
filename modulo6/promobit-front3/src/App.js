import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RequireAuth from './components/RequireAuth'
import HomePage from './Pages/HomePage/HomePage'
import Login from './Pages/LoginPage/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
