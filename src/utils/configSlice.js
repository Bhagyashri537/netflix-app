import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name : "config",
    initialState : {
        language : "en"
    },
    reducers : {
        changeLang : (state,action) => {
            state.language = action.payload
        }
    }

})

export const {changeLang} = configSlice.actions;

export default configSlice.reducer