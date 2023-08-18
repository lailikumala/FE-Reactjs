import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./api/auth";

const initialState = {
  postLogin: null,
  postIsLoading: false,
  postIsError: false,

} as any;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state) => {
      state.data;
    },
  },
  extraReducers: (builder) => {

    //add
    builder
    .addCase(userLogin.pending, (state, action) => {
      state.postIsLoading = true
    })
    .addCase(userLogin.fulfilled, (state, action) => {
      state.postIsLoading = false;
      state.postLogin = action.payload;
    })
    .addCase(userLogin.rejected, (state, action) => {
      state.postIsLoading = false;
      state.postIsError = true;
    });
  },
});

export const { auth } = authSlice.actions;

export default authSlice.reducer;