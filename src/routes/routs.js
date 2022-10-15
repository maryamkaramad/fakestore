import { createBrowserRouter } from "react-router-dom";
import Home from './../pages/home/index';
import AbuteUs from "../pages/Abute-Us/AbuteUs";
import Categories from "../pages/categories/Categories";
import Layout from './../componenets/layout/index';

const router = createBrowserRouter([
  { 
     path: "/",
     element: <Layout/>,
     children: [ 
      {
        index: true,
        element: <Home />
      },
      {
          path: "abouteus",
          element: <AbuteUs/>
      },
      { 
        path: "categories/:CategoriesID",
        element : <Categories />,
      },
    ]
  
  }
]);

export default router;