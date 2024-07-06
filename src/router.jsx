import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/Error";
import Auth from "./pages/auth";
import Map from "./pages/protected";
import ForgotPassword from "./pages/auth/login/ForgotPassword";
import Register from "./pages/auth/register";
import Seller from "./pages/auth/register/Seller";
import Favourite from "./pages/protected/Favourite";
import SellersList from "./pages/protected/SellersList";
import Profile from "./pages/protected/Profile";
import Cart from "./pages/protected/Cart";
import Posts from "./pages/protected/Posts";
import Detail from "./pages/protected/Posts/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/map",
    element: <Map />,
    children: [
      { path: "favourites", element: <Favourite /> },
      { path: "sellers", element: <SellersList /> },
      { path: "profile", element: <Profile /> },
      {
        path: "posts",
        element: <Posts />,
        children: [{ path: "sample", element: <Detail /> }],
      },
      { path: "cart", element: <Cart /> },
    ],
  },
  {
    path: "auth",
    element: <Auth />,
    children: [
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "register", element: <Register /> },
      { path: "register-seller", element: <Seller /> },
    ],
  },
]);

export default router;
