import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Navber from "../../Components/Navber/Navber";


const Dashboard = () => {
  return (
    <div>
      <div className="z-50  hidden md:block">
        <Navber></Navber>
      </div>
      <div className="max-w-7xl  mx-auto">
        <div className="">
          <Sidebar></Sidebar>
        </div>
        <div className="md:ml-64 lg:ml-52 2xl:ml-2 p-10">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
