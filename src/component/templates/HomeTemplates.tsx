import { Button, Card, Carousel, Pagination, Skeleton } from "component/ui";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";
import { getDanhSachBannerThunk, getMovieListThunk } from "store/quanLyPhim";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
export const HomeTemplates = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // danh sách phân trang
  const [currentPage, setCurrentPage] = useState(1); //load danh sách phim

  const { movieList, isLoadMoviedList, banner } = useSelector(
    (state: RootState) => state.quanLyPhim
  );

  //dispatch call api
  useEffect(() => {
    dispatch(getMovieListThunk());
    dispatch(getDanhSachBannerThunk());
  }, [dispatch]);

  //tính chỉ mục bắt đầu và kết thúc của danh sách phim
  const PAGE_SIZE = 10;
  const startMovie = (currentPage - 1) * PAGE_SIZE;
  const endMovie = startMovie + PAGE_SIZE;
  //tạo hàm onchange cho sự kiện trang
  const handleChange = (page) => setCurrentPage(page);

  if (isLoadMoviedList) {
    return (
      <div>
        {/* Danh sách list phim */}
        <div className="grid grid-cols-4 ">
          {[...Array(16)].map((_, index) => {
            return (
              <Card key={index} className="!w-[280px]">
                <Skeleton.Image active className="!w-full !h-[250px]" />
                <Skeleton.Input active className="!w-full !mt-10" />
                <Skeleton.Input active className="!w-full !mt-10" />
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
  const renderMovieList = () => {
    return movieList?.slice(startMovie, endMovie)?.map((movie) => (
      <Card
        key={movie.maPhim}
        hoverable
        style={{ width: 250 }}
        cover={<img alt="example" height={80} src={movie.hinhAnh} />}
        actions={[
          <Button
            type="primary"
            onClick={() => {
              navigate(`moviedetail/${movie.maPhim}`);
            }}
          >
            Chi tiết
          </Button>,
        ]}
      >
        <Card.Meta
          title={movie.tenPhim}
          description={movie.moTa.substring(0, 50)}
        />
      </Card>
    ));
  };

  return (
    <div className="mb-[30px]">
      {/* Danh sách carousel */}
      <Carousel autoplay={true}>
        {banner?.map((img) => (
          <div key={img.maPhim}>
            <img className="w-[100%] h-[750px]" src={img.hinhAnh} alt="Hinh" />
          </div>
        ))}
      </Carousel>
      {/* Danh Sách phim */}
      <Container>
        <h1 className="text-40 font-bold">Danh Sách Phim</h1>
        <div className="grid grid-cols-4 gap-20 mt-30">{renderMovieList()}</div>
        {/* Phân Trang */}
        <Pagination
          className="!mt-20 page"
          defaultCurrent={1}
          current={currentPage}
          total={movieList.length}
          pageSize={PAGE_SIZE}
          onChange={handleChange}
        />
      </Container>
    </div>
  );
};
export default HomeTemplates;
const Container = styled.div`
  max-width: var(--max-width);
  margin: auto;
  margin-top: 30px;
  h1 {
    border-bottom: 1px solid black;
  }
  .page {
    text-align: center;
  }
`;
