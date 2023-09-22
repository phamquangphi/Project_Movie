import { createSlice } from "@reduxjs/toolkit";
import { Banner, Movie } from "types";
import { getDanhSachBannerThunk, getMovieListThunk } from "./thunk";
type QuanLyPhimInitialState = {
  movieList: Movie[];
  isLoadMoviedList: boolean;
  banner: Banner[];
};
const initialState: QuanLyPhimInitialState = {
  movieList: [],
  isLoadMoviedList: false,
  banner: [],
};
const quanLyPhimSlice = createSlice({
  name: "quanLyPhim",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieListThunk.pending, (state) => {
        state.isLoadMoviedList = true;
      })
      .addCase(getMovieListThunk.fulfilled, (state, { payload }) => {
        state.movieList = payload;
        state.isLoadMoviedList = false;
      })
      .addCase(getMovieListThunk.rejected, (state) => {
        state.isLoadMoviedList = true;
      })
      .addCase(getDanhSachBannerThunk.fulfilled, (state, { payload }) => {
        state.banner = payload;
      });
  },
});
export const { reducer: quanLyPhimReducer, actions: quanLyPhimActions } =
  quanLyPhimSlice;
