import { createSlice } from "@reduxjs/toolkit";
import { LoginThunk, getUserThunk, updateUserThunk } from "./thunk";
import { User, UserInfo } from "types";

type QuanLyNguoiDungInitialState = {
  user?: UserInfo | User;
  accessToken?: string;
  isUpdatingUser?: boolean;
};

const initialState: QuanLyNguoiDungInitialState = {
  accessToken: localStorage.getItem("accessToken"),
  isUpdatingUser: false,
};
const quanLyNguoiDungSlice = createSlice({
  name: "quanLyNguoiDung",
  initialState,
  reducers: {
    //logOut khỏi đăng nhập
    logOut: (state) => {
      state.user = undefined;
      localStorage.removeItem("accessToken");
    },
  }, //xử lý đồng bộ
  extraReducers: (builder) => {
    // xử lý call api
    builder
      .addCase(LoginThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        if (payload) {
          localStorage.setItem("accessToken", payload.accessToken);
        }
      })
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          state.user = payload;
        }
      })
      // update user cập nhật lại khi chỉnh sửa thông tin
      .addCase(updateUserThunk.pending, (state) => {
        state.isUpdatingUser = true;
      })
      .addCase(updateUserThunk.fulfilled, (state) => {
        state.isUpdatingUser = false;
      })
      .addCase(updateUserThunk.rejected, (state) => {
        state.isUpdatingUser = false;
      });
  },
});
export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungActions,
} = quanLyNguoiDungSlice;
