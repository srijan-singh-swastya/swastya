// here Enter Discount and Advance data is stored 
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const advancePaidSlice = createSlice({
    name: "discountAndAdvance",
    initialState,
    reducers: { 
        setDiscountAndAdvance: (state, action) => {
            return action.payload;
        },
    },
});

export const { setDiscountAndAdvance } = advancePaidSlice.actions;

export default advancePaidSlice.reducer;
