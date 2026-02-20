import { BrowserRouter, Routes, Route } from "react-router";
import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello Brother</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
