import React, { useEffect, useState } from 'react'
import './Nav.css'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const [show, handleShow] = useState(true)
  const navigation = useNavigate()
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(false)
    } else {
      handleShow(true)
    }
  }

  function transition() {
    auth.signOut()
    navigation.push(`/login`)
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])

  return (
    <div className={`nav ${show && 'nav_purple'}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://i.postimg.cc/tCsRgk4G/Vector.png"
          alt="Logo TMDB"
        />

        <button className="nav_avatar" onClick={transition()}></button>
      </div>
    </div>
  )
}

export default Nav
