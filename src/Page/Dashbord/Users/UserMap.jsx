import {   FaTrashAlt, FaUsers } from "react-icons/fa";
import { } from "react-icons/gr";
import useAdmin from "../../Login/UseAxios/UseAdmin";
// import User from "./User";

const UserMap = ({ dataUser, handleDelete, user, handleMakeAdmin }) => {
  const [isAdmin] = useAdmin()
  const role = isAdmin;
  role === true;
  const { name, image, _id, selectedRole } = dataUser;

  return (
    <div>
      <div className="bot w-full  before:w-full">
        <ul className="users">
          <div className="employee  flex  md:flex-row justify-between">
            <div className="flex gap-2 items-center ">
              <div className="w-[50px]">
                <img className="rounded-full bg-cover" src={image} alt="" />
              </div>
              <div>
                <li className="employee-name md:text-[17px] lg:text-xl text-[15px]">
                  {name}
                </li>
              </div>
            </div>
            <div className="flex items-center  flex-row  md:gap-5">
              {role ? (
                <>
                  {" "}
                  <button
                    onClick={() => handleDelete(_id)}
                    className="md:textarea-sm hover:scale-125 duration-300  text-[15px]"
                  >
                    <FaTrashAlt className="w-4" />
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <button
                    disabled
                    onClick={() => handleDelete(_id)}
                    className="md:textarea-sm   text-[15px]"
                  >
                    <FaTrashAlt className="w-4" />
                  </button>
                </>
              )}
              {selectedRole === "admin" ? (
                "admin "
              ) : (
                <button
                  onClick={() => handleMakeAdmin(_id)}
                  className="btn btn-lg bg-transparent border-none hover:bg-transparent "
                >
                  <FaUsers className=" text-2xl" />
                </button>
              )}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default UserMap;
