import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./routes/Homepage";

const router = createBrowserRouter([{ path: "/", element: <Homepage /> }]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
