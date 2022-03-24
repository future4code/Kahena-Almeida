import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './HomePage.css'
import Nav from './Nav'
import Banner from './Banner'

function HomePage({ fetchUrl }) {
  const [movies, setMovies] = useState([])

  const base_url = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    console.log('fetchUrl Movies Action', fetchUrl)
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [fetchUrl])

  useEffect(() => {
    async function fetchData() {
      const request = axios.get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=8ca94a6e5b9435241fde9c723592cd60&language=pt-BR'
      )
      setMovies(request.data.results)
      console.log(request)
      return request
    }
    fetchData()
  }, [])

  console.log(movies)

  return (
    <div>
      <Nav />
      <Banner />
      <div className="List">
        {movies.map(movie => {
          return (
            <div className="CardMovie" value={movie}>
              <img
                key={movie.id}
                src={`${base_url}${movie.backdrop_path}`}
                alt={movie.name}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
