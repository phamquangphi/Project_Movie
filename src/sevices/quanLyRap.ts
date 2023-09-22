import { apiInstance } from "constant";
import { MovieDetail } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_RAP_API,
});
export const quanLyRapServices = {
  getMovieDetail: (payload: string) =>
    api.get<ApiResponse<MovieDetail>>(
      `/LayThongTinLichChieuPhim?MaPhim=${payload}`
    ),
};
