import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import App from "./App";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import TrackMate from "./pages/TrackMate";
import Blog from "./pages/Blog";
import Hearts from "./pages/Hearts";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "projects",
        Component: Projects,
      },
      {
        path: "projects/trackmate",
        Component: TrackMate,
      },
      {
        path: "projects/blog",
        Component: Blog,
      },
      {
        path: "projects/hearts",
        Component: Hearts,
      },
      {
        path: "skills",
        Component: Skills,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);