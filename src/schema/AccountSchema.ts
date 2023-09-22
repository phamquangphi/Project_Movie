import { z } from "zod";

export const AccountSchema = z.object({
  taiKhoan: z
    .string()
    .nonempty("Vui lòng nhập tài khoản")
    .max(20, "tài khoản tối đa 20 kí tự")
    .min(6, "Tài khoản tối thiểu 6 kí tự"),
  matKhau: z.string().nonempty("Vui lòng nhập mật khẩu"),
  email: z
    .string()
    .nonempty("Vui lòng nhập email")
    .email("Vui lòng nhập đúng email"),
  soDt: z.string().nonempty("Vui lòng nhập số điện thoại"),
  maNhom: z.string().nonempty("Vui lòng nhập mã nhóm"),
  hoTen: z.string().nonempty("Vui lòng nhập họ và tên"),
  maLoaiNguoiDung: z.string().nonempty("Vui lòng nhập mã loại người dùng"),
});
export type AccountSchemaType = z.infer<typeof AccountSchema>;
