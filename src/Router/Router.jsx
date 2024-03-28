import { createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesRead from "../pages/PagesRead/PagesRead";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BooksDetails from "../pages/BooksDetails/BooksDetails";
import ReadBooks from "../components/ReadBooks/ReadBooks";
import WishListBooks from "../components/WishListBooks/WishListBooks";


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
     {
      path:"/books-details/:id",
      element: <BooksDetails></BooksDetails>
     }
      ]
    }
   
  ]);
  export default router;