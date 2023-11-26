import { useContext } from "react";
import Navber from "../../Components/Navber/Navber";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import profile from '../../../src/assets/user.png'
import { GrEdit } from "react-icons/gr";
const Profile = () => {
    const {user} = useContext(AuthContext);

    return (
      <div>
        <Navber></Navber>
        <div className="flex selection:text-black selection:bg-white justify-center gap-14 mt-10 flex-col lg:flex-row   bg-[#010313]">
          <div className=" w-full lg:w-[300px] min-h-[80vh] bg-[#0F0D21]">
            <div className="group before:hover:scale-95 before:hover:h-72  before:w-full lg:before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-['']  before:h-[14rem] before:rounded-t-2xl before:bg-gradient-to-bl from-[#030F1C] via-[#2A7A82] to-[#0B5653] before:absolute before:top-0 w-full lg:w-[19rem] h-[33rem] relative bg-[#0F0D21] flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
              <div className="w-28 h-28  mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
                <div className="  w-full rounded-full">
                  <label tabIndex={0} className=" ">
                    <img
                      className="rounded-full w-full bg-cover"
                      src={user?.photoURL ? user.photoURL : profile}
                      alt=""
                    />
                  </label>
                </div>
              </div>
              <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
                <span className="text-2xl text-white font-semibold">
                  {user && (
                    <p className="md:mr-5 md:block hidden  font-bold">
                      {user.displayName}
                    </p>
                  )}
                </span>
                <p>Support Specialist</p>
              </div>
              <a
                className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
                href="#"
              >
                Folow
              </a>
            </div>
          </div>
          <div className=" rounded-md w-full lg:w-[750px] bg-[#0F0D21]">
            <div className="flex p-6 justify-between">
              <div>
                <h1 className="text-white ">My Profile </h1>
              </div>
              <div>
                <button className="  hover:scale-150 duration-200 bg-transparent text-white">
                  <GrEdit/>
                </button>
              </div>
            </div>
            <div className="flex gap-20 mt-8 flex-col lg:flex-row items-center  lg:ml-14">
              <div className=" w-[100px] md:w-[180px]">
                <div className="  w-full rounded-full">
                  <label tabIndex={0} className=" ">
                    <img
                      className="rounded-full w-full bg-cover"
                      src={user?.photoURL ? user.photoURL : profile}
                      alt=""
                    />
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white  text-sm">Full Name</h1>
                <span className="text-2xl text-white font-semibold">
                  {user && (
                    <p className="md:mr-5 md:block hidden  font-bold">
                      {user.displayName}
                    </p>
                  )}
                </span>{" "}
                <h1 className="text-white text-sm mt-2 ">Your email</h1>
                <span className="text-2xl text-white font-semibold">
                  {user && (
                    <p className="md:mr-5 md:block hidden  font-bold">
                      {user.email}
                    </p>
                  )}
                </span>{" "}
                <h1 className="text-white text-sm mt-2 ">Login time </h1>
                <span className="text-2xl text-white font-semibold">
                  {user && (
                    <p className="md:mr-5 md:block hidden text-xl  font-bold">
                      {user.metadata.creationTime}
                    </p>
                  )}
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;