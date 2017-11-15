import React from 'react'
const BASE_IMG_URL = 'http://image.tmdb.org/t/p/w342/'

export const Image = ({path}) => <img src={BASE_IMG_URL + path} alt='image' />
