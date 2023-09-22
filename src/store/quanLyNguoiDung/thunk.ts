import { createAsyncThunk } from "@reduxjs/toolkit";
import { AccountSchemaType } from "schema";
import { LoginSchemaType } from "schema/LoginSchema";
import { quanLyNguoiDungServices } from "sevices";

export const LoginThunk = createAsyncThunk(
  "quanLyNguoiDung/LoginThunk",
  async (payload: LoginSchemaType, { rejectWithValue }) => {
    try {
      const data = await quanLyNguoiDungServices.login(payload);
      return data.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserThunk = createAsyncThunk(
  "quanLyNguoiDung/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      //kiem tra có accessToken hay không
      if (accessToken) {
        const data = await quanLyNguoiDungServices.getUser();
        return data.data.content;
      }
      return undefined;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const updateUserThunk = createAsyncThunk(
  "quanLyNguoiDung/updateUserThunk",
  async (payload: AccountSchemaType, { rejectWithValue, dispatch }) => {
    try {
      await quanLyNguoiDungServices.updateUser(payload);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      dispatch(getUserThunk());
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
