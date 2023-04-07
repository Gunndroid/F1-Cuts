import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51MscLuL3trnqtSBBiqHgAGtumVXe4Edc1dqAi2rnlAQPlp5QWZTIkedFB8agBO8E18dfbP5RkSCehQWEl0yseki000PdAqBvgx"
);

const CheckoutButton = () => {
  const stripe = useStripe();

  const handleClick = async () => {
    console.log("Stripe object:", stripe);
    if (!stripe) {
      return;
    }

    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        // Replace with your own product and price IDs
        { price: "price_id", quantity: 1 },
      ],
      mode: "payment",
      successUrl: "https://your-website.com/success",
      cancelUrl: "https://your-website.com/cancel",
    });

    if (error) {
      console.error("Error opening Stripe Checkout:", error);
    }
  };

  return (
    <button onClick={handleClick} disabled={!stripe}>
      Buy Now
    </button>
  );
};

const StripeCheckout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutButton />
    </Elements>
  );
};

export default StripeCheckout;
