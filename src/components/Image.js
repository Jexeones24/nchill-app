import React from 'react'
const BASE_IMG_URL = 'http://image.tmdb.org/t/p/w342/'

export const Image = (props) => <img src={BASE_IMG_URL + props.path} alt='image' onClick={props.handleImageClick.bind(this, props)} />
