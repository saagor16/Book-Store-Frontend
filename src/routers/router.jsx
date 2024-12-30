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
  ]);

  export default router