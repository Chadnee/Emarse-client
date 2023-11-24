import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home/Home";
import Login from "../Layout/Pages/Login/Login";
import Register from "../Layout/Pages/Register/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
         path: "/",
         element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
])