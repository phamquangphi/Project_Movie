import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "component/ui";
import { PATH } from "constant";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RegisterSchema, RegisterSchemaType } from "schema";
import { quanLyNguoiDungServices } from "sevices";
export const RegisterTemplates = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema),
  });
  console.log(errors);
  const navigate = useNavigate();
  //call api từ bên quản lý người dùng
  const onSubmit: SubmitHandler<RegisterSchemaType> = async (value) => {
    try {
      await quanLyNguoiDungServices.register(value);
      toast.success("Đăng kí thành công");
      navigate(PATH.login);
    } catch (error) {
      toast.error(error?.respone?.data?.content);
    }
  };
  return (
    <form className="my-[18px]" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-white text-center text-[32px] m-0 p-0">Register</h2>
      <div className="mt-25">
        <Input
          placeholder="Tài Khoản"
          register={register}
          name="taiKhoan"
          error={errors?.taiKhoan?.message as string}
        />
      </div>
      <div className="mt-25">
        <Input
          placeholder="Mật Khẩu"
          type="password"
          register={register}
          name="matKhau"
          error={errors?.matKhau?.message as string}
        />
      </div>
      <div className="mt-25">
        <Input
          placeholder="...@gmail.com"
          type="email"
          register={register}
          name="email"
          error={errors?.email?.message as string}
        />
      </div>
      <div className="mt-25">
        <Input
          placeholder="Số Điện Thoại"
          register={register}
          name="soDt"
          error={errors?.soDt?.message as string}
        />
      </div>
      <div className="mt-25">
        <Input
          placeholder="Mã nhóm"
          register={register}
          name="maNhom"
          error={errors?.maNhom?.message as string}
        />
      </div>
      <div className="mt-25">
        <Input
          placeholder="Họ và Tên"
          register={register}
          name="hoTen"
          error={errors?.hoTen?.message as string}
        />
      </div>
      <div className="my-25">
        <button className="text-white w-full bg-red-500 font-500 rounded-lg text-16 py-[10px]">
          Register
        </button>
      </div>
    </form>
  );
};
