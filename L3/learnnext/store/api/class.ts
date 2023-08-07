import { token } from "@/utilities";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL

export const fetchClass = createAsyncThunk(
  "class/getList",
  async () => {
    try {
      const response = await axios(
        `${BASE_URL}/v1/class/list?page=0&size=10`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          }
        }
      );
      const data = await response.data;
      return data;
    } catch(error: any) {
      console.log(error.response.data)
    }
  }
);

export const fetchClassById = createAsyncThunk(
  "class/getById",
  async ({id} : {id: any}, {rejectWithValue}) => {
    try {
      if(id) {
        const response = await axios(
          `${BASE_URL}/v1/class/${id}`, {
            method: "GET",
            headers: {
              Authorization: "Bearer " + token,
            }
          }
        );
        const data = await response.data;
        return data;
      }
    } catch(error: any) {
      throw rejectWithValue(error.response.data)
    }
  }
);

export const updateClass = createAsyncThunk(
  "class/update",
  async ({field} : {field: any}, {rejectWithValue}) => {
    try {
      const response = await axios(
        `${BASE_URL}/v1/class/update`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token,
          },
          data: field
        }
      );
      const data = await response.data
      return data;
    } catch(error: any) {
      throw rejectWithValue(error.response.data)
    }
  }
);

export const addClass = createAsyncThunk(
  "class/add",
  async ({field} : {field: any}, {rejectWithValue}) => {
    try {
      const response = await axios(
        `${BASE_URL}/v1/class/save`, {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
          },
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

export const deleteClass = createAsyncThunk(
  "class/delete",
  async ({id} : {id: any}, {rejectWithValue}) => {
    try {
      if(id) {
        const response = await axios(
          `${BASE_URL}/v1/class/delete/${id}`, {
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + token,
            }
          }
        );
        const data = await response.data;
        return data;
      }
    } catch(error: any) {
      throw rejectWithValue(error.response.data)
    }
  }
);
