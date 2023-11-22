import { useDispatch } from "react-redux";
import {   addTopRated } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";

const useTopRated = () => {
    const dispatch = useDispatch()
    const getTopRated = async () => {
        const data = await  fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS)



        const json = await data.json()
        // console.log("json", json?.results);
        dispatch(addTopRated(json?.results))

    }
    useEffect(() => {
        getTopRated()
    }, [])
}
export default useTopRated