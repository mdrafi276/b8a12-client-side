import { FaPaypal, FaTrashAlt, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmployeeMap = ({dataUser}) => {
   const { name, image, _id,  } = dataUser;

   return (
     <div>
       <div className="bot w-full  before:w-full">
         <ul className="users">
           <div className="employee  flex  md:flex-row justify-between">
             <div className="flex gap-2 items-center ">
               <div className="w-[50px] ">
                 <img className="rounded-full  bg-cover" src={image} alt="" />
               </div>
               <div>
                 <li className="employee-name md:text-[17px] lg:text-xl text-[15px]">
                   {name}
                 </li>
                 {/* <li className="employee-occupation">Marketing Manager</li> */}
               </div>
             </div>
             <div className="flex  flex-row items-center  md:gap-5">
               <Link to="/payment">
                 {" "}
                 <button className="md:textarea-sm hover:scale-125 duration-300  text-[15px]">
                   Pay
                 </button>
               </Link>
               <Link to={`/details/${_id}`}>
                 <button className="md:textarea-sm hover:scale-125 duration-300  text-[15px]">
                   Details
                 </button>
               </Link>
             </div>
           </div>
         </ul>
       </div>
     </div>
   );
};

export default EmployeeMap;