import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../Utils/constants'
import { addTrailerVideo } from '../Utils/moviesSlice'

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    const movieTrailer = useSelector((store)=> store.movies.addTrailerVideo)
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS)

        const json = await data.json()
        // console.log("trailer", json);

        const filterData = json.results.filter((video) => video.type === "Trailer"
        )
        const trailer = filterData.length ? filterData[0] : json.results[0]
        // console.log("trailer", trailer);
        dispatch(addTrailerVideo(trailer))

    }
    useEffect(() => {
       if(!movieTrailer) getMovieVideos()

    }, [])

}

export default useMovieTrailer