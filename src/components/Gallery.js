import React, { Component } from 'react'
import { Image } from './'
import Filter from './Filter'

export default class Gallery extends Component {
  state = {
    isClicked: false,
    clickedImgId: null
  }
  handleImageClick = (e) => {
    console.log(e)
  }
  render () {
    const results = this.props.results
    const id = this.state.clickedImgId
    return (
      <div className='movie-gallery'>
        <div className='movie-content'>
          <div className='movie-group-header'>
            <Filter filterList={this.props.filterList} />
          </div>
          <div className='movie-group-intro'>
            <span className='waypoint'>
              <span className='empty' />
            </span>

            <div className='movie-section'>
              <div className='search-title'>TRENDING</div>

              <div className='movie-section-content'>
                <div className='movie-box'>
                  {results.map((result) => <Image isClicked={this.state.isClicked} key={result.id} path={result.poster_path} value={result} handleImageClick={this.handleImageClick} />)}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
