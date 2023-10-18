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
import Review from './assets/components/Review/Review';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './assets/components/Route/PrivateRoute';
import Details from './assets/components/Details/Details';
import JoinedEvents from './assets/components/JoinedEvents/JoinedEvents';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/events.json')
      },
      {
        path:'/detail/:id',
        loader: () =>  fetch('../events.json'),
        element:<PrivateRoute><Details></Details></PrivateRoute>
       },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/gallery',
        element: <PrivateRoute><Gallery></Gallery></PrivateRoute>,
        
      },
      {
        path: '/events',
        element: <PrivateRoute><JoinedEvents></JoinedEvents></PrivateRoute>,
        loader: () => fetch('/events.json'),
      },
      {
        path: '/review',
        element: <PrivateRoute><Review></Review></PrivateRoute>,
        loader: () => fetch('/review.json')
      },
      
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
