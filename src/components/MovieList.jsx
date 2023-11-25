import React from 'react'
import MovieCard from './MovieCard'
// import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    // console.log("tite", movies);
    return (
        <div className=''>
            <h1 className='text-3xl py-2 text-white '>{title}</h1>
            <div className='example flex   overflow-x-scroll'>

                <div className='flex'>
                    {movies && movies.map(movie => <MovieCard key={movie.id} posterPath={movie?.poster_path} />)}


                </div>
            </div>

        </div>
    )
}

export default MovieList