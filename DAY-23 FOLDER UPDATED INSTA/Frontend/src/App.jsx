import { RouterProvider } from "react-router";
import { router } from "./auth.routes";
import { AuthProvider } from "./features/auth/auth.context";
import { Toaster } from "react-hot-toast";
import "./styles/global.scss";
import { PostContextProvider } from "./features/post/postContext";

const App = () => {
  return (
    <AuthProvider>
      <PostContextProvider>
        <Toaster />
        <RouterProvider router={router} />
      </PostContextProvider>
    </AuthProvider>
  );
};

export default App;
