import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { useDispatch } from "react-redux";
import { getUserThunk } from "./quanLyNguoiDung";

export const store = configureStore({
  reducer: rootReducer,
});
//được dispatch mỗi khi vào site
store.dispatch(getUserThunk());

//tạo Appdispatch
export type RootState = ReturnType<(typeof store)["getState"]>;
type AppDispatch = (typeof store)["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
