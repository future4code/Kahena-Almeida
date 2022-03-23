const API_KEY = '8ca94a6e5b9435241fde9c723592cd60'
const MOVIE_GENRE = `/discover/movie?api_key=${API_KEY}&with_genres=`

// const urlFactory = (genId) => `/discover/movie?api_key=${API_KEY}&with_genres=${genId}`

// axios(requests[str]).get()

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  fetchActionMovies: `${MOVIE_GENRE}28`,
  fetchAdventureMovies: `${MOVIE_GENRE}12`,
  fetchAnimationMovies: `${MOVIE_GENRE}16`,
  fetchComedyMovies: `${MOVIE_GENRE}35`,
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
