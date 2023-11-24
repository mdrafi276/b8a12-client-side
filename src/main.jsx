import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LeyOut from './LeyOut/LeyOut';
import Home from './Page/Home/Home';
import { AuthProvider } from './Components/Provider/AuthProvider';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LeyOut></LeyOut>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
