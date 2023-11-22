import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name:"gpt",
    initialState:{
        toggleGptSearchView: false
    },
    reducers:{
        toggleGptSearchView:(state,action) => {
            state.toggleGptSearchView = !state.toggleGptSearchView
        }

    }
})

export default gptSearchSlice.reducer
export const {toggleGptSearchView} = gptSearchSlice.actions