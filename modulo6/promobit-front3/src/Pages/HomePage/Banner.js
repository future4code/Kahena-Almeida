import React from 'react'
import './Banner.css'
import requests from '../../Components/axios/Requests'

function Banner() {
  console.log(requests.fetchActionMovies)
  return (
    <div className="banner">
      <div className="banner_content">
        <h1 className="banner_title">
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </h1>

        <div className="filter">
          <p className="title_filter">FILTRE POR:</p>

          <div className="banner_buttons">
            <button
              className="button"
              // fetchUrl={requests.fetchActionMovies}
            >
              Ação
            </button>

            <button className="button">Aventura</button>
            <button className="button">Animação</button>
            <button className="button">Comédia</button>
            <button className="button">Crime</button>
            <button className="button">Documentário</button>
            <button className="button">Drama</button>
            <button className="button">Família</button>
            <button className="button">Fantasia</button>
            <button className="button">História</button>
            <button className="button">Terror</button>
            <button className="button">Música</button>
            <button className="button">Mistério</button>
            <button className="button">Romance</button>
            <button className="button">Ficção científica</button>
            <button className="button">Cinema TV</button>
            <button className="button">Thriller</button>
            <button className="button">Guerra</button>
            <button className="button">Faroeste</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
