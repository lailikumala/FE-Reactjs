import { createSlice } from "@reduxjs/toolkit";
import { fetchRekening, fetchRekeningById, updateRekening, addRekening, deleteRekening } from "./api/rekening";

const initialState = {
  dataRekening: [],
  isLoading: false,
  value: 10,
  isError: false,

  dataRekeningId: null,
  isLoadingId: false,
  isErrorId: false,

  editRekening: null,
  editIsLoading: false,
  editIsError: false,

  postRekening: null,
  postIsLoading: false,
  postIsError: false,

  deleteRekening: null,
  deleteIsLoading: false,
  deleteIsError: false,
} as any;

const rekeningSlice = createSlice({
  name: "rekening",
  initialState,
  reducers: {
    rekening: (state) => {
      state.data;
    },
  },
  extraReducers: (builder) => {

    // getList
    builder
    .addCase(fetchRekening.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchRekening.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataRekening = action.payload?.data;
    })
    .addCase(fetchRekening.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });

    //getbyid
    builder
    .addCase(fetchRekeningById.pending, (state, action) => {
      state.isLoadingId = true
    })
    .addCase(fetchRekeningById.fulfilled, (state, action) => {
      state.isLoadingId = false;
      state.dataRekeningId = action.payload?.data;
    })
    .addCase(fetchRekeningById.rejected, (state, action) => {
      state.isLoadingId = false;
      state.isErrorId = true;
    });

    //update
    builder
    .addCase(updateRekening.pending, (state, action) => {
      state.editIsLoading = true
    })
    .addCase(updateRekening.fulfilled, (state, action) => {
      state.editIsLoading = false;
      state.editRekening = action.payload;
    })
    .addCase(updateRekening.rejected, (state, action) => {
      state.editIsLoading = false;
      state.editIsError = true;
    });

    //add
    builder
    .addCase(addRekening.pending, (state, action) => {
      state.postIsLoading = true
    })
    .addCase(addRekening.fulfilled, (state, action) => {
      state.postIsLoading = false;
      state.postRekening = action.payload;
    })
    .addCase(addRekening.rejected, (state, action) => {
      state.postIsLoading = false;
      state.postIsError = true;
    });

    //delete
    builder
    .addCase(deleteRekening.pending, (state, action) => {
      state.deleteIsLoading = true
    })
    .addCase(deleteRekening.fulfilled, (state, action) => {
      state.deleteIsLoading = false;
      state.deleteRekening = action.payload;
    })
    .addCase(deleteRekening.rejected, (state, action) => {
      state.deleteIsLoading = false;
      state.deleteIsError = true;
    });
  },
});

export const { rekening } = rekeningSlice.actions;

export default rekeningSlice.reducer;