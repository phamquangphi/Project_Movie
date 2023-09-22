import { styled } from "styled-components";

export const Footer = () => {
  return (
    <FooterS>
      <div className="Footer-top">
        <div className="flex justify-between">
          <div className="title-left w-[50%]">
            <div className="flex items-center text-white">
              <img className="w-[50px]" src="/images/logo.png" alt="" />
              <h1 className="font-medium text-[30px]">Movie Film</h1>
            </div>
          </div>
          <div className="title-right w-[50%]">
            <h1 className="text-[25px] font-medium">Giới Thiệu </h1>
            <hr />
            <ul className="!mt-[10px]">
              <li>
                <a href="#">Về Chúng Tôi</a>
              </li>
              <li>
                {" "}
                <a href="#">Thỏa Thuận Khoản Sử Dụng</a>
              </li>
              <li>
                <a href="#">Quy Chế Hoạt Động</a>
              </li>
              <li>
                <a href="#">Chính Sách Bảo Mật</a>
              </li>
            </ul>
          </div>
          <div className="title-right w-[50%]">
            <h1 className="text-[25px] font-medium">Hỗ Trợ </h1>
            <hr />
            <ul className="!mt-[10px]">
              <li>
                <a href="#">Góp Ý</a>
              </li>
              <li>
                <a href="#">Sale And Sevices</a>
              </li>
              <li>
                <a href="#">Rạp / Giá Vé</a>
              </li>
              <li>
                <a href="#">Tuyển Dụng</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Footer-bottom">
        <p>
          <a href="#">
            Công Ty Cổ Phần Phim Thiên Ngân, Tầng 3, Toà Nhà Bitexco Nam Long,
            63A Võ Văn Tần, P. Võ Thị Sáu, Quận 3, Tp. Hồ Chí Minh
          </a>
        </p>
      </div>
    </FooterS>
  );
};

export default Footer;
const FooterS = styled.footer`
  background-color: #3e3f47;
  .Footer-top {
    max-width: var(--max-width);
    margin: auto;
    padding: 20px 0;
    .title-right {
      h1 {
        color: rgb(255, 255, 255);
      }
      li {
        padding-bottom: 10px;
        a {
          color: #adadad;
          font-size: 15px;
          font-weight: 400;
        }
        a:hover {
          color: #af7201;
        }
      }
      hr {
        max-width: 200px;
        border: 1px solid black;
      }
    }
  }
  .Footer-bottom {
    background-color: #2d2a2a;
    color: rgba(255, 255, 255, 0.7);
    p {
      max-width: var(--max-width);
      margin: auto;
      padding: 8px 0;
    }
  }
`;
