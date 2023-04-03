// import CheckoutForm from "../stripe";
import React from "react";
import getStripe from "../../lib/getStripe";

function Cuts() {
  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: "subscription",
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
      customerEmail: "customer@email.com",
    });
    console.warn(error.message);
  }

  return (
    <div className=" ">
      <p className="font-faster text-white text-5xl md:text-7xl font-bold text-center  mt-28">
        Make a Cut
      </p>
      <button
        className="border-2 rounded-md text-white text-lg"
        onClick={handleCheckout}
      >
        Bronze
      </button>
    </div>
  );
}

export default Cuts;
