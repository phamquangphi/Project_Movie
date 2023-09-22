import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { useEffect } from "react";
import { getTicketRoomThunk } from "store/quanLyDatVe";
import { useParams } from "react-router-dom";
export const AccountStoryBook = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { chairBookeds, ticketRoom } = useSelector(
    (state: RootState) => state.quanLyDatVe
  );
  useEffect(() => {
    dispatch(getTicketRoomThunk(id));
  }, [dispatch, id]);
  return (
    <div className="px-40 mt-10 flex justify-around ">
      <div>
        <h2 className="text-30">Danh Sách Phim</h2>
        <div className="mt-3">
          <img
            className="w-[20%] ml-5 "
            src={ticketRoom?.thongTinPhim?.hinhAnh}
            alt=""
          />
          <p className="text-16 font-semibold">
            {ticketRoom?.thongTinPhim?.tenPhim}
          </p>
          <p>
            Thông tin rạp:{" "}
            <span className="font-medium">
              {" "}
              {ticketRoom?.thongTinPhim?.tenCumRap}{" "}
            </span>
          </p>
          <p>
            Tên Rạp:{" "}
            <span className="font-medium">
              {" "}
              {ticketRoom?.thongTinPhim?.tenRap}{" "}
            </span>
          </p>
          <p>
            Địa chỉ:{" "}
            <span className="font-medium">
              {" "}
              {ticketRoom?.thongTinPhim?.diaChi}{" "}
            </span>
          </p>
          <p>
            Thời gian:{" "}
            <span className="font-medium">
              {" "}
              {ticketRoom?.thongTinPhim?.gioChieu}{" "}
            </span>
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-30">Danh Sách ghế</h2>
        {chairBookeds?.map((book) => {
          return (
            <div key={book.stt}>
              <p>
                Mã ghế: <span className="font-medium">{book.maGhe} </span>
              </p>
              <p>
                Loại ghế: <span className="font-medium">{book.loaiGhe} </span>
              </p>
              <p>
                Giá vé: <span className="font-medium">{book.giaVe} </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccountStoryBook;
