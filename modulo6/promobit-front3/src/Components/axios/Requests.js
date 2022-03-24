const API_KEY = '8ca94a6e5b9435241fde9c723592cd60'
const MOVIE_GENRE = `/lists?api_key=${API_KEY}&language=pt-BR&page=2`

const requests = {
  fetchActionMovies: `28${MOVIE_GENRE}`,
  fetchAdventureMovies: `12${MOVIE_GENRE}`,
  fetchAnimationMovies: `16${MOVIE_GENRE}`,
  fetchComedyMovies: `35${MOVIE_GENRE}`,
  fetchCrimeMovies: `80${MOVIE_GENRE}`,
  fetchDocumentaryMovies: `99${MOVIE_GENRE}`,
  fetchDramaMovies: `18${MOVIE_GENRE}`,
  fetchFamilyMovies: `10751${MOVIE_GENRE}`,
  fetchFantasyMovies: `14${MOVIE_GENRE}`,
  fetchHistoryMovies: `36${MOVIE_GENRE}`,
  fetchTerrorMovies: `27${MOVIE_GENRE}`,
  fetchMusicMovies: `10402${MOVIE_GENRE}`,
  fetchMisteryMovies: `9648${MOVIE_GENRE}`,
  fetchRomanceMovies: `10749${MOVIE_GENRE}`,
  fetchFictionMovies: `878${MOVIE_GENRE}`,
  fetchTvMovies: `10770${MOVIE_GENRE}`,
  fetchThrillerMovies: `53${MOVIE_GENRE}`,
  fetchWarMovies: `10752${MOVIE_GENRE}`,
  fetchWesternMovies: `37${MOVIE_GENRE}`
}

export default requests
