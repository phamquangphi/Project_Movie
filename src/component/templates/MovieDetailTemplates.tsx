import { Button, Tabs } from "component/ui";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "store";
import { getMovieDetailThunk } from "store/quanLyRap";
import dayjs from "dayjs";

export const MovieDetailTemplates = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { movieDetail } = useSelector((state: RootState) => state.quanLyRap);

  useEffect(() => {
    dispatch(getMovieDetailThunk(id));
  }, [dispatch, id]);
  return (
    <div>
      <div className="h-[300px] w-screen relative">
        <h1 className="text-center text-[25px] text-blue-600">
          Thông tin phim và lịch chiếu
        </h1>
        <div className="absolute z-0 top-0 left-0 w-full h-[300px]">
          <img
            className="w-full h-[300px] object-cover object-center"
            src="/images/bg_detailmovie.jpg"
          />
        </div>
        <div className="absolute z-1 top-[20px] left-[130px] flex gap-10">
          <img
            className="w-[150px] h-[200px]"
            src={movieDetail?.hinhAnh}
            alt=""
          />
          <div className="text-white px-[10px]">
            <h1 className="text-[25px]">{movieDetail?.tenPhim}</h1>
            <p>Mô tả: {movieDetail?.moTa}</p>
            <p>Đánh giá: {movieDetail?.danhGia}</p>
            <p>Đang chiếu: {movieDetail?.dangChieu ? "Có" : "Không"}</p>
            <p className="mb-3">
              Ngày khởi chiếu:{" "}
              {dayjs(movieDetail?.ngayKhoiChieu).format("DD/MM/YYYY")}
            </p>
            <Button href={movieDetail?.trailer} target="_blank" type="primary">
              Xem trailer
            </Button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div>
          <Tabs
            tabPosition="left"
            className="h-full"
            tabBarGutter={-5}
            items={movieDetail?.heThongRapChieu.map((item, i) => {
              const id = String(i + 1);
              return {
                label: <span>{item.tenHeThongRap}</span>,
                key: id,
                children: (
                  <div>
                    {item.cumRapChieu.map((rapchieu) => (
                      <div>
                        <div className="flex items-center gap-[9px]">
                          <img
                            className="w-[32px] h-[32px]"
                            src={rapchieu.hinhAnh}
                            alt=""
                          />
                          <div>
                            <h1 className="text-[17px]">
                              {rapchieu.tenCumRap}
                            </h1>
                            <p className="text-[12px]">{rapchieu.diaChi}</p>
                          </div>
                        </div>
                        <div>
                          {rapchieu.lichChieuPhim.map((lichchieu) => (
                            <span
                              className="mr-3 text-[20px] text-green-600 font-medium cursor-pointer"
                              onClick={() => {
                                navigate(
                                  `/ticketroom/${lichchieu.maLichChieu}`
                                );
                              }}
                            >
                              {dayjs(lichchieu.ngayChieuGioChieu).format(
                                "HH:mm"
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ),
              };
            })}
          />
        </div>
      </div>
    </div>
  );
};
