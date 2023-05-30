import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// 
import Product from "./components/Product/Product.jsx";



 
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        // rota dinamica
      {
        path: "/products/:id",
        element: <Product />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
