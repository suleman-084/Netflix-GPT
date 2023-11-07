import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        addNowPlayingMovies: null,
    },
    reducers: {
        addNowPlayingMovies:(state, action) => {
            state.addNowPlayingMovies = action.payload
        }
    }

})

export default moviesSlice.reducer
export const {addNowPlayingMovies} = moviesSlice.actions
