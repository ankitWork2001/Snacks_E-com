import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./Pages/Home.jsx"
import AboutUs from "./Pages/AboutUs.jsx"
import ContactUs from "./Pages/ContactUs.jsx"
import Cart from "./Pages/Cart.jsx"
import Shop from "./Pages/Shop.jsx"
import Footer from "./Components/Footer.jsx"


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
