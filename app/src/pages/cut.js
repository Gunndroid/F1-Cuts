import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import StripeCheckout from "../components/stripeCheckout";

const Cuts = () => {
  return (
    <div className="grid gap-6 text-black m-12 w-5/6 md:w-5/6 border-black border-2 py-12 my-28 bg-slate-100 rounded-2xl text-center mx-auto">
      <a
        href="https://buy.stripe.com/test_7sIbJfcVpdWjbrq000"
        target="_blank"
        className="border-2 border-black w-60 mx-auto rounded-lg p-5 bg-orange-800"
      >
        Bronze Package (3 Videos) for $250.00
      </a>
      <a
        href="https://buy.stripe.com/test_8wMbJfdZt4lJ532145"
        target="_blank"
        className="border-2 border-black w-60 mx-auto rounded-lg p-5 bg-gray-500"
      >
        Silver Package (5 Videos) for $400.00
      </a>
      <a
        href="https://buy.stripe.com/test_00g8x32gL8BZ676dQS"
        target="_blank"
        className="border-2 border-black w-60 mx-auto rounded-lg p-5 bg-yellow-500"
      >
        Gold Package (10 Videos) for $700.00
      </a>
    </div>
  );
};

export default Cuts;
