import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "sevices";

export const getMovieListThunk = createAsyncThunk(
  "quanLyPhim/getMovieListThunk",
  async (_, { rejectWithValue }) => {
    try {
      const data = await quanLyPhimServices.getMovieList();
      return data.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getDanhSachBannerThunk = createAsyncThunk(
  "quanLyPhim/getDanhSachBanner",
  async (_, { rejectWithValue }) => {
    try {
      const data = await quanLyPhimServices.getDanhSachBanner();
      return data.data.content;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
