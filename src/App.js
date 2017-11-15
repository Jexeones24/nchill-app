import React, { Component } from 'react'
import './App.css'
import { fetchPopularMovies, fetchGenres, fetchByGenre } from './lib/movieService'
import { filterItems } from './lib/movieHelpers'
import { Main } from './components'

class App extends Component {
  state = {
    filter: 'popular',
    genres: [],
    initialResults: [],
    results: []
  }

  componentWillMount () {
    fetchPopularMovies()
    .then(data => {
      this.setState({
        initialResults: data.results,
        results: data.results
      })
    })
    fetchGenres()
    .then(data => {
      this.setState({ genres: data.genres })
    })
  }

  componentDidMount () {

  }

  getGenre = (e) => {
    fetchByGenre(e)
    .then(data => {
      this.setState({ results: data.results })
    })
  }

  filterList = (input) => {
    let updatedList = this.state.initialResults
    updatedList = updatedList.filter(item => item.title.toLowerCase().includes(input.toLowerCase()))
    this.setState({ results: updatedList })
  }

  render () {
    console.log('app state:', this.state)
    return (
      <div className='App h-100'>
        <div className='small-layout h-100'>
          <Main
            filter={this.state.filter}
            genres={this.state.genres}
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
