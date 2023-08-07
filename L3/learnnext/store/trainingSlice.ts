import { createSlice } from "@reduxjs/toolkit";
import { fetchTraining, fetchTrainingById, updateTraining, addTraining, deleteTraining } from "./api/training";

const initialState = {
  dataTraining: [],
  isLoading: false,
  value: 10,
  isError: false,

  dataTrainingId: null,
  isLoadingId: false,
  isErrorId: false,

  editTraining: null,
  editIsLoading: false,
  editIsError: false,

  postTraining: null,
  postIsLoading: false,
  postIsError: false,

  deleteTraining: null,
  deleteIsLoading: false,
  deleteIsError: false,
} as any;

const trainingSlice = createSlice({
  name: "training",
  initialState,
  reducers: {
    training: (state) => {
      state.data;
    },
  },
  extraReducers: (builder) => {

    // getList
    builder
    .addCase(fetchTraining.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchTraining.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataTraining = action.payload?.data;
    })
    .addCase(fetchTraining.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });

    //getbyid
    builder
    .addCase(fetchTrainingById.pending, (state, action) => {
      state.isLoadingId = true
    })
    .addCase(fetchTrainingById.fulfilled, (state, action) => {
      state.isLoadingId = false;
      state.dataTrainingId = action.payload?.data;
    })
    .addCase(fetchTrainingById.rejected, (state, action) => {
      state.isLoadingId = false;
      state.isErrorId = true;
    });

    //update
    builder
    .addCase(updateTraining.pending, (state, action) => {
      state.editIsLoading = true
    })
    .addCase(updateTraining.fulfilled, (state, action) => {
      state.editIsLoading = false;
      state.editTraining = action.payload;
    })
    .addCase(updateTraining.rejected, (state, action) => {
      state.editIsLoading = false;
      state.editIsError = true;
    });

    //add
    builder
    .addCase(addTraining.pending, (state, action) => {
      state.postIsLoading = true
    })
    .addCase(addTraining.fulfilled, (state, action) => {
      state.postIsLoading = false;
      state.postTraining = action.payload;
    })
    .addCase(addTraining.rejected, (state, action) => {
      state.postIsLoading = false;
      state.postIsError = true;
    });

    //delete
    builder
    .addCase(deleteTraining.pending, (state, action) => {
      state.deleteIsLoading = true
    })
    .addCase(deleteTraining.fulfilled, (state, action) => {
      state.deleteIsLoading = false;
      state.deleteTraining = action.payload;
    })
    .addCase(deleteTraining.rejected, (state, action) => {
      state.deleteIsLoading = false;
      state.deleteIsError = true;
    });
  },
});

export const { training } = trainingSlice.actions;

export default trainingSlice.reducer;