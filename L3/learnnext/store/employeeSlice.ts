import { createSlice } from "@reduxjs/toolkit";
import { fetchEmployee, fetchEmployeeById, updateEmployee, addEmployee, deleteEmployee } from "./api/employee";

const initialState = {
  dataEmployee: [],
  isLoading: false,
  value: 10,
  isError: false,

  dataEmployeeId: null,
  isLoadingId: false,
  isErrorId: false,

  editEmployee: null,
  editIsLoading: false,
  editIsError: false,

  postEmployee: null,
  postIsLoading: false,
  postIsError: false,

  deleteEmployee: null,
  deleteIsLoading: false,
  deleteIsError: false,
} as any;

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    employee: (state) => {
      state.data;
    },
  },
  extraReducers: (builder) => {

    // getList
    builder
    .addCase(fetchEmployee.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchEmployee.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataEmployee = action.payload?.data;
    })
    .addCase(fetchEmployee.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });

    //getbyid
    builder
    .addCase(fetchEmployeeById.pending, (state, action) => {
      state.isLoadingId = true
    })
    .addCase(fetchEmployeeById.fulfilled, (state, action) => {
      state.isLoadingId = false;
      state.dataEmployeeId = action.payload?.data;
    })
    .addCase(fetchEmployeeById.rejected, (state, action) => {
      state.isLoadingId = false;
      state.isErrorId = true;
    });

    //update
    builder
    .addCase(updateEmployee.pending, (state, action) => {
      state.editIsLoading = true
    })
    .addCase(updateEmployee.fulfilled, (state, action) => {
      state.editIsLoading = false;
      state.editEmployee = action.payload;
    })
    .addCase(updateEmployee.rejected, (state, action) => {
      state.editIsLoading = false;
      state.editIsError = true;
    });

    //add
    builder
    .addCase(addEmployee.pending, (state, action) => {
      state.postIsLoading = true
    })
    .addCase(addEmployee.fulfilled, (state, action) => {
      state.postIsLoading = false;
      state.postEmployee = action.payload;
    })
    .addCase(addEmployee.rejected, (state, action) => {
      state.postIsLoading = false;
      state.postIsError = true;
    });

    //delete
    builder
    .addCase(deleteEmployee.pending, (state, action) => {
      state.deleteIsLoading = true
    })
    .addCase(deleteEmployee.fulfilled, (state, action) => {
      state.deleteIsLoading = false;
      state.deleteEmployee = action.payload;
    })
    .addCase(deleteEmployee.rejected, (state, action) => {
      state.deleteIsLoading = false;
      state.deleteIsError = true;
    });
  },
});

export const { employee } = employeeSlice.actions;

export default employeeSlice.reducer;