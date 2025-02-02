
import { createRoot } from 'react-dom/client'
import Homepage from './pages/homepage'
import Contact from './pages/contact.jsx';
import Productdisplay from './pages/productdisplay.jsx'
import Webroot from './root/webroot.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Webroot/> ,
    children:[
      {
        path: "/",
        element:<Homepage/> ,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/productdisplay/:id",
        element: <Productdisplay/>,
      },
      
    ]
  },
  
]);


createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)



