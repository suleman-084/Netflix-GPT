import React from 'react'
import { IMG_CDN_URL } from '../aUtils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null
  return (
    <div className="md:w-[7rem]  w-32 pr-4">
        <img src={IMG_CDN_URL + posterPath } alt="Movie Card" />
    </div>
  )
}

export default MovieCard