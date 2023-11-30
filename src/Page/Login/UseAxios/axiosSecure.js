// import axois from "axios"
//  const axiosSecure = axois.create({
//   baseURL: "https://companny-server.vercel.app",
//   withCredentials:true
// })
// export default axiosSecure;

// // get token
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Components/Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://companny-server.vercel.app",
});
const useAxios = () => {
  const { logOut } = useContext(AuthContext) || {};

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log('request stopped by interceptors', token)
      config.headers.authorization = token;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log("status error in the interceptor", status);
      // for 401 or 403 logout the user and move the user to the login
      if (status === 401 || status === 403) {
        await logOut();
        Navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxios;
