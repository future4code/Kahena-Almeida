const API_KEY = '8ca94a6e5b9435241fde9c723592cd60'
const MOVIE_GENRE = `/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=`

const gen = id => `${MOVIE_GENRE}${id}`

export const genresURL = [
  { name: 'Ação', url: gen(28) },
  { name: 'Aventura', url: gen(12) },
  { name: 'Animação', url: gen(16) },
  { name: 'Comédia', url: gen(35) },
  { name: 'Crime', url: gen(80) },
  { name: 'Documentário', url: gen(99) },
  { name: 'Drama', url: gen(18) },
  { name: 'Família', url: gen(10751) },
  { name: 'Fantasia', url: gen(14) }
]

const requests = {
  fetchCrimeMovies: `${MOVIE_GENRE}80`,
  fetchDocumentaryMovies: `${MOVIE_GENRE}99`,
  fetchDramaMovies: `${MOVIE_GENRE}18`,
  fetchFamilyMovies: `${MOVIE_GENRE}10751`,
  fetchFantasyMovies: `${MOVIE_GENRE}14`,
  fetchHistoryMovies: `${MOVIE_GENRE}36`,
  fetchTerrorMovies: `${MOVIE_GENRE}27`,
  fetchMusicMovies: `${MOVIE_GENRE}10402`,
  fetchMisteryMovies: `${MOVIE_GENRE}9648`,
  fetchRomanceMovies: `${MOVIE_GENRE}10749`,
  fetchFictionMovies: `${MOVIE_GENRE}878`,
  fetchTvMovies: `${MOVIE_GENRE}10770`,
  fetchThrillerMovies: `${MOVIE_GENRE}53`,
  fetchWarMovies: `${MOVIE_GENRE}10752`,
  fetchWesternMovies: `${MOVIE_GENRE}37`
}

export default requests
