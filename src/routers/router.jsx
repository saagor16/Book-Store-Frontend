import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login";

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
      ]
    },
  ]);

  export default router