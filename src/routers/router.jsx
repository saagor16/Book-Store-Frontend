import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";

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
            element : <h1>orders</h1>
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
            element :<CheckoutPage></CheckoutPage>
        },
      ]
    },
  ]);

  export default router