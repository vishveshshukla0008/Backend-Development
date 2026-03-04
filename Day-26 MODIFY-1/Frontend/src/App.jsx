import React from "react";
import FaceExpression from "./features/expression/FaceExpression";
import "./styles/abstracts/global.scss";
import { RouterProvider } from "react-router";
import { router } from "./appRoutes";
import { AuthProvider } from "./features/auth/authContext";

const App = () => {
  return (
    <div className="container">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
};

export default App;
