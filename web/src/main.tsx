import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import LayoutProvider from "./Providers/LauyoutProvider";

import "./global.css";
import { Portfolio } from "./pages/Porfolio";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: Landing(),
  },
  {
    path: "/portfolio",
    element: Portfolio(),
  },
  {
    path: "/about",
    element: About(),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LayoutProvider>
      <RouterProvider router={router} />
    </LayoutProvider>
  </React.StrictMode>
);
