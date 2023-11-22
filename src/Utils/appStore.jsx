import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptReducer from "./gptSearchslice";

const appStore = configureStore({
    reducer:{
        user:userSlice,
        movies:moviesSlice,
        gpt:gptReducer,

    },
})
export default appStore