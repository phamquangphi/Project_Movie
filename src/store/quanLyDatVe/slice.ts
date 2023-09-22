import { createSlice } from "@reduxjs/toolkit";
import { DanhSachGhe, TicketRoom } from "types";
import { getTicketRoomThunk } from ".";

type QuanLyDatVeInitialState = {
  ticketRoom: TicketRoom;
  isLoadTicketRoom: boolean;
  chairBookings: DanhSachGhe[];
  chairBookeds: DanhSachGhe[];
};
const initialState: QuanLyDatVeInitialState = {
  ticketRoom: null,
  isLoadTicketRoom: false,
  chairBookings: [],
  chairBookeds: [],
};

const quanLyDatVeSlice = createSlice({
  name: "quanLyDatVe",
  initialState,
  reducers: {
    setChairBookings: (state, action) => {
      const index = state.chairBookings.findIndex(
        (item) =>
          item.maRap === action.payload.maRap &&
          item.maGhe === action.payload.maGhe
      );
      if (index === -1) {
        state.chairBookings.push(action.payload);
      } else {
        state.chairBookings.splice(index, 1);
      }
    },
    setChairBookeds: (state) => {
      state.chairBookeds = [...state.chairBookeds, ...state.chairBookings];
      state.chairBookings = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTicketRoomThunk.pending, (state) => {
        state.isLoadTicketRoom = true;
      })
      .addCase(getTicketRoomThunk.fulfilled, (state, { payload }) => {
        state.ticketRoom = payload;
        state.isLoadTicketRoom = false;
      })
      .addCase(getTicketRoomThunk.rejected, (state) => {
        state.isLoadTicketRoom = true;
      });
  },
});
export const { reducer: quanLyDatVeReducer, actions: quanLyDatVeActions } =
  quanLyDatVeSlice;
