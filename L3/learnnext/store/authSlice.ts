import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister, userForgot, userConfirmPassword } from "./api/auth";

const initialState = {
  postLogin: null,
  postIsLoading: false,
  postIsError: false,

  postRegister: null,
  registerIsLoading: false,
  registerIsError: false,

  postForgot: null,
  forgotIsLoading: false,
  forgotIsError: false,

  postConfirmPassword: null,
  confirmPasswordIsLoading: false,
  confirmPasswordIsError: false,

} as any;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state) => {
      state.data;
    },
    logout: (state) => {
      state.postLogin=null
    }
  },
  extraReducers: (builder) => {

    //login
    builder
    .addCase(userLogin.pending, (state, action) => {
      state.postIsLoading = true
    })
    .addCase(userLogin.fulfilled, (state, action) => {
      state.postIsLoading = false;
      state.isLogin = true;
      state.postLogin = action.payload;
    })
    .addCase(userLogin.rejected, (state, action) => {
      state.postIsLoading = false;
      state.postIsError = true;
    });

    //register
    builder
    .addCase(userRegister.pending, (state, action) => {
      state.registerIsLoading = true
    })
    .addCase(userRegister.fulfilled, (state, action) => {
      state.registerIsLoading = false;
      state.postRegister = action.payload;
    })
    .addCase(userRegister.rejected, (state, action) => {
      state.registerIsLoading = false;
      state.registerIsError = true;
    });

    //forgot
    builder
    .addCase(userForgot.pending, (state, action) => {
      state.forgotIsLoading = true
    })
    .addCase(userForgot.fulfilled, (state, action) => {
      state.forgotIsLoading = false;
      state.postForgot = action.payload;
    })
    .addCase(userForgot.rejected, (state, action) => {
      state.forgotIsLoading = false;
      state.forgotIsError = true;
    });

    //confirm password
    builder
    .addCase(userConfirmPassword.pending, (state, action) => {
      state.confirmPasswordIsLoading = true
    })
    .addCase(userConfirmPassword.fulfilled, (state, action) => {
      state.confirmPasswordIsLoading = false;
      state.postConfirmPassword = action.payload;
    })
    .addCase(userConfirmPassword.rejected, (state, action) => {
      state.confirmPasswordIsLoading = false;
      state.confirmPasswordIsError = true;
    });
  },
});

export const { auth, logout } = authSlice.actions;

export default authSlice.reducer;