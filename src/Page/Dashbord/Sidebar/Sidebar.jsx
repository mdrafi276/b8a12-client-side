// import { useState } from "react";
// Components

// import MenuItem from "./MenuItem";
// import ToggleBtn from "../../Button/ToggleBtn";
// Icons
import { GrHome, GrLogout, GrUser } from "react-icons/gr";
// import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
// import { BsGraphUp } from "react-icons/bs";

// import CreatorMenu from "../Menu/CreatorMenu";
// import MenuItem from "../MenuItem";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [isActive, setActive] = useState(true);

  //   For guest/host menu item toggle button
//   const handleToggle = (event) => {
//     setToggle(event.target.checked);
//   };
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

          <buttone className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300   hover:text-black border-2 hover:border-none transition-colors duration-300 transform      ">
            <GrHome />

            <span className="mx-4 font-medium ">Home</span>
          </buttone>
          <buttone className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300   hover:text-black border-2 hover:border-none transition-colors duration-300 transform      ">
            <GrUser />

            <span className="mx-4 font-medium ">User</span>
          </buttone>
          <Link to="employeeLst">
            <buttone className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300   hover:text-black border-2 hover:border-none transition-colors duration-300 transform      ">
              <GrLogout className="w-5 h-5 " />{" "}
              <span className="mx-4 font-medium ">Employee list</span>
            </buttone>{" "}
          </Link>
          <buttone className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300   hover:text-black border-2 hover:border-none transition-colors duration-300 transform      ">
            <GrLogout className="w-5 h-5 " />

            <span className="mx-4 font-medium ">Logout</span>
          </buttone>
        </div>

        <div>
          <hr />

          {/* <menuitem
            // icon={FcSettings}
            label="Profile"
            // address="/dashboard/profile"

          /> */}

          <buttone className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform">
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </buttone>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
