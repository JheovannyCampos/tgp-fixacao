import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import LayoutProvider from "./Providers/LauyoutProvider";
import { Toaster } from "sonner";
import "./global.css";
import { Portfolio } from "./pages/Porfolio";
import About from "./pages/About";
import Inserts from "./pages/Inserts";
import { ContactsPage } from "./pages/Contact";

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <LayoutProvider>
      {children}
      <Toaster richColors closeButton position="top-center" />
    </LayoutProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LayoutWrapper>
        <Landing />
      </LayoutWrapper>
    ),
  },
  {
    path: "/portfolio",
    element: (
      <LayoutWrapper>
        <Portfolio />
      </LayoutWrapper>
    ),
  },
  {
    path: "/about",
    element: (
      <LayoutWrapper>
        <About />
      </LayoutWrapper>
    ),
  },
  {
    path: "/inserts",
    element: (
      <LayoutWrapper>
        <Inserts />
      </LayoutWrapper>
    ),
  },
  {
    path: "/contact",
    element: (
      <LayoutWrapper>
        <ContactsPage />
      </LayoutWrapper>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
