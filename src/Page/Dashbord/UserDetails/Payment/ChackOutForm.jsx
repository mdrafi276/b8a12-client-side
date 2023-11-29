import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const ChackOutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const handlePeyment = async (event) =>{
event.preventDefault()
if(stripe || !elements){
    return 
}
const card = elements.getElement(CardElement)
if(card == null){
    return
   
} 
const {error, paymentMethod} = await stripe.createPaymentMethod({
        type:"card",
        card 
    })
    if(error){
        console.log("pement er modde error khaise", error);

    }else{
        console.log("pemeent methord ", paymentMethod);
    }
    }
    return (
      <div>
        <form onSubmit={handlePeyment}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-sm btn-primary my-4"
            type="submit"
          
          >
            Pay
          </button>
        </form>
      </div>
    );
};

export default ChackOutForm;