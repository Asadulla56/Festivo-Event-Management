import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {

  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Root from './Layout/Root';
import CustomPlan from './Pages/CustomPlan';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Events from './Pages/Events';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home>,

  },
  {
    path:"/events",
    element:<Events></Events>

  },
  {
    path:"/customplan",
    element:<CustomPlan></CustomPlan>

  },

      {
        path: "/about",
        element:<About></About>

  },
      {
        path: "/contact",
        element:<Contact></Contact>

  },
]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
