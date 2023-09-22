import { useNavigate } from "react-router-dom";
import { PATH } from "constant";
import { toast } from "react-toastify";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "schema/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "store";
import { LoginThunk, getUserThunk } from "store/quanLyNguoiDung/thunk";
import { Input } from "component/ui";
export const LoginTemplates = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
  });
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<LoginSchemaType> = async (value) => {
    dispatch(LoginThunk(value))
      .unwrap()
      .then(() => {
        toast.success("Đăng nhập thành công");
        navigate("/");
        dispatch(getUserThunk());
      });
  };
  return (
    <form className="pt-[30px] pb-[60px]" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-white text-[35px] text-center">Sign In</h2>
      <div className="mt-30">
        <Input
          placeholder="Tài Khoản"
          register={register}
          name="taiKhoan"
          error={errors?.taiKhoan?.message as string}
        />
      </div>

      <div className="mt-30">
        <Input
          placeholder="Mật Khẩu"
          type="password"
          register={register}
          name="matKhau"
          error={errors?.matKhau?.message as string}
        />
      </div>
      <div className="mt-30">
        <button className="text-white w-full bg-red-500 font-500 rounded-lg text-16 py-[10px]">
          Sign In
        </button>
        <p className="mt-10 text-white">
          Chưa có tài khoản?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => {
              navigate(PATH.register);
            }}
          >
            Đăng kí
          </span>
        </p>
      </div>
    </form>
  );
};
