
import './UserDetails.css'



import { useEffect } from "react";
import { useState } from "react";
import useAxios from "../../Login/UseAxios/axiosSecure";
import { useParams } from "react-router-dom";
import Navber from '../../../Components/Navber/Navber';


const UserDetails = () => {
  const axiosSecure = useAxios()
  const {id} = useParams()
  
  const [deData, setDeData] = useState([])
  console.log(deData);
  useEffect(()=>{
    axiosSecure.get(`/users/${id}`)
    .then(res =>{
      setDeData(res.data);
    })
  },[])
    return (
      <div>
        <Navber></Navber>
        <div className="">
          <div className="cards__inner mt-10 w-full md:w-[60%] mx-auto ">
            <div className="cards__card car hover:backdrop-blur-0 backdrop-blur  border-2 border-green-400 h-[100vh] ">
              <div className="lg:w-[180px]  md:w-[100px] w-[60px] rounded-full border-2 mx-auto">
                <img
                  className="w-full  rounded-full bg-cover"
                  src={deData.image}
                  alt=""
                />
              </div>
              <h1 className="lg:text-3xl md:text-2xl text-2xl text-center font-semibold">
                {deData.name}
              </h1>
              <div className="flex flex-col  mx-auto  justify-center">
                <li className="  text-start lg:text-2xl md:text-xl text-xl ">
                  {deData.email}
                </li>
                <li className=" lg:text-2xl  text-start md:text-xl text-xl ">
                  {deData.bankAccount}
                </li>
                <li className=" lg:text-2xl text-start md:text-xl text-xl ">
                  {deData.salary} $
                </li>
                <li className=" lg:text-[18px]  md:text-[14px] md:text-start text-center text-[12px] ">
                  {deData.designation}
                </li>
              </div>
            </div>
            <div className="overlay cards__inner"></div>
          </div>
        </div>
      </div>
    );
};

export default UserDetails;