import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const allEntriesSlice = createSlice({
    name: "AllEntries",
    initialState,
    reducers: { 
        setAllEntries: (state, action) => {
            return action.payload;
        },
    },
});

export const { setAllEntries } = allEntriesSlice.actions;

export default allEntriesSlice.reducer;
