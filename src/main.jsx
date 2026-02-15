import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./app/router";
import { AccountProvider } from "./context/connectorSignup_Acoount";

// ✅ Add AuthContext provider
import { AuthProvider } from "./context/AuthContext.jsx";

import "./styles/index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AccountProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </AccountProvider>
    </QueryClientProvider>
  </StrictMode>,
);
