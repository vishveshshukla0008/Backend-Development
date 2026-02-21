import { RouterProvider } from "react-router";
import { router } from "./auth.routes";
import { AuthProvider } from "./features/auth/auth.context";
import { Toaster } from "react-hot-toast";
import "./styles/global.scss";

const App = () => {
  return (
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
