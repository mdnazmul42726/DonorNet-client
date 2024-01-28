import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> }
    ]
  },
  {
    path: '/blog', element: <Blog />,
    children: [
      { path: "/blog/1", element: <p>11111</p> },
      { path: "/blog/2", element: <p>222222</p> },
      { path: "/blog/3", element: <p>333333</p> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);