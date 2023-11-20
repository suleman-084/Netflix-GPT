import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)

        const json = await data.json()
        // console.log("json", json?.results);
        dispatch(addPopularMovies(json?.results))

    }
    useEffect(() => {
        getPopularMovies()
    }, [])
}
export default usePopularMovies