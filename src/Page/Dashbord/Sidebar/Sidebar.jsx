// import { useState } from "react";
// Components

// import MenuItem from "./MenuItem";
// import ToggleBtn from "../../Button/ToggleBtn";
// Icons
import { GrFormViewHide, GrHeroku, GrHome, GrHomeRounded, GrList, GrLogin, GrLogout, GrUser, GrUserAdmin } from "react-icons/gr";
// import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
// import { BsGraphUp } from "react-icons/bs";

// import CreatorMenu from "../Menu/CreatorMenu";
// import MenuItem from "../MenuItem";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Components/Provider/AuthProvider";
import Swal from "sweetalert2";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [isActive, setActive] = useState(false);

  //   For guest/host menu item toggle button
  // const handleToggle = (event) => {
  //   setToggle(event.target.checked);
  // };



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

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="backdrop-blur-sm bg-white/5  flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer  p-4 font-bold"></div>
        </div>

        <Link
          onClick={handleToggle}
          className="mobile-menu-button  p-4 focus:outline-none "
        >
          <AiOutlineBars className="h-5 w-5" />
        </Link>
      </div>

      {/* Sidebar */}
      <div
        className={` md:fixed  bg-gradient-to-b from-[#075d4b] via-[#121B55] to-[#1E0A49]   flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div className=" mt-10">
          <hr />

          {/* <menuitem
            // icon={FcSettings}
            label="Profile"
            // address="/dashboard/profile"

          /> */}

          <buttone className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300   hover:text-black border border-white hover:border-none transition-colors duration-300 transform      ">
            <GrUserAdmin />

            <span className="mx-4 font-medium ">Admin</span>
          </buttone>
          <buttone className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300   hover:text-black border border-white hover:border-none transition-colors duration-300 transform      ">
            <GrHeroku className="w-5 h-5 " />

            <span className="mx-4 font-medium ">HR</span>
          </buttone>
          <Link to="users">
            <buttone className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300   hover:text-black border border-white hover:border-none transition-colors duration-300 transform      ">
              <GrUser className="w-5 h-5 " />

              <span className="mx-4 font-medium ">User</span>
            </buttone>
          </Link>
          <Link to="dashbordRiview">
            <buttone className="flex w-full items-center px-4 py-2 mt-5 text-white    hover:text-black border border-white hover:border-none transition-colors duration-300 transform      ">
              <GrFormViewHide className="w-5 h-5 " />

              <span className="mx-4 font-medium ">Add Riview</span>
            </buttone>
          </Link>
          <Link to="employeeLst">
            <buttone className="flex w-full items-center px-4 py-2 mt-5 text-white    hover:text-black  hover:border-none transition-colors duration-300 transform      ">
              <GrList className="w-5 h-5 " />{" "}
              <span className="mx-4 font-medium ">Employee list</span>
            </buttone>{" "}
          </Link>
        </div>

        <div>
          <hr />
          {/* <menuitem
            // icon={FcSettings}
            label="Profile"
            // address="/dashboard/profile"

          /> */}{" "}
          <Link to="/">
            <buttone className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300   hover:text-black  hover:border-none transition-colors duration-300 transform      ">
              <GrHome />

              <span className="mx-4 font-medium ">Home</span>
            </buttone>
          </Link>
          <Link to="/contactUs">
            <buttone className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300   hover:text-black hover:border-none transition-colors duration-300 transform      ">
              <GrHome />

              <span className="mx-4 font-medium ">Contact Us</span>
            </buttone>
          </Link>
          {user ? (
            <div>
              <buttone
                onClick={handleSignOut}
                className="  flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300   hover:text-black hover:border-none transition-colors duration-300 transform    "
              >
                <GrLogout className="w-5 h-5" />

                <span className="mx-4 font-medium">Logout</span>
              </buttone>
            </div>
          ) : (
            <Link to="/login">
              <buttone className=" flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300   hover:text-black hover:border-none transition-colors duration-300 transform    ">
                <GrLogin className="w-5 h-5" />

                <span className="mx-4 font-medium">Login</span>
              </buttone>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
