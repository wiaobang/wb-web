import Login from "../pages/login"
import Register from "../pages/register"
import Home from '../pages/home'
import PersonContent from "../pages/person";
import FrontPage from "../pages/front-page";
import UpdataSecret from "../pages/updata-secret/updata-secret";
import AuthRoter from "./AuthRoter";
import { redirect } from "react-router-dom";
// import { getUserName } from "../pages/home";


const routes = [
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/",
      element: <Home/> ,
      // loader: getUserName,
      children:[
        {
            index:true,
            element:<FrontPage/>
        },
        {
            path:'home/personContent',
            element:<AuthRoter><PersonContent/></AuthRoter>,

        },

        {
            path:'home/updataSecret',
            element: <AuthRoter><UpdataSecret/></AuthRoter>
        }
      ]
    }
  
  ]

  export default routes;