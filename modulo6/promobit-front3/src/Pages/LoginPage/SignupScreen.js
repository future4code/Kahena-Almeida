import React, { useRef } from 'react'
import './SignupScreen.css'
import { auth } from '../../firebase'

function SignupScreen() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  // const register = e => {
  //   e.preventDefault()
  //   auth.createUser()
  // }

  const signIn = e => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        console.log(authUser)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="Submit" onClick={signIn}>
          Entrar
        </button>
      </form>
    </div>
  )
}

export default SignupScreen
