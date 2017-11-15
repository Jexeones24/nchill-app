const API_KEY = '1dc59a7b7ad2a6a037fcc8da29073f1a'

export const fetchPopularMovies = () => {
  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
  .then(resp => resp.json())
}
