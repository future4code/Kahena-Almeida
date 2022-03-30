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
  { name: 'Fantasia', url: gen(14) },
  { name: 'História', url: gen(36) },
  { name: 'Terror', url: gen(27) },
  { name: 'Música', url: gen(10402) },
  { name: 'Mistério', url: gen(9648) },
  { name: 'Romance', url: gen(10749) },
  { name: 'Ficção Científica', url: gen(878) },
  { name: 'Cinema TV', url: gen(10770) },
  { name: 'Thriller', url: gen(53) },
  { name: 'Guerra', url: gen(10752) },
  { name: 'Faroeste', url: gen(37) }
]
