import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
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
                            <div className='movie-box'>MOVIE</div>
                            <div className='movie-box'>MOVIE</div>
                            <div className='movie-box'>MOVIE</div>
                            <div className='movie-box'>MOVIE</div>
                            <div className='movie-box'>MOVIE</div>
                            <div className='movie-box'>MOVIE</div>
                            <div className='movie-box'>MOVIE</div>
                            <div className='movie-box'>MOVIE</div>
                            <div className='movie-box'>MOVIE</div>
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

export default App
