import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Banner.css'

function GenreList({ fetchUrl }) {
  const [movies, setMovies] = useState([])

  const base_url = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    console.log(fetchUrl)
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [fetchUrl])

  console.log(movies)

  return (
    <div>
      {/* <div className="row_posters"> */}
      {movies.map(movie => (
        <img
          // className="row_poster"
          key={movie.id}
          src={`${base_url}${movie.backdrop_path}`}
          alt={movie.name}
        />
      ))}
      {/* </div> */}
    </div>
  )
}

export default GenreList
