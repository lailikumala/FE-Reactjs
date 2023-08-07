import { createSlice } from "@reduxjs/toolkit";
import { fetchClass, fetchClassById, updateClass, addClass, deleteClass } from "./api/class";

const initialState = {
  dataClass: [],
  isLoading: false,
  value: 10,
  isError: false,

  dataClassId: null,
  isLoadingId: false,
  isErrorId: false,

  editClass: null,
  editIsLoading: false,
  editIsError: false,

  postClass: null,
  postIsLoading: false,
  postIsError: false,

  deleteClass: null,
  deleteIsLoading: false,
  deleteIsError: false,
} as any;

const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    classTraining: (state) => {
      state.data;
    },
  },
  extraReducers: (builder) => {

    // getList
    builder
    .addCase(fetchClass.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchClass.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataClass = action.payload?.data;
    })
    .addCase(fetchClass.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });

    //getbyid
    builder
    .addCase(fetchClassById.pending, (state, action) => {
      state.isLoadingId = true
    })
    .addCase(fetchClassById.fulfilled, (state, action) => {
      state.isLoadingId = false;
      state.dataClassId = action.payload?.data;
    })
    .addCase(fetchClassById.rejected, (state, action) => {
      state.isLoadingId = false;
      state.isErrorId = true;
    });

    //update
    builder
    .addCase(updateClass.pending, (state, action) => {
      state.editIsLoading = true
    })
    .addCase(updateClass.fulfilled, (state, action) => {
      state.editIsLoading = false;
      state.editClass = action.payload;
    })
    .addCase(updateClass.rejected, (state, action) => {
      state.editIsLoading = false;
      state.editIsError = true;
    });

    //add
    builder
    .addCase(addClass.pending, (state, action) => {
      state.postIsLoading = true
    })
    .addCase(addClass.fulfilled, (state, action) => {
      state.postIsLoading = false;
      state.postClass = action.payload;
    })
    .addCase(addClass.rejected, (state, action) => {
      state.postIsLoading = false;
      state.postIsError = true;
    });

    //delete
    builder
    .addCase(deleteClass.pending, (state, action) => {
      state.deleteIsLoading = true
    })
    .addCase(deleteClass.fulfilled, (state, action) => {
      state.deleteIsLoading = false;
      state.deleteClass = action.payload;
    })
    .addCase(deleteClass.rejected, (state, action) => {
      state.deleteIsLoading = false;
      state.deleteIsError = true;
    });
  },
});

export const { classTraining } = classSlice.actions;

export default classSlice.reducer;