import React from 'react'
import { Image } from './Image'
import Filter from './Filter'

export const Gallery = (props) => {
  return (
    <div className='movie-gallery'>
      <div className='movie-content'>
        <div className='movie-group-header'>
          <Filter filterList={props.filterList} />
        </div>
        <div className='movie-group-intro'>
          <span className='waypoint'>
            <span className='empty' />
          </span>

          <div className='movie-section'>
            <div className='search-title'>TRENDING</div>
            <div className='movie-section-content'>
              <div className='movie-box'>
                {props.results.map((result) => <Image key={result.id} path={result.poster_path} value={result} handleImageClick={props.handleImageClick} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
