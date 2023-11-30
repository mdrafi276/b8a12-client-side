import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ChackOutForm from "./ChackOutForm";
import useAxios from "../../../Login/UseAxios/axiosSecure";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_key);
const Payment = () => {
  const axiosSecure = useAxios()
  const [pay, setPay] = useState({})
  const {id} = useParams()
  useEffect(()=>{
    axiosSecure.get(`/users/${id}`)
    .then(res => {
      setPay(res.data);
    })
  }, [id])
 
  console.log(id);
    return (
      <div className=" flex justify-center h-[100vh] items-center  bg-[#010313]">
        <div className="w-[400px]   mx-auto ">
          <Elements stripe={stripePromise}>
            <ChackOutForm pay={pay}></ChackOutForm>
          </Elements>
        </div>
      </div>
    );
};

export default Payment;