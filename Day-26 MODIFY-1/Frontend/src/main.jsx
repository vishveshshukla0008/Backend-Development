import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./features/auth/authContext.jsx";
import { ExpressionContextProvider } from "./features/expression/expression.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ExpressionContextProvider>
        <App />
      </ExpressionContextProvider>
    </AuthProvider>
  </StrictMode>,
);
