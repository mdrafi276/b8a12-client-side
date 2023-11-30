import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {  useContext, useEffect, useState } from 'react';
import useAxios from '../../../Login/UseAxios/axiosSecure';
import { AuthContext } from '../../../../Components/Provider/AuthProvider';
import Swal from 'sweetalert2';

const ChackOutForm = ({pay}) => {

  const {user} = useContext(AuthContext)
  const payData = pay.salary;

 const [clientSecret, setClientSecret] = useState('')
const [transationId, setTransationId] = useState('')
 
  useEffect(()=>{
   if(pay.salary){
     axiosSecure
       .post("/create-payment-intent", { price: payData })
       .then((res) => {
         setClientSecret(res.data.clientSecret);
       });
   }

  },[pay.salary])

  const [error, setError] = useState("")
    const stripe = useStripe()
    const elements = useElements()
const axiosSecure = useAxios();

    const handlePeyment = async (event) =>{
event.preventDefault()
  if (!stripe || !elements) {
   
    return;
  }

  
  const card = elements.getElement(CardElement);

  if (card == null) {
    return;
  }

  // Use your card Element with other Stripe.js APIs
  const { error, paymentMethod } = await stripe.createPaymentMethod({
    type: "card",
    card,
  });

  if (error) {
    console.log("[error]", error);
    setError(error.message)
   
  } else {
    console.log("[PaymentMethod]", paymentMethod);
    setError('')
     
    //  navigate("/");
  }
// confarm payment 

const {paymentIntent, error:confirmError } = await stripe.confirmCardPayment(clientSecret, {
  payment_method:{
    card:card,
    billing_details:{
        email:user?.email || 'anonymous' ,
        name:user?.name || 'anonymous',

    }
  }
})
if(confirmError){
  console.log("confirm error ");
   Swal.fire({
     icon: "error",
     title: "oppss",
     text: "something wrong",
   });
}
else{ Swal.fire({
  icon: "success",
  title: "Success",
  text: "payment Success",
  
});
  console.log('payment inatent', paymentIntent);
  if(paymentIntent.status === 'succeeded'){
    console.log("transation id ", paymentIntent.id);
    setTransationId(paymentIntent.id);
  const  payment = {
      email:user.email,
      price:payData,
      Date: new Date(),
      

    }

    
  }
}

    }
    return (
      <div className=" rounded-[27px]  border-2 hover:border-none cards__inner bottom-0">
        <form
          className="  rounded-xl cards__card car    text-white"
          onSubmit={handlePeyment}
        >
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",

                  color: "black",
                  "hover::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <div className="flex justify-center">
            <button
              disabled={!stripe || !clientSecret}
              type="submit"
              className="btn  mx-auto w-full text-black hover:text-white  btn-three  bg-white backdrop-blur-sm my-4"
            >
              Pay
            </button>
          </div>{" "}
          <p className="text-red-700 text-center">{error}</p>
          {transationId && <p className=' text-green-600'>Your Transacrion id :{transationId}</p>}
        </form>
      </div>
    );
};

export default ChackOutForm;