import React, { useState, useEffect } from "react";
// import "./App.css";

const ProductDisplay = () => (
  <section className="w-fit mx-auto m-10">
    <div className="border-2 border-white">
      <div className="text-white text-center">
        <h3>Bronze</h3>
        <h5>$150.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button className="bg-white p-5" type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}
