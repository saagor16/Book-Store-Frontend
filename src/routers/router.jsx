import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminLogin from "../components/AdminLogin";
import AdminRoute from "./AdminRoute";
import DashboardLayout from "../pages/dashboard/DashboardLayout";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>,
      children:[
        {
            path: '/',
            element : <Home></Home>
        },
        {
            path: '/orders',
            element : <PrivateRoute><OrderPage></OrderPage></PrivateRoute>
        },
        {
            path: '/login',
            element :<Login></Login>
        },
        {
            path: '/register',
            element :<Register></Register>
        },
        {
            path: '/cart',
            element :<CartPage></CartPage>
        },
        {
            path: '/checkout',
            element :<PrivateRoute><CheckoutPage></CheckoutPage></PrivateRoute>
        },
        {
            path: '/books/:id',
            element :<SingleBook></SingleBook>
        },
      ]
    },
    {
      path: "/admin",
      element: <AdminLogin/>
    },
    {
      path: "/dashboard",
      element: <AdminRoute><DashboardLayout></DashboardLayout></AdminRoute>,
      children:[
        {
          path: "",
          element: <div>editbook</div>
        },
        
      ]
    }
  ]);

  export default router