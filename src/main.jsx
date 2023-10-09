import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './assets/components/Root/Root';
import Home from './assets/components/Home/Home';
import Login from './assets/components/Login/Login';
import Registration from './assets/components/Registration/Registration';
import Gallery from './assets/components/Gallery/Gallery';
import Purchased from './assets/components/Purchased/Purchased';
import Review from './assets/components/Review/Review';
import Products from './assets/components/Products/Products';
import Latest from './assets/components/Latest/Latest';
import LatestDetails from './assets/components/Latest Details/LatestDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Registration></Registration>
      },
      {
       path:'/gallery',
       element:<Gallery></Gallery>,
       loader: ()=> fetch('/gallery.json'),
      },
      {
        path:'/purchase',
        element:<Purchased></Purchased>
      },
      {
        path:'/review',
        element:<Review></Review>,
        loader: ()=> fetch('/review.json')
      },
      {
        path:"/products",
        element:<Products></Products>
      },
      {
        path:"/latest",
        element:<Latest></Latest>,
        loader:()=> fetch("/latest.json")
      },
      {
        path:'/item/:id',
        loader: () =>  fetch('../latest.json'),
        element:<LatestDetails></LatestDetails>
       }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
