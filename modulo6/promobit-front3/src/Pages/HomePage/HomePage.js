import React, { useEffect, useState } from 'react'
import axios from '../../Components/axios/axios'
import './HomePage.css'
import Nav from './Nav'
import Banner from './Banner'

function HomePage({ onClickDetails }) {
  const [movies, setMovies] = useState([])
  const [fetchUrl, setFetchUrl] = useState(
    'https://api.themoviedb.org/3//trending/all/week?api_key=8ca94a6e5b9435241fde9c723592cd60&language=pt-BR'
  )

  const base_url = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [fetchUrl])

  return (
    <div>
      <Nav />
      <Banner
        onClickMovie={url => {
          setFetchUrl(url)
        }}
      />
      <div className="List">
        {movies.map(movie => {
          return (
            <div
              key={movie.id}
              className="CardMovie"
              value={movie}
              onClick={() => {
                onClickDetails(movie.id)
              }}
            >
              <div
                className="ImgCard"
                style={{
                  backgroundImage: `url(${base_url}${movie.poster_path})`
                }}
              />

              <p className="TextCard1">{movie.title}</p>
              <p className="TextCard2">{movie.release_date}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
