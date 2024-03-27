import { createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesRead from "../pages/PagesRead/PagesRead";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root> ,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/listed",
            element: <ListedBooks></ListedBooks>,
        },
         {
      path: "/read",
      element: <PagesRead></PagesRead>
    },
      ]
    }
   
  ]);
  export default router;