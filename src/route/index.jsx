import Login from "../pages/login"
import Register from "../pages/register"
import Home from '../pages/home'
import PersonContent from "../pages/person";
import { Children } from "react";
import UpdataSecret from "../pages/updata-secret/updata-secret";


const routes = [
    {
     path: "/",
     element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/home",
      element: <Home/> ,
      children:[
        {
            path:'personContent',
            element:<PersonContent/>
        },
        {
            path:'',
            element:<PersonContent/>
        },
        {
            path:'updataSecret',
            element: <UpdataSecret/>
        }
      ]
    }
  
  ]

  export default routes;