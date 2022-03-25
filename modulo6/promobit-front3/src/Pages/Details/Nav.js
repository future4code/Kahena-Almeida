import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(true)

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
        <a href="https://www.themoviedb.org/" target="blank">
          <img
            className="nav_logo"
            src="https://i.postimg.cc/tCsRgk4G/Vector.png"
            alt="Logo TMDB"
            href="https://www.themoviedb.org/"
            target="_blank"
          />
        </a>

        <img
          className="nav_avatar"
          src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png"
          alt="Avatar perfil"
        />
      </div>
    </div>
  )
}

export default Nav
