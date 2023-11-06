import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";

const useNowPlayingmovies = () => {
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json = await data.json()
        console.log("json", json?.results);
        dispatch(addNowPlayingMovies(json?.results))

    }
    useEffect(() => {
        getNowPlayingMovies()
    }, [])
}
export default useNowPlayingmovies