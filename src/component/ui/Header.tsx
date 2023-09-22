import { NavLink, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Avatar, Popover } from ".";
import { PATH } from "constant";
import { LoginOutlined, UserOutlined } from "@ant-design/icons";
import { useAuth } from "hooks";
import { useAppDispatch } from "store";
import { quanLyNguoiDungActions } from "store/quanLyNguoiDung";
export const Header = () => {
  const naviagte = useNavigate();
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  return (
    <HeaderS>
      <div className="header-content">
        <div className="flex items-center">
          <img className="logo" src="/images/logo.png" alt="" />
          <h2
            className="font-medium text-[35px] cursor-pointer"
            onClick={() => {
              naviagte("/");
            }}
          >
            Movie Film
          </h2>
        </div>
        <div className="flex justify-around items-center text-[15px]">
          <p className="mr-40 ">
            <a
              href="#"
              onClick={() => {
                naviagte("/");
              }}
            >
              Home
            </a>
          </p>
          <NavLink className="mr-40" to={"/"}>
            About
          </NavLink>
          <NavLink to={"/"}>Contact</NavLink>
          {user && (
            <Popover
              content={
                <div className="p-10">
                  <h2 className="font-semibold mb-10 p-10">{user?.hoTen}</h2>
                  <hr />
                  <div
                    className="!p-10 !mt-10 hover:bg-gray-500 hover:text-white rounded-lg transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      naviagte(PATH.account);
                    }}
                  >
                    Thông tin tài khoản
                  </div>
                  <div
                    className="!p-10 !mt-10 hover:bg-gray-500 hover:text-white rounded-lg transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      dispatch(quanLyNguoiDungActions.logOut());
                      naviagte("/");
                    }}
                  >
                    Đăng xuất
                  </div>
                </div>
              }
              trigger="click"
            >
              <Avatar
                className="!ml-40 !cursor-pointer !flex !items-center !justify-center !bg-white !text-black"
                size={35}
                icon={<UserOutlined />}
              />
            </Popover>
          )}
          {!user && (
            <div
              className="flex items-center hover:text-red-900 cursor-pointer"
              onClick={() => {
                naviagte(PATH.login);
              }}
            >
              <p className="font-semibold text-16 ml-40">Login</p>
              <LoginOutlined
                style={{ fontSize: "20px" }}
                className="ml-[5px]"
              />
            </div>
          )}
        </div>
      </div>
    </HeaderS>
  );
};

export default Header;
const HeaderS = styled.header`
  height: var(--header-height);
  box-shadow: 0 0 5px rgb(1, 1, 1);
  background-color: white;
  width: 100%;
  z-index: 1;
  .header-content {
    max-width: var(--max-width);
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  .logo {
    width: 45px;
  }
`;
