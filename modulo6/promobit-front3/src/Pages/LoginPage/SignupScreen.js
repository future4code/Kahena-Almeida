import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignupScreen.css'
import { auth } from '../../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'

function SignupScreen() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const setUserOnStore = user => {
    dispatch(
      login({
        uid: user.uid,
        email: user.email
      })
    )
    navigate('/')
  }

  const register = e => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        console.log(authUser.user)
        setUserOnStore(authUser.user)
      })
      .catch(error => {
        alert(error.message)
      })
  }

  const signIn = e => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(authUser => {
        console.log(authUser)
        setUserOnStore(authUser.user)
      })
      .catch(error => {
        alert(error.message)
      })
  }

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input
          ref={passwordRef}
          placeholder="Senha (mínimo 6 caracteres)"
          type="password"
        />
        <button onClick={signIn}>Entrar</button>
        <button onClick={register}>Cadastrar</button>
      </form>
    </div>
  )
}

export default SignupScreen
