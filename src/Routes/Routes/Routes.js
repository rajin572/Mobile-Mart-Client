import DashboardLayout from "../../Layout/DashboardLayout";
import Blog from "../../Pages/Blog/Blog";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/Signup/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import AdminRoute from "../AdminRoute/AdminRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/categories/:id',
                element:<PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/dashboard/allsellers',
                element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path:'/dashboard/allbuyers',
                element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            }
        ]
    },
    {
        path: '*',
        element:<ErrorPage></ErrorPage>
    }
])
export default router;