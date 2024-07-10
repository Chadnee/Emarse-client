import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home/Home";
import Login from "../Layout/Pages/Login/Login";
import Register from "../Layout/Pages/Register/Register";
import AllCategory from "../Layout/Pages/Home/Category/AllCategory";
import CategoryItem from "../Layout/Pages/Home/Category/CategoryItem";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Layout/Pages/DashBoard/MyCart/MyCart";
import AllUsers from "../Layout/Pages/DashBoard/AllUsers/AllUsers";
import ProductDetails from "../Layout/Pages/Product/ProductDetails";
import Review from "../Layout/Pages/DashBoard/Users/Review/Review";
import MyPayment from "../Layout/Pages/DashBoard/Payment/MyPayment";
import UserPaymentHistory from "../Layout/Pages/DashBoard/Payment/UserPaymentHistory/UserPaymentHistory";
import AdminPaymentHistory from "../Layout/Pages/DashBoard/Payment/AdminPaymentHistory/AdminPaymentHistory";
import ManageProduct from "../Layout/Pages/DashBoard/ManageProduct/ManageProduct";
import AddItem from "../Layout/Pages/DashBoard/AddItem/AddItem";
import Settings from "../Layout/Pages/Settings/Settings";
import CategoryRaw from "../Layout/Pages/Home/Category/CategoryRaw";
import CategoryRawForSmall from "../Layout/Pages/Home/Category/CategoryRawForSmall";
import AdminHome from "../Layout/Pages/DashBoard/AdminHome/AdminHome";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import UserHome from "../Layout/Pages/DashBoard/UserHome/UserHome";


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
        },
         {
          path: "/allCategory",
          element: <AllCategory></AllCategory>
          
         },
        
         {
          path: "/categoryItem/:category",
          element: <CategoryItem></CategoryItem>,
          loader:({params})=>fetch(`https://emars-server.vercel.app/products/category/${params.category}`)
         },
         {
          path: "/products/:id",
          element: <ProductDetails></ProductDetails>,
          loader:({params})=>fetch(`https://emars-server.vercel.app/products/id/${params.id}`)
         },
         {
          path:"/settings",
          element:<Settings></Settings> ,
         },
         {
          path: "/categoryRaw/:category",
          element:<CategoryRawForSmall></CategoryRawForSmall>,
          loader:({params})=>fetch(`https://emars-server.vercel.app/products/category/${params.category}`)
         }
      ]
    },
    {
      path: "/dashBoard",
      element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
      children: [
       {
        path: "myCart",
        element:<MyCart></MyCart>
       },
       {
        path:"users",
        element:<AllUsers></AllUsers>
       },
       {
        path:"review",
        element:<Review></Review>
       },
       {
        path:"userHome",
        element:<PrivateRoutes><UserHome></UserHome></PrivateRoutes>
       },
       {
        path: "myPayment/:id",
        element:<MyPayment></MyPayment>,
        loader: ({params}) => fetch(`https://emars-server.vercel.app/carts/myPayment/${params.id}`)
       },
       {
        path: 'userPaymentHistory',
        element:<UserPaymentHistory></UserPaymentHistory>
       },
       {
        path:'adminPaymentHistory',
        element:<AdminPaymentHistory></AdminPaymentHistory>
       },
       {
        path:'manageProduct',
        element:<ManageProduct></ManageProduct>
       },
       {
        path:'addProduct',
        element:<AddItem></AddItem>
       },
       {
        path:'adminHome',
        element: <AdminHome></AdminHome>
       }
      ]
    }
])