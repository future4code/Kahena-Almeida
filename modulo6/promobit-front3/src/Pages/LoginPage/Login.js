import React, { useState } from 'react'
import './Login.css'
import SignupScreen from './SignupScreen'

function Login() {
  const [signIn, setSignIn] = useState(false)
  return (
    <div className="loginScreen">
      <div className="login_background">
        <img
          className="login_logo"
          src="https://i.postimg.cc/tCsRgk4G/Vector.png"
          alt="Logo TMDB"
        />
        <button className="login_button" onClick={() => setSignIn(true)}>
          Cadastre-se
        </button>
        <div className="login_gradient" />
      </div>
      <div className="login_body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>
              Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.
            </h1>
            <h2>Pronto(a) para assistir? Insira seu email e crie sua conta.</h2>
            <div className="login_input">
              <form>
                <input type="email" placeholder="Email" />
                <button onClick={() => setSignIn(true)} className="login_start">
                  Entrar
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Login
