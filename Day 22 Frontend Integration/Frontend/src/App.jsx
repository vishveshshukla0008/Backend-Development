import React from "react";
import "./Global.scss";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import AppRoutes from "./AppRoutes";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./features/auth/auth.context.jsx";

const App = () => {
  return (
    <main>
      {/* <LeftSidebar /> */}
      {/* <div className="dynamic"></div> */}
      {/* <RightSidebar /> */}
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
      <Toaster position="top-center" />
    </main>
  );
};

export default App;
