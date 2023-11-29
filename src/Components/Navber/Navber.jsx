
import { useContext,  } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

import profile from "../../../src/assets/user.png";
import './Navber.css'
import Headroom from "react-headroom";
import { AuthContext } from "../Provider/AuthProvider";
import {  GrLogout } from "react-icons/gr";
import useAdmin from "../../Page/Login/UseAxios/UseAdmin";
const Navber = () => {
const [isAdmin] = useAdmin()

  const { user, logOut } = useContext(AuthContext);
  
  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Successfully SignOut From Your Account",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch();
  };

  const navLink = (
    <>
      <li>
        <NavLink
          className={({ isActive, isLoading }) =>
            isLoading
              ? "loading"
              : isActive
              ? "text-black bg-white hover:text-black "
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive, isLoading }) =>
            isLoading
              ? "loading"
              : isActive
              ? "text-black bg-white hover:text-yellow-300"
              : ""
          }
          to="/contactUs"
        >
          Contact us
        </NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink
            className={({ isActive, isLoading }) =>
              isLoading
                ? "loading"
                : isActive
                ? "text-black bg-white  hover:text-yellow-300"
                : ""
            }
            to="/dashboard/dashboardUser"
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink
            className={({ isActive, isLoading }) =>
              isLoading
                ? "loading"
                : isActive
                ? "text-black bg-white  hover:text-yellow-300"
                : ""
            }
            to="/dashboard/dashboardUser"
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <Headroom>
      <div className="backdrop-blur  sticky  z-50 top-0 ">
        <div id="header-nav" className="  text-white  bg-transparent  ">
          <div className="  md:-w-full lg:max-w-6xl mx-auto">
            <div className="navbar rounded-lg">
              <div className="navbar-start">
                <div className="dropdown">
                  <label tabIndex={0} className="btn  btn-ghost  lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm text-white  dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    {navLink}
                  </ul>
                </div>
                <h1
                  id="title-h1"
                  className=" flex items-center h-[30px]  "
                >
                
                  <img className="w-[120px]  h-[100px]"
                    src="https://i.ibb.co/b5t5qfV/download-1-removebg-preview.png"
                    alt=""
                  />
                </h1>
              </div>
              <div className="navbar-center hidden   lg:flex">
                <ul className="menu menu-horizontal  px-1">{navLink}</ul>
              </div>
              <div className="navbar-end ">
                <div className="dropdown  dropdown-end ">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      {/* {user && (
                        <p className="md:mr-5 md:block hidden text-[10px]  md:text-[12px] lg:text-[15px] font-bold">
                          {user.displayName}
                        </p>
                      )} */}
                      <label tabIndex={0} className=" ">
                        <img
                          className="rounded-full  cursor-pointer w-full bg-cover"
                          src={user?.photoURL ? user.photoURL : profile}
                          alt=""
                        />
                      </label>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2  shadow menu menu-sm dropdown-content  bg-transparent  rounded-box "
                  >
                    {/* customcode  */}
                    <div className="card">
                      <div className="boxshadow"></div>
                      <div className="main">
                        <div className="top"></div>
                        <div className="left side"></div>
                        <div className="right side"></div>
                        <div className="title  w-[50px]">
                          <label tabIndex={0} className=" ">
                            <img
                              className="rounded-full w-full bg
                              -cover"
                              src={user?.photoURL ? user.photoURL : profile}
                              alt=""
                            />
                          </label>
                          <Link to="/Profile">
                            <button className="text-black pl-1 text-sm hover:underline mb-1 mt-1">
                              {" "}
                              Prifile
                            </button>
                          </Link>
                        </div>

                        <div className="button-container">
                          <button className="button"></button>
                          <buttone className="button hover:text-black">
                            {user ? (
                              <div>
                                <button
                                  onClick={handleSignOut}
                                  className="  backdrop-blur ml-3 hover:underline hover:text-blackk  bg-transparent  text-white "
                                >
                                  <GrLogout />
                                </button>
                              </div>
                            ) : (
                              <Link to="/login">
                                <buttone className=" justify-between  hover:text-black hover:underline  backdrop-blur  bg-transparent  text-white">
                                  Login
                                </buttone>
                              </Link>
                            )}
                          </buttone>
                          <Link to="/register">
                            <buttone className="button  text-white">
                              Register
                            </buttone>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* customcode */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Headroom>
  );
};

export default Navber;