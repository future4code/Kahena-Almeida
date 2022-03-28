// // import React from 'react'
// import React, { useEffect, useState } from 'react'
// // import moviesAPI from '../../services/moviesAPI/moviesAPI'
// import axios from 'axios'
// import './DetailsPage.css'
// import Nav from './Nav_Detail'
// import { useParams } from 'react-router-dom'

// function DetailsPage() {
//   const id = useParams()
//   const [movie, setMovie] = useState([])
//   // const [movies, setMovies] = useState([])

//   // const base_url = 'https://image.tmdb.org/t/p/original/'

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(
//         `https://api.themoviedb.org/3/movie/634649?api_key=8ca94a6e5b9435241fde9c723592cd60&language=pt-BR`
//       )
//       setMovie(request.data)
//       console.log(movie, 'movie')
//       return request
//     }

//     fetchData()
//   }, [])

//   // useEffect(() => {
//   //   async function alternativeTitles() {
//   //     const request = await moviesAPI.get(
//   //       `/trending/all/week?api_key=8ca94a6e5b9435241fde9c723592cd60&language=pt-BR`
//   //     )
//   //     setMovies(request.data.results)
//   //     console.log(request.data.results, 'movies')
//   //     return request
//   //   }

//   //   alternativeTitles()
//   // }, [])

//   return (
//     <div>
//       <Nav />
//       <div className="Banner">
//         {/* <h1>Jesus amado</h1> */}
//         <h1>{movie.title}</h1>
//       </div>
//       {/* <div className="List">
//         {movies.map(movie => {
//           return (
//             <div key={movie.id} className="CardMovie" value={movie}>
//               <div
//                 className="ImgCard"
//                 style={{
//                   backgroundImage: `url(${base_url}${movie.poster_path})`
//                 }}
//               />
//               <p className="TextCard1">{movie.title}</p>
//               <p className="TextCard2">{movie.release_date}</p>
//             </div>
//           )
//         })}
//       </div> */}
//     </div>
//   )
// }

// export default DetailsPage
