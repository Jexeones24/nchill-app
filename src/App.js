import React, { Component } from 'react'
import './App.css'
import { fetchTrending } from './lib/movieService'

const API_KEY = '1dc59a7b7ad2a6a037fcc8da29073f1a'
const BASE_IMG_URL = 'http://image.tmdb.org/t/p/w342/'

class App extends Component {
  state = {
    trending: []
  }

  componentDidMount () {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then(resp => resp.json())
    .then(data => {
      let trending = data.results
      this.setState({ trending })
    })

    // fetch('https://api.themoviedb.org/3/movie/550?api_key=1dc59a7b7ad2a6a037fcc8da29073f1a')
    // .then(resp => resp.json())
    // .then(data => {
    //   let url = data.poster_path
    //   this.setState({ url })
    // })
  }

  render () {
    console.log('app state:', this.state)
    const trending = this.state.trending
    return (
      <div className='App h-100'>
        <div className='small-layout h-100'>
          <main className='small-layout-wrapper'>
            <header className='nchill-header'>
              <div className='header-inner small-layout-container'>
                <div className='title'><h1 className='header'>'Nchill</h1></div>
                <div className='header-spacer'></div>
                <div className='nav-links'></div>
              </div>
              <div className='header-big-spacer'></div>
            </header>
            <div className='small-layout-main'>
              <div className='small-layout-body'>
                <aside className='small-layout-aside'>
                  <div className='small-layout-sidebar'>
                    <div className='sidebar-nav'>
                      <div className='sidebar-search'>
                        <div className='filter-terms'>
                          <div className='filter-title'>FILTERS</div>
                          <hr />
                          <div className='term'>Genre</div>
                          <hr />
                          <div className='term'>Actor</div>
                          <hr />
                          <div className='term'>TV Shows</div>
                        </div>
                      </div>
                    </div>
                    <div className='sidebar-group'>
                    </div>
                  </div>
                </aside>
                <div className='small-layout-content'>
                  <div className='movie-gallery'>
                    <div className='movie-content'>
                      <div className='movie-group-header'>
                        <form className='form-wrapper cf'>
                          <div className='form-button-overlay'>
                            <input type='text' className='movie-group-search' placeholder='search...' />
                            <button type='submit'>GO</button>
                          </div>
                        </form>
                      </div>
                      <div className='movie-group-intro'>
                        <span className='waypoint'>
                          <span className='empty' />
                        </span>
                        <div className='movie-section'>
                          <div className='search-title'>TRENDING</div>
                          <div className='movie-section-content'>
                            <div className='movie-box'>
                              {trending.map((movie) => <Image key={movie.id} path={movie.poster_path} />)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className='footer-inner'>
              <div>
                <a href='#' className='footer-link'>FEET</a>
              </div>
              <div>
                <a href='#' className='footer-center-badge'></a>
              </div>
              <div className='footer-spacer'></div>
            </footer>
          </main>
        </div>
      </div>
    )
  }
}

const Image = ({path}) => <img src={BASE_IMG_URL + path} alt='image' />

export default App
