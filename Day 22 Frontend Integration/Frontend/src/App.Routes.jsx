import { BrowserRouter, Routes, Route } from "react-router";
import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";
import { useAuth } from "./features/auth/hooks/useAuth";

const AppRoutes = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <h1>Hello {user.username}</h1> : <Login />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
