import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL

export const fetchClass = createAsyncThunk(
  "class/getList",
  async ({token} : {token: string}, {rejectWithValue}) => {
    try {
      const response = await axios(
        `${BASE_URL}/v1/karyawan-training/list?page=1&size=3`, {
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
      throw rejectWithValue(error.response.data)
    }
  }
);

export const fetchClassById = createAsyncThunk(
  "class/getById",
  async ({id, token} : {id: any, token: string}, {rejectWithValue}) => {
    try {
      if(id) {
        const response = await axios(
          `${BASE_URL}/v1/karyawan-training/${id}`, {
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
  async ({field, token} : {field: any, token: string}, {rejectWithValue}) => {
    try {
      const response = await axios(
        `${BASE_URL}/v1/karyawan-training/update`, {
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
  async ({field, token} : {field: any, token: string}, {rejectWithValue}) => {
    try {
      const response = await axios(
        `${BASE_URL}/v1/karyawan-training/save`, {
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
      console.log(error.response?.data)
      throw rejectWithValue(error.response.data)
    }
  }
);

export const deleteClass = createAsyncThunk(
  "class/delete",
  async ({id, token} : {id: any, token: string}, {rejectWithValue}) => {
    try {
      if(id) {
        const response = await axios(
          `${BASE_URL}/v1/karyawan-training/delete/${id}`, {
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
