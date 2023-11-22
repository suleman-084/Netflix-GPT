import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)

  return (
    movies.addNowPlayingMovies && (
      <div className="bg-black ">
        <div className='-mt-72 pl-12 relative  z-30 '>
          <MovieList title={"Now Playing"} movies={movies?.addNowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.addPopularMovies} />
          <MovieList title={"Top Rated"} movies={movies?.addTopRated} />
          <MovieList title={"On The Air"} movies={movies?.addOnTheAirMovies} />
          <MovieList title={"Trending"} movies={movies?.addOnTheAirMovies} />
          <MovieList title={"Critics Favourite"} movies={movies?.addOnTheAirMovies} />
        </div>
      </div>
    )

  )
}

export default SecondaryContainer