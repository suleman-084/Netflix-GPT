import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../aUtils/moviesSlice";
import { API_OPTIONS } from "../aUtils/constants";
import { useEffect } from "react";

const useNowPlayingmovies = () => {
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector((store) => store.movies.addNowPlayingMovies)
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json = await data.json()
        // console.log("json", json?.results);
        dispatch(addNowPlayingMovies(json?.results))

    }
    useEffect(() => {
        // if my nowPlayingMovies is null then only make an api call or else dont
         if(!nowPlayingMovies) getNowPlayingMovies()
    }, [])
}
export default useNowPlayingmovies