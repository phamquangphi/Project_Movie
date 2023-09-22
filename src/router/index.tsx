import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { AuthLayout } from "component/playouts";
import { Account, Home, Login, MovieDetail, Register, TicketRoom } from "pages";
import MainLayout from "component/playouts/MainLayout";

export const router: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.account,
        element: <Account />,
      },
      {
        path: "/moviedetail/:id",
        element: <MovieDetail />,
      },
      {
        path: "/ticketroom/:id",
        element: <TicketRoom />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: PATH.login,
        element: <Login />,
      },
      {
        path: PATH.register,
        element: <Register />,
      },
    ],
  },
];
