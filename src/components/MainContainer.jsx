import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackGround from './VideoBackGround'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  if(!movies ) return
  const oneMainmovie = movies[0]
  console.log(oneMainmovie);
  return (
    <div>
      <VideoTitle/>
      <VideoBackGround/></div>
  )
}

export default MainContainer