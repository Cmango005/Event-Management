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
import Mac from './assets/components/Items/Mac';
import MacDetails from './assets/components/Mac/MacDetails';
import Pad from './assets/components/iPad/Pad';
import PadDetails from './assets/components/IpadDetails/PadDetails';
import Watch from './assets/components/Watch/Watch';
import WatchDetails from './assets/components/WatchDetails/WatchDetails';
import AirPods from './assets/components/AirPods/AirPods';
import PodDetails from './assets/components/PodDetails/PodDetails';
import Store from './assets/components/Store/Store';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './assets/components/Route/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
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
        element: <Gallery></Gallery>,
        loader: () => fetch('/gallery.json'),
      },
      {
        path: '/purchase',
        element: <Purchased></Purchased>,
        loader: () => fetch('/latest.json'),
      },
      {
        path: '/review',
        element: <Review></Review>,
        loader: () => fetch('/review.json')
      },
      {
        path: "/service",
        element: <Products></Products>
      },
      {
        path: "/iphone",
        element: <Latest></Latest>,
        loader: () => fetch("/latest.json")
      },
      {
        path: '/mac',
        element: <Mac></Mac>,
        loader: () => fetch("/mac.json")
      },
      {
        path: '/pad',
        element: <Pad></Pad>,
        loader: () => fetch("/ipad.json")
      },
      {
        path: '/watch',
        element: <Watch></Watch>,
        loader: () => fetch("/watch.json")
      },
      {
        path: '/pod',
        element: <AirPods></AirPods>,
        loader: () => fetch("/airpod.json")
      },
      {
        path: '/item/:id',
        loader: () => fetch('../latest.json'),
        element: <PrivateRoute><LatestDetails></LatestDetails></PrivateRoute>
      },
      {
        path: '/mac/:id',
        loader: () => fetch('../mac.json'),
        element: <PrivateRoute><MacDetails></MacDetails></PrivateRoute>
      },
      {
        path: '/pad/:id',
        loader: () => fetch('../ipad.json'),
        element: <PrivateRoute><PadDetails></PadDetails></PrivateRoute>
      },
      {
        path: '/watch/:id',
        loader: () => fetch('../watch.json'),
        element: <PrivateRoute><WatchDetails></WatchDetails></PrivateRoute>
      },
      {
        path: '/pod/:id',
        loader: () => fetch('../airpod.json'),
        element: <PrivateRoute><PodDetails></PodDetails></PrivateRoute>
      },
      {
        path: '/store',
        element: <PrivateRoute><Store></Store></PrivateRoute>
      }
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
