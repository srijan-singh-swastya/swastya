import { createSlice } from "@reduxjs/toolkit";

const userInfos = [];

export const AuthDataSlice = createSlice({
  name: "updatedUser",
  initialState: userInfos,
  reducers: {
    addUpdatedUser: (state, action) => {
      return [...state, action.payload];
    },

    deleteUpdatedUser: (state, action) => {
      // Filter out the user to be deleted based on some criteria
      // const updatedUserss = updatedUsers.filter((user) => user.user.name !== userName);
      console.log(action.payload)
      const userToDelete = action.payload
      const updatedUsers = state.filter((user) => user.user.name !== userToDelete);
      return updatedUsers;
    },
    setEmptyUser: (state, action) => {
      return []; // Set the user data to an empty array
    },
  },
});

export const { addUpdatedUser, deleteUpdatedUser ,setEmptyUser} = AuthDataSlice.actions;
export default AuthDataSlice.reducer;
