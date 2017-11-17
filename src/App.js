import React, { Component } from 'react'
import './App.css'
import { loadPopularMovies, loadGenres, fetchByGenre, fetchLatest } from './lib/movieService'
import { filterItems } from './lib/movieHelpers'
import { Main } from './components'

class App extends Component {
  state = {
    filter: 'Trending',
    genres: [],
    shows: [],
    initialResults: [],
    results: []
  }
  componentWillMount () {
    loadPopularMovies()
    .then(data => {
      let results = []
      data.forEach(result => {
        results = results.concat(result)
      })
      let movieList =[]
      results.forEach(movie => {
        movieList = movieList.concat(movie.results)
      })
      this.setState({ initialResults: movieList, results: movieList })
    })
    loadGenres()
    .then(data => {
      this.setState({ genres: data.genres }, () => {console.log('genres:', data.genres)})
    })
  }
  componentDidMount() {
    fetchLatest()
    .then(data => {console.log(data)})
  }

  getGenre = (genre, id) => {
    fetchByGenre(id)
    .then(data => {
      this.setState({ results: data.results, filter: genre })
    })
  }
  filterList = (input) => {
    let updatedList = this.state.initialResults
    updatedList = updatedList.filter(item => item.title.toLowerCase().includes(input.toLowerCase()))
    this.setState({ results: updatedList })
  }

  render () {
    // console.log('app state:', this.state)
    return (
      <div className='App h-100'>
        <div className='small-layout h-100'>
          <Main
            filter={this.state.filter}
            genres={this.state.genres}
            shows={this.state.shows}
            results={this.state.results}
            filterList={this.filterList}
            getGenre={this.getGenre}
          />
        </div>
      </div>
    )
  }
}

export default App
