import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "..";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL

export const userLogin = createAsyncThunk(
  "user/login",
  async ({field} : {field: any}, {rejectWithValue}) => {
    try {
      const response = await axios(
        `${BASE_URL}/login-user`, {
          method: "POST",
          data: field
        }
      );
      const data = await response.data
      return data;
    } catch(error: any) {
      // console.log(error.response)
      throw rejectWithValue(error.response.data)
    }
  }
);

export const userRegister = createAsyncThunk(
  "user/register",
  async ({field} : {field: any}, {rejectWithValue}) => {
    try {
      const response = await axios(
        `${BASE_URL}/register/langsung`, {
          method: "POST",
          data: field
        }
      );
      const data = await response.data
      return data;
    } catch(error: any) {
      // console.log(error.response)
      throw rejectWithValue(error.response.data)
    }
  }
);

export const userForgot = createAsyncThunk(
  "user/forgot",
  async ({field} : {field: any}, {rejectWithValue}) => {
    try {
      const response = await axios(
        `${BASE_URL}/forget-password/send-langsung`, {
          method: "POST",
          data: field
        }
      );
      const data = await response.data
      return data;
    } catch(error: any) {
      // console.log(error.response)
      throw rejectWithValue(error.response.data)
    }
  }
);

export const userConfirmPassword = createAsyncThunk(
  "user/confirmPassword",
  async ({field} : {field: any}, {rejectWithValue}) => {
    try {
      const response = await axios(
        `${BASE_URL}/forget-password/change-password-langsung`, {
          method: "POST",
          data: field
        }
      );
      const data = await response.data
      return data;
    } catch(error: any) {
      // console.log(error.response)
      throw rejectWithValue(error.response.data)
    }
  }
);

