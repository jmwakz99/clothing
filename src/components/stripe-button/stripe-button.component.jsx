import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    "pk_test_51HBb71HCRhPD0c9lA2KCRt6z76HNB3cU8ttPBG2AbM8e6hj26gMcDXq9YquEymE9QphmWy0QBzcr66elfY1SchlX00EE9dNNYn";
  const onToken = (token) => {
  
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Mavazi"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is Ksh${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
