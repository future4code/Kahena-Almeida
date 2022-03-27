import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(true)
  const history = useNavigate()

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(false)
    } else {
      handleShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])

  return (
    <div className={`nav ${show && 'nav_purple'}`}>
      <div className="nav_contents">
        <div onClick={() => history.push(`/`)}>
          <img
            className="nav_logo"
            src="https://i.postimg.cc/tCsRgk4G/Vector.png"
            alt="Logo TMDB"
          />
        </div>
      </div>
    </div>
  )
}

export default Nav
