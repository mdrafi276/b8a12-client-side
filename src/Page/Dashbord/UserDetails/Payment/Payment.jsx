import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ChackOutForm from "./ChackOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_key);
const Payment = () => {
    return (
        <div  className="mt-11 bg-white">
            <h1>hello i am pement Page</h1>
            <div>
               <Elements stripe={stripePromise}>
                <ChackOutForm></ChackOutForm>
            </Elements>  
            </div>
           
        </div>
    );
};

export default Payment;