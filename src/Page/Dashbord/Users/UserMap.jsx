import { GrCut, GrList } from "react-icons/gr";

const UserMap = ({ dataUser, handleDelete }) => {
  const { name, image , _id} = dataUser;

  return (
    <div>
      <div className="bot w-full  before:w-full">
        <ul className="users">
          <div className="employee  flex flex-col md:flex-row justify-between">
            <div className="flex gap-2 items-center ">
              <div className="w-[50px]">
                <img className="rounded-full bg-cover" src={image} alt="" />
              </div>
              <div>
                <li className="employee-name md:text-[17px] lg:text-xl text-[15px]">
                  {name}
                </li>
                <li className="employee-occupation">Marketing Manager</li>
              </div>
            </div>
            <div className="flex  gap-20 flex-row  md:gap-5">
              <button
                onClick={() => handleDelete(_id)}
                className="md:textarea-sm hover:scale-125 duration-300  text-[15px]"
              >
                <GrCut className="w-4" />
              </button>
              <button className="md:textarea-sm text-[15px]">Admin</button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default UserMap;
