import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="min-h-screen w-full font-thin text-white bg-gray-800 px-[10%] py-4">
      <ToastContainer />
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
