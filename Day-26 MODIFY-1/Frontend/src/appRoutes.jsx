import React from "react";
import { createBrowserRouter } from "react-router";
import Registration from "./features/auth/pages/Registeration";
import LoginPage from "./features/auth/pages/LoginPage";
import Protected from "./features/auth/components/Protected";
import GuestRoute from "./features/auth/components/GuestRoute";
import Home from "./features/Home/Pages/Home";
import ExpressionPage from "./features/expression/pages/ExpressionPage";
import Profile from "./features/auth/pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/register",
    element: (
      <GuestRoute>
        <Registration />
      </GuestRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <GuestRoute>
        <LoginPage />
      </GuestRoute>
    ),
  },
  {
    path: "/expression",
    element: (
      <Protected>
        <ExpressionPage />
      </Protected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <Profile />
      </Protected>
    ),
  },
]);
