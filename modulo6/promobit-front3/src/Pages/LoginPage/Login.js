import React, { useState } from 'react'
import './Login.css'
import SignupScreen from './SignupScreen'

function Login() {
  const [signIn, setSignIn] = useState(false)
  return (
    <div className="loginScreen">
      <div className="login_gradient" />
      <div className="login_background">
        <img
          className="login_logo"
          src="https://i.postimg.cc/tCsRgk4G/Vector.png"
          alt="Logo TMDB"
        />
      </div>
      <div className="login_body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>
              Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.
            </h1>
            <h2>Pronto(a) para assistir? Crie sua conta ou faça seu login.</h2>

            <button className="login_start" onClick={() => setSignIn(true)}>
              Continuar
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Login
