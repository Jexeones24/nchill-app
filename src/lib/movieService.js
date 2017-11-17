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
  let id = genre.id
  return fetch(`${BASE_URL}/discover/movie?with_genres=${id}&api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
  .then(resp => resp.json())
}

// reviews:  http://api.themoviedb.org/3/movie/83542/reviews?api_key=1dc59a7b7ad2a6a037fcc8da29073f1a

// full details of result of above query:
// http://api.themoviedb.org/3/review/51910979760ee320eb020fc2?api_key=###
