import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyDatVeServices } from "sevices";

export const getTicketRoomThunk = createAsyncThunk(
  "quanLyDatVe/getTicketRoomThunk",
  async (payload: string, { rejectWithValue }) => {
    try {
      const data = await quanLyDatVeServices.getTicketRoom(payload);
      return data.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
