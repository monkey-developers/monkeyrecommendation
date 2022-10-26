import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./routes/Homepage";
import { Recommend } from "./routes/Recommend";
import { Navbar } from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Homepage />
      </>
    ),
  },
  {
    path: "/recommend",
    element: (
      <>
        <Navbar />
        <Recommend />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
