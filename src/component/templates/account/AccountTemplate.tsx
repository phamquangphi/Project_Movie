import { Tabs } from "component/ui";
import AccountInfoTab from "./AccountInfoTab";
import { RootState } from "store";
import { useSelector } from "react-redux";

export const AccountTemplate = () => {
  const { ticketRoom, chairBookeds } = useSelector(
    (state: RootState) => state.quanLyDatVe
  );
  return (
    <div className="mb-[30px]">
      <Tabs
        tabPosition="left"
        className="h-full"
        tabBarGutter={-5}
        items={[
          {
            label: (
              <div className="w-[150px] text-left hover:bg-gray-400 hover:text-white rounded-lg transition-all p-10 text-black">
                Thông tin tài khoản
              </div>
            ),
            key: "accountInfo",
            children: <AccountInfoTab />,
          },
          {
            label: (
              <div className="w-[150px] text-left hover:bg-gray-400 hover:text-white rounded-lg transition-all p-10 text-black">
                Thông tin vé đã đặt
              </div>
            ),
            key: "ticketInfo",
            children: (
              <div className="min-h-full">
                <h1 className="text-center text-[20px]">Thông tin vé đã đặt</h1>
                <p className="text-[16px]">
                  Tên phim: {ticketRoom?.thongTinPhim?.tenPhim}
                </p>
                <p>Tên cụm rạp: {ticketRoom?.thongTinPhim?.tenCumRap}</p>
                <p>Tên rạp: {ticketRoom?.thongTinPhim?.tenRap}</p>
                <p>Địa chỉ: {ticketRoom?.thongTinPhim?.diaChi}</p>
                <p>Ngày chiếu {ticketRoom?.thongTinPhim?.ngayChieu}</p>
                <p>Danh sách vé:</p>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {chairBookeds?.map((item) => (
                    <div className="bg-slate-500 p-3 text-white">
                      <p>Mã ghế: {item.maGhe}</p>
                      <p>Tên ghế: {item.tenGhe}</p>
                      <p>Loại ghế: {item.loaiGhe}</p>
                      <p>Giá vé: {item.giaVe}</p>
                    </div>
                  ))}
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default AccountTemplate;
