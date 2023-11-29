
import { GrList } from 'react-icons/gr';
import './EmployeeList.css'
import useAxios from '../../Login/UseAxios/axiosSecure';
import { useQuery } from '@tanstack/react-query';
import EmployeeMap from './EmployeeMap';
const EmployeeLst = () => {


  const axiossecure = useAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiossecure.get("/users");
      return res.data;
    }
    
  });
  

    return (
      <div className="z-10 md:w-full  absolute left-0 top-10   mt-0 md:relative w-[100vw] md:bg-transparent bg-balck">
        <div className="wrap w-full   ">
          <div className="circ-1 md:block hidden"></div>
          <div className="circ-2 md:block hidden"></div>
          <div className="carde md:min-h-full min-h-[100vh]">
            <div className="tops w-full flex items-center ">
              <GrList />
              <span className="u-l">Employee List</span>
            </div>
            <div className="bot w-full  before:w-full">
              <ul className="users">
                <div className="">
                  <div>
                    {users?.map((dataUser) => (
                      <EmployeeMap
                        dataUser={dataUser}
                      
                        key={dataUser._id}
                      ></EmployeeMap>
                    ))}
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default EmployeeLst;