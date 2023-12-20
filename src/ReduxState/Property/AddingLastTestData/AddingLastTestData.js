import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const lastTestSlice = createSlice({
    name: "lastTest",
    initialState,
    reducers: { 
        setLastTest: (state, action) => {
            return action.payload;
        },
    },
});

export const { setLastTest } = lastTestSlice.actions;

export default lastTestSlice.reducer;
