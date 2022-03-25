import React, { useEffect, useState } from 'react'
import axios from '../../Components/axios/axios'
import './HomePage.css'
import Nav from './Nav'
import Banner from './Banner'

function HomePage() {
  const [movies, setMovies] = useState([])
  const [fetchUrl, setFetchUrl] = useState(
    'https://api.themoviedb.org/3//trending/all/week?api_key=8ca94a6e5b9435241fde9c723592cd60&language=en-US'
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
            <div key={movie.id} className="CardMovie" value={movie}>
              <img src={`${base_url}${movie.backdrop_path}`} alt={movie.name} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
