import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
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
      console.log(data)
      return data;
    } catch(error: any) {
      // console.log(error.response)
      throw rejectWithValue(error.response.data)
    }
  }
);

