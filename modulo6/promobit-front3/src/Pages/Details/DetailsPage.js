import React, { useEffect, useState } from 'react'
import axios from '../../Components/axios/axios'
import './DetailsPage.css'
import Nav from './Nav'
import { useParams } from 'react-router-dom'

function DetailsPage() {
  const fetchUrl = useParams()

  const [movie, setMovie] = useState()
  const [movies, setMovies] = useState()

  const base_url = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${fetchUrl}?api_key=8ca94a6e5b9435241fde9c723592cd60&language=pt-BR`
      )
      setMovie(request.data.results)
      return request
    }

    fetchData()
  }, [fetchUrl])

  useEffect(() => {
    async function alternativeTitles() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${fetchUrl}/alternative_titles?api_key=8ca94a6e5b9435241fde9c723592cd60`
      )
      setMovies(request.data.results)
      return request
    }

    alternativeTitles()
  }, [fetchUrl])

  return (
    <div>
      <Nav />
      <div className="Banner">
        <h1>{movie.title}</h1>
      </div>
      <div className="List">
        {movies.map(movie => {
          return (
            <div key={movie.id} className="CardMovie" value={movie}>
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

export default DetailsPage
