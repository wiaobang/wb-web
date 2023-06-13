import Login from "./Login"
import Register from "./Register"
import {
  createHashRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './style.css'

const router = createHashRouter(

  [
    {
      path: "/",
      element: <Register />,
    
    children:[

    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]
  }
  
  ]
);

function App(){
  return(
  <RouterProvider router={router} />
  )
}

export default App;
