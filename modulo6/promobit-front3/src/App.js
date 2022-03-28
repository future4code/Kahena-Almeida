// import React, { useEffect } from 'react'
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { login, logout, selectUser } from './features/userSlice'
// import { auth } from './firebase'
import HomePage from './Pages/HomePage/HomePage'
// import DetailsPage from './Pages/Details/DetailsPage'
// import Login from './Pages/LoginPage/Login'

function App() {
  // const user = useSelector(selectUser)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(userAuth => {
  //     if (userAuth) {
  //       console.log(userAuth)
  //       dispatch(
  //         login({
  //           uid: userAuth.uid,
  //           email: userAuth.email
  //         })
  //       )
  //     } else {
  //       dispatch(logout)
  //     }
  //   })
  //   return unsubscribe
  // }, [dispatch])

  return (
    <div>
      <HomePage />
      {/* <Router>
        <Routes>
          {!user ? (
            <Route exact path="/login" element={<Login />} />
          ) : (
            <Route exact path="/" element={<HomePage />} />
          )}
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/:id" element={<DetailsPage />} />
        </Routes>
      </Router> */}
    </div>
  )
}

export default App
