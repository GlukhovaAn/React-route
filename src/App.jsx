import React from "react";
import "./App.css";
import { Products } from "./pages/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Product } from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <Product />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
