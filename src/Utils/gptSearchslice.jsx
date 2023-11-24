import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name:"gpt",
    initialState:{
        toggleGptSearchView: false,
        movieResults:null,
        movieNames:null,
        
    },
    reducers:{
        toggleGptSearchView:(state,action) => {
            state.toggleGptSearchView = !state.toggleGptSearchView
        },
        addGptMovieResult:(state, action) => {
            const {movieNames, movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        },

    }
})

export default gptSearchSlice.reducer
export const {toggleGptSearchView, addGptMovieResult} = gptSearchSlice.actions