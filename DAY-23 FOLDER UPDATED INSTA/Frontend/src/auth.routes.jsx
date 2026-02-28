import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import MainPage from "./pages/MainPage";
import CreatePost from "./features/post/pages/CreatePost";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/createpost",
    element: <CreatePost />,
  },
]);
