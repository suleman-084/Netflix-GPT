import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackGround from './VideoBackGround'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.addNowPlayingMovies)
  // console.log("store", movies);
  if (!movies) return 
  const mainMovie = movies[0]
  // console.log(mainMovie);

  const {original_title,overview }  = mainMovie
  // console.log("log", original_title);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackGround />
    </div>
  )
}

export default MainContainer