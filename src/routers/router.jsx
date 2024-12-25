import {createBrowserRouter} from "react-router-dom";
import App from "../App";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>,
      children:[
        {
            path: '/',
            element : <h1>home</h1>
        },
        {
            path: '/about',
            element : <h1>About</h1>
        }
      ]
    },
  ]);

  export default router