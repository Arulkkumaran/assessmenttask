import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    isLoading: false,
    userData: null,
  },
  reducers: {
    userResetData: (state) => {
      state.isAuthenticated = false;
      state.userData = null;
    },
    userSetData: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.isLoading = action.payload.isLoading;
      state.userData = action.payload.user;
    },
  },
});

export const { userResetData, userSetData } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
