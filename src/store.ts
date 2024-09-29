import { createSlice } from "@reduxjs/toolkit";

const GloabalSlice = createSlice({
    name: 'Global',
    initialState: { title: 'Inital Title-Redux Title' },
    reducers: {
        changeTitle: (state, action) => {
            return { ...state, title: action.payload }
        }
    }
})

export const { changeTitle } = GloabalSlice.actions;

export default GloabalSlice.reducer;