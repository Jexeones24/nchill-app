import React from 'react'
const BASE_IMG_URL = 'http://image.tmdb.org/t/p/w342/'

export const Card = (props) => {
  return (
    <div className='card-container'>
      <div className='card-body'>
        <CardFront path={props.result.poster_path} />
        <CardBack details={props.result} handleCardClick={props.handleCardClick} />
      </div>
    </div>
  )
}

export const CardFront = (props) => {
  return (
    <div className='card-side side-front'>
      <img src={BASE_IMG_URL + props.path} alt='image' />
    </div>
  )
}

export const CardBack = ({details, handleCardClick}) => {
  console.log('back props:', details)
  return (
    <div className='card-side side-back' onClick={handleCardClick.bind(this, details)}>
      <h5>{details.title}</h5>
      <p>{details.overview}</p>
      <p>Language: {details.original_language}</p>
      <p>Stars: {details.vote_average}</p>
    </div>
  )
}
