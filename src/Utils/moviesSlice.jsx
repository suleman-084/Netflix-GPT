import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        addNowPlayingMovies: null,
        addTrailerVideo:null,
    },
    reducers: {
        addNowPlayingMovies:(state, action) => {
            state.addNowPlayingMovies = action.payload
        },
        addTrailerVideo:(state,action)=> {
            state.addTrailerVideo = action.payload
        }
    }

})

export default moviesSlice.reducer
export const {addNowPlayingMovies , addTrailerVideo} = moviesSlice.actions
