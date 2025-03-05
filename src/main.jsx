import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Routes/Homepage.jsx";
import PostListPage from "./Routes/PostListPage.jsx";
import Write from "./Routes/Write.jsx";
import LoginPage from "./Routes/LoginPage.jsx";
import RegisterPage from "./Routes/RegisterPage.jsx";
import SinglePostPage from "./Routes/SinglePostPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

const router = createBrowserRouter([
  {
    element:<MainLayout/>,
    children:[
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
