import React, { Component } from 'react'
import './App.css'
import { fetchPopularMovies } from './lib/movieService'
import { filterItems } from './lib/movieHelpers'
import { Main } from './components'

class App extends Component {
  state = {
    filter: 'popular',
    initialResults: [],
    results: []
  }

  componentWillMount () {
    fetchPopularMovies()
    .then(data => {
      this.setState({
        initialResults: data.results,
        results: data.results
      }, () => {console.log(this.state)})
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
            results={this.state.results}
            filterList={this.filterList}
          />
        </div>
      </div>
    )
  }
}

export default App
