import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import LayoutProvider from "./Providers/LauyoutProvider";

import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: Landing(),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LayoutProvider>
      <RouterProvider router={router} />
    </LayoutProvider>
  </React.StrictMode>
);
