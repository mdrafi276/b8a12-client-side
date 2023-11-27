import { GrEdit } from "react-icons/gr";

const User = () => {
    return (
      <div>
        <div className="z-10 md:w-full  absolute left-0 top-10   mt-0 md:relative w-[100vw] md:bg-transparent bg-balck">
          <div className="wrap w-full   ">
            <div className="circ-1 md:block hidden"></div>
            <div className="circ-2 md:block hidden"></div>
            <div className="carde">
              <div className="tops w-full ">
                <li className="u-l">User list:</li>
              </div>
              <div className="bot w-full  before:w-full">
                <ul className="users">
                  <div className="employee  flex flex-col md:flex-row justify-between">
                    <div>
                      <li className="employee-name md:text-[17px] lg:text-xl text-[15px]">
                        Olivia Anderson
                      </li>
                      <li className="employee-occupation">Marketing Manager</li>
                    </div>
                    <div className="flex flex-col md:flex-row  lg:gap-5">
                      <button className="md:textarea-sm text-[15px]">
                        <GrEdit/>
                      </button>
                      <button className="md:textarea-sm text-[15px]">
                       
                      </button>
                      <button className="md:textarea-sm text-[15px]">
                        button
                      </button>
                    </div>
                  </div>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default User;