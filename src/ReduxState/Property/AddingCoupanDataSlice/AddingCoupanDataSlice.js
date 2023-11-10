import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const couponSlice = createSlice({
    name: "coupons",
    initialState,
    reducers: {
        addNewCoupon: (state, action) => {
            state.push(action.payload);
        },
        deleteCoupon: (state, action) => {
            const indexToDelete = action.payload;
            if (indexToDelete >= 0 && indexToDelete < state.length) {
              state.splice(indexToDelete, 1);
            }
          },
          handleEdit: (state, action) => {
            // const { index, updatedCoupon } = action.payload;
            const index=action.payload.index;
            const updatedCoupon=action.payload.updatedCoupon;
            console.log(index)
          console.log(updatedCoupon)
            if (index !== -1 && index < state.length) {
              state[index] = updatedCoupon;
            }
          },
          
        setCoupons: (state, action) => {
            return action.payload;
        },
    },
});

export const { addNewCoupon, deleteCoupon, setCoupons,handleEdit } = couponSlice.actions;

export default couponSlice.reducer;
