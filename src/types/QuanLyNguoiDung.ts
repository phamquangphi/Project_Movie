export type User = {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  accessToken: string;
};
export type UserInfo = User & {
  matKhau: string;
  loaiNguoiDung: {
    maLoaiNguoiDung: string;
    tenLoai: string;
  };
  thongTinDatVe: [];
};
