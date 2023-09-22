import { apiInstance } from "constant";
import { TicketRoom } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_QUAN_LY_DAT_VE_API,
});
export const quanLyDatVeServices = {
  getTicketRoom: (payload: string) =>
    api.get<ApiResponse<TicketRoom>>(
      `/LayDanhSachPhongVe?MaLichChieu=${payload}`
    ),
};
