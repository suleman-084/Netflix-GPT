import React from 'react'
import { IMG_CDN_URL } from '../Utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null
  return (
    <div className="w-[8rem] pr-4">
        <img src={IMG_CDN_URL + posterPath } alt="Movie Card" />
    </div>
  )
}

export default MovieCard