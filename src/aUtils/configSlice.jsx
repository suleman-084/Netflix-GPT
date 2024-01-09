import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        changeLang: "en"
    },
    reducers: {
        changeLang: (state, action) => {
            state.changeLang = action.payload
        }

    }
})
export default configSlice.reducer
export const {changeLang} =  configSlice.actions