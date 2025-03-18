import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./Pages/Home.jsx"
import AboutUs from "./Pages/AboutUs.jsx"
import ContactUs from "./Pages/ContactUs.jsx"
import Cart from "./Pages/Cart.jsx"
import Shop from "./Pages/Shop.jsx"
import Footer from "./Components/Footer.jsx"
import Login from "./Pages/Login.jsx"
import Register from "./Pages/Register.jsx"


const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/aboutus",
    element:<AboutUs/>
  },
  {
    path:"/contactus",
    element:<ContactUs/>
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {
    path:"/shop",
    element:<Shop/>
  },
  {
    path: "/login",
    element:<Login/>
  }
  ,
  {
    path: "/register",
    element:<Register/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  )
}

export default App
