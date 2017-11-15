const API_KEY = '1dc59a7b7ad2a6a037fcc8da29073f1a'
const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchPopularMovies = () => {
  return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
  .then(resp => resp.json())
}

export const fetchGenres = () => {
  return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
  .then(resp => resp.json())
}

export const fetchByGenre = (genre) => {
  console.log('fetching genre:', genre)
  // return fetch(``)
  // .then(resp => resp.json())
}
