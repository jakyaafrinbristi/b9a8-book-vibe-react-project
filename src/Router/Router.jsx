import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesRead from "../pages/PagesRead/PagesRead";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home> ,
    },
    {
      path: "/listed",
      element: <ListedBooks></ListedBooks>,
    },
    {
      path: "/read",
      element: <PagesRead></PagesRead>
    },
  ]);
  export default router;