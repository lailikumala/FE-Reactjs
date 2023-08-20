import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL

export const fetchTraining = createAsyncThunk(
  "training/getList",
  async ({token} : {token: string}, {rejectWithValue}) => {
    try {
      const response = await axios(
        `${BASE_URL}/v1/training/list?page=0&size=10`, {
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

export const fetchTrainingById = createAsyncThunk(
  "training/getById",
  async ({id, token} : {id: any, token: string}, {rejectWithValue}) => {
    try {
      if(id) {
        const response = await axios(
          `${BASE_URL}/v1/training/${id}`, {
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

export const updateTraining = createAsyncThunk(
  "training/update",
  async ({field, token} : {field: any, token: string}, {rejectWithValue}) => {
    try {
      const response = await axios(
        `${BASE_URL}/v1/training/update`, {
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

export const addTraining = createAsyncThunk(
  "training/add",
  async ({field, token} : {field: any, token: string}, {rejectWithValue}) => {
    try {
      const response = await axios(
        `${BASE_URL}/v1/training/save`, {
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

export const deleteTraining = createAsyncThunk(
  "training/delete",
  async ({id, token} : {id: any, token: string}, {rejectWithValue}) => {
    try {
      if(id) {
        const response = await axios(
          `${BASE_URL}/v1/training/delete/${id}`, {
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
