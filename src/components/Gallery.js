import React, { Component } from 'react'
import { Image, Card } from './'
import Filter from './Filter'

export default class Gallery extends Component {
  state = {
    flipped: false,
    clickedImgId: null
  }
  handleCardClick = (e) => {
    console.log('card clicked:', e)
    // add to clipboard - incremement something
    // show this happening in a div on side - lists count of saved movies and id of saved movie
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
            <div className='movie-section'>
              <Title title={this.props.filter.name} />

                <div className='movie-box'>
                  {results.map((result) => <Card flipped={this.state.flipped} key={result.id} result={result} value={result} handleCardClick={this.handleCardClick} />)}
                </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const Title = ({title}) => <div className='search-title'>{title}</div>
