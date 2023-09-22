import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyRapServices } from "sevices";

export const getMovieDetailThunk = createAsyncThunk(
  "quanLyPhim/getMovieDetailThunk",
  async (payload: string, { rejectWithValue }) => {
    try {
      const data = await quanLyRapServices.getMovieDetail(payload);
      return data.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
