import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LeyOut from './LeyOut/LeyOut';
import Home from './Page/Home/Home';
import { AuthProvider } from './Components/Provider/AuthProvider';
import Login from './Page/Login/Login';
import Profile from './Page/Profile/Profile';
import ContactUs from './Page/ContactUs/ContactUs';
import Error from './Erroe/Error';
import Dashboard from './Page/Dashbord/Dashbord';
import RegisterTwo from './Page/Register/RegisterTwo';
import EmployeeLst from './Page/Dashbord/EmployeeLst/EmployeeLst';
import PrivetRoute from './Components/Provider/PrivetRoute';
import User from './Page/Dashbord/Users/User';
import DashbordRiview from './Page/Dashbord/DashbordRiview/DashbordRiview';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LeyOut></LeyOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <RegisterTwo></RegisterTwo>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivetRoute>
            <Dashboard></Dashboard>,
          </PrivetRoute>
        ),
        children: [
          {
            path: "employeeLst",
            element: <EmployeeLst></EmployeeLst>,
          },
          {
            path: "users",
            element: (
              <PrivetRoute>
                <User></User>
              </PrivetRoute>
            ),
          },
          {
            path: "dashbordRiview",
            element: (
              <PrivetRoute>
               <DashbordRiview></DashbordRiview>
              </PrivetRoute>
            ),
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
