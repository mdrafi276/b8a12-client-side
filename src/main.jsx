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
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import UserDetails from './Page/Dashbord/UserDetails/UserDetails';
import UserHome from './Page/Dashbord/UserHome';
import Payment from './Page/Dashbord/UserDetails/Payment/Payment';

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
        element: (
          <PrivetRoute>
            {" "}
            <ContactUs></ContactUs>
          </PrivetRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            {" "}
            <Profile></Profile>
          </PrivetRoute>
        ),
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
            path: "dashboardUser",
            element: <UserHome></UserHome>,
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
      {
        path: "details/:id",
        element: (
          <PrivetRoute>
            <UserDetails></UserDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
