import React from 'react'
import './Banner.css'
import { genresURL } from '../../services/moviesAPI/Requests'

function Banner({ onClickMovie }) {
  return (
    <div className="banner">
      <div className="banner_content">
        <h1 className="banner_title">
          Milhões de filmes, séries e pessoas
          <br />
          para descobrir. Explore já.
        </h1>

        <div className="filter">
          <p className="title_filter">FILTRE POR:</p>

          <div className="banner_buttons">
            {genresURL.map(data => (
              <button
                className="button"
                onClick={() => {
                  onClickMovie(data.url)
                }}
              >
                {data.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
