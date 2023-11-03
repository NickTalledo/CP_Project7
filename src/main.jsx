import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./routes/Home.jsx";
import Create from "./routes/Create.jsx";
import Gallery from "./routes/Gallery.jsx";
import Card from "./routes/Card.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{}],
  },

  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [{}],
  },
  {
    path: "/create",
    element: <Create />,
    errorElement: <ErrorPage />,
    children: [{}],
  },
  {
    path: "/gallery",
    element: <Gallery />,
    errorElement: <ErrorPage />,
    children: [{}],
  },
  {
    path: "/card/:id",
    element: <Card />,
    errorElement: <ErrorPage />,
    children: [{}],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
