import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "store";
import { getTicketRoomThunk, quanLyDatVeActions } from "store/quanLyDatVe";
import cn from "classnames";
import styled from "styled-components";
import { Button, Card, Skeleton } from "component/ui";
import { toast } from "react-toastify";

export const TicketRoomTemplates = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { ticketRoom, isLoadTicketRoom, chairBookings, chairBookeds } =
    useSelector((state: RootState) => state.quanLyDatVe);

  useEffect(() => {
    dispatch(getTicketRoomThunk(id));
  }, [dispatch, id]);
  if (isLoadTicketRoom) {
    return (
      <div>
        {/* Danh sách list phim */}
        <div className="flex justify-center gap-[100px] my-5">
          <Card className="!w-[600px] col-span-2">
            <Skeleton.Input active className="!w-full !h-[450px] " />
          </Card>
          <Card className="!w-[280px]">
            <Skeleton.Input active className="!w-full !h-[200px]" />
            <Skeleton.Input active className="!w-full !mt-10" />
            <Skeleton.Input active className="!w-full !mt-10" />
          </Card>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center gap-[200px] my-5">
      <Container>
        <h1 className="text-center text-[25px] text-blue-600">Phòng vé</h1>
        <div className="py-2 fw-bold text-center bg-orange-400">SCREEN</div>
        <div className="w-[500px] grid grid-cols-10 gap-3">
          {ticketRoom?.danhSachGhe.map((ghe, index) => (
            <span
              key={index}
              className={cn("bg-slate-300 text-center cursor-pointer Chair", {
                daDat: ghe.daDat,
                booking: chairBookings.find((e) => e.maGhe === ghe.maGhe),
                booked: chairBookeds.find((e) => e.maGhe === ghe.maGhe),
              })}
              onClick={() => {
                dispatch(quanLyDatVeActions.setChairBookings(ghe));
              }}
            >
              {ghe.tenGhe}
            </span>
          ))}
        </div>
      </Container>

      <div className="w-[350px] bg-slate-400 px-3">
        <div style={{ borderBottom: "1px dotted black" }}>
          <h1 className="text-center font-bold text-[20px]">Thông tin vé</h1>

          <div className="flex justify-between">
            <p>Tên phim</p>
            <p>{ticketRoom?.thongTinPhim?.tenPhim}</p>
          </div>
          <div className="flex justify-between">
            <p>Cụm rạp</p>
            <p>{ticketRoom?.thongTinPhim?.tenCumRap}</p>
          </div>
          <div className="flex justify-between">
            <p>Tên rạp</p>
            <p>{ticketRoom?.thongTinPhim?.tenRap}</p>
          </div>
          <div className="flex justify-between">
            <p>Địa chỉ</p>
            <p>{ticketRoom?.thongTinPhim?.diaChi}</p>
          </div>
          <div className="flex justify-between">
            <p>Thời gian chiếu</p>
            <p>
              {ticketRoom?.thongTinPhim?.gioChieu} -{" "}
              {ticketRoom?.thongTinPhim?.ngayChieu}
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-center my-3 font-semibold">Chọn ghế</h1>
          <table className="table w-full text-left">
            <thead>
              <tr>
                <th className="font-semibold">Số ghế</th>
                <th className="font-semibold">Giá</th>
                <th className="font-semibold">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {chairBookings.map((ghe, index) => (
                <tr key={index}>
                  <td>{ghe.tenGhe}</td>
                  <td>{ghe.giaVe.toLocaleString()}đ</td>
                  <td>
                    <Button
                      danger
                      type="primary"
                      onClick={() => {
                        dispatch(quanLyDatVeActions.setChairBookings(ghe));
                      }}
                    >
                      Hủy
                    </Button>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="font-medium">Tổng tiền</td>
                <td>
                  {chairBookings
                    .reduce((total, ghe) => (total += ghe.giaVe), 0)
                    .toLocaleString()}
                  {"đ"}
                </td>
              </tr>
            </tbody>
          </table>
          <Button
            type="primary"
            className="w-full mt-5"
            onClick={() => {
              dispatch(quanLyDatVeActions.setChairBookeds());
              navigate("/");
              toast.success("Đặt vé thành công");
            }}
          >
            Thanh toán
          </Button>
        </div>
      </div>
    </div>
  );
};

const Container = styled.div`
  .Chair {
    &.daDat,
    &.booked {
      background: grey !important;
      color: white;
      pointer-events: none;
    }
    &.booking {
      background: #ebb672 !important;
    }
  }
`;
