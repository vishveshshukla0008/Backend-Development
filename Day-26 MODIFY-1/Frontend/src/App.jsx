import React from "react";
import "./styles/abstracts/global.scss";
import { RouterProvider } from "react-router";
import { router } from "./appRoutes";
import { Toaster } from "react-hot-toast";
import Navbar from "./features/shared/components/Navbar";
import BottonmBar from "./features/shared/components/BottonmBar";

const App = () => {
  return (
    <div className="container">
      <Toaster position="top-center" />
      <Navbar />
      <RouterProvider router={router} />
      <BottonmBar />
    </div>
  );
};

export default App;
