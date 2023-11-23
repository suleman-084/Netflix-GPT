import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptReducer from "./gptSearchslice";
import configReducer from "./configSlice"

const appStore = configureStore({
    reducer:{
        user:userSlice,
        movies:moviesSlice,
        gpt:gptReducer,
        config:configReducer,

    },
})
export default appStore