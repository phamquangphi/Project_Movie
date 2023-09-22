import { createSlice } from "@reduxjs/toolkit";
import { MovieDetail } from "types";
import { getMovieDetailThunk } from ".";

type QuanLyRapInitialState = {
  movieDetail: MovieDetail;
};
const initialState: QuanLyRapInitialState = {
  movieDetail: null,
};
const quanLyRapSlice = createSlice({
  name: "quanLyRap",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieDetailThunk.fulfilled, (state, { payload }) => {
      state.movieDetail = payload;
    });
  },
});
export const { reducer: quanLyRapReducer, actions: quanLyRapActions } =
  quanLyRapSlice;
