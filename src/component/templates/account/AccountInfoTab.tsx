import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "component/ui";
import { useAuth } from "hooks";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AccountSchema, AccountSchemaType } from "schema";
import { RootState, useAppDispatch } from "store";
import { updateUserThunk } from "store/quanLyNguoiDung";
import { styled } from "styled-components";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const AccountInfoTab = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const { isUpdatingUser } = useSelector(
    (state: RootState) => state.quanLyNguoiDung
  );
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountSchemaType>({
    mode: "onChange",
    resolver: zodResolver(AccountSchema),
  });
  //đưa thông tin khi user đã nhập
  useEffect(() => {
    console.log("userben account", user);
    reset({
      ...user,
      soDt: user?.soDT,
    });
  }, [user, reset, dispatch]);
  const onSubmit: SubmitHandler<AccountSchemaType> = (value) => {
    dispatch(updateUserThunk(value))
      .unwrap()
      .then(() => {
        toast.success("Cập nhật thành công");
      });
  };
  return (
    <form className="px-40" onSubmit={handleSubmit(onSubmit)}>
      <InputS
        label="Tài khoản"
        name="taiKhoan"
        register={register}
        error={errors?.taiKhoan?.message}
      />
      <InputS
        label="Họ và tên"
        name="hoTen"
        register={register}
        error={errors?.hoTen?.message}
      />

      <InputS
        label="Mật khẩu"
        name="matKhau"
        register={register}
        error={errors?.matKhau?.message}
      />
      <InputS
        label="Số điện thoại"
        name="soDt"
        register={register}
        error={errors?.soDt?.message}
      />
      <InputS
        label="Email"
        name="email"
        register={register}
        error={errors?.email?.message}
      />
      <InputS
        label="Mã nhóm"
        name="maNhom"
        register={register}
        error={errors?.maNhom?.message}
      />
      <InputS
        disabled
        label="Mã loại người dùng"
        name="maLoaiNguoiDung"
        register={register}
        error={errors?.maLoaiNguoiDung?.message}
      />
      <div className="text-right">
        <Button
          loading={isUpdatingUser}
          htmlType="submit"
          className="mt-[60px] w-[200px] !h-[50px]"
          type="primary"
        >
          Lưu thay đổi
        </Button>
      </div>
    </form>
  );
};

export default AccountInfoTab;

const InputS = styled(Input)`
  margin-top: 20px;
  input {
    background-color: transparent !important;
    border: 1px solid black;
    color: black;
  }
`;
