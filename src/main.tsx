import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Playground from "./Component/Playground/Playground";
import Main from "./Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>Error page</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/playground",
        element: <Playground />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="container mx-auto">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
