import { useDispatch } from "react-redux";
import {  addOnTheAirMovies } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";

const useOnTheAirMovies = () => {
    const dispatch = useDispatch()
    const getOnTheAirMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', API_OPTIONS)

        const json = await data.json()
        // console.log("data", json?.results);
        dispatch(addOnTheAirMovies(json?.results))

    }
    useEffect(() => {
        getOnTheAirMovies()
    }, [])
}
export default useOnTheAirMovies