import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className="banner">
      <h1 className="banner_title">
        Milhões de filmes, séries e pessoas para descobrir. Explore já.
      </h1>
      <div className="filter">
        <p className="title_filter">Filtre por:</p>
      </div>
      <div className="banner--fadeBottom" />
    </div>
  )
}

export default Banner
