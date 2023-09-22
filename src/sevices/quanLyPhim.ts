import { apiInstance } from "constant";
import { Banner, Movie } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_PHIM_API,
});
export const quanLyPhimServices = {
  getMovieList: () =>
    api.get<ApiResponse<Movie[]>>("/LayDanhSachPhim?maNhom=GP08"),

  getDanhSachBanner: () => api.get<ApiResponse<Banner[]>>("/LayDanhSachBanner"),
};
