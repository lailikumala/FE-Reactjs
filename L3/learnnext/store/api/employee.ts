import { token } from "@/utilities";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL

export const fetchEmployee = createAsyncThunk(
  "employee/getList",
  async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/v1/karyawan/list?page=0&size=10`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          }
        }
      );
      const data = await response.json();
      return data;
    } catch(error: any) {
      console.log(error.response.data)
    }
  }
);

export const fetchEmployeeById = createAsyncThunk(
  "employee/getById",
  async ({id} : {id: any}, {rejectWithValue}) => {
    try {
      if(id) {
        const response = await fetch(
          `${BASE_URL}/v1/karyawan/${id}`, {
            method: "GET",
            headers: {
              Authorization: "Bearer " + token,
            }
          }
        );
        const data = await response.json();
        return data;
      }
    } catch(error: any) {
      throw rejectWithValue(error.response.data)
    }
  }
);

export const updateEmployee = createAsyncThunk(
  "employee/update",
  async ({field} : {field: any}, {rejectWithValue}) => {
    try {
      const response = await axios(
        `${BASE_URL}/v1/karyawan/update`, {
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

export const addEmployee = createAsyncThunk(
  "employee/add",
  async ({field} : {field: any}, {rejectWithValue}) => {
    try {
      const response = await axios(
        `${BASE_URL}/v1/karyawan/save`, {
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

export const deleteEmployee = createAsyncThunk(
  "employee/delete",
  async ({id} : {id: any}, {rejectWithValue}) => {
    try {
      if(id) {
        const response = await axios(
          `${BASE_URL}/v1/karyawan/delete/${id}`, {
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
