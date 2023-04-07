// This is your test secret API key.
const stripe = require("stripe")(
  "pk_test_51MscLuL3trnqtSBBiqHgAGtumVXe4Edc1dqAi2rnlAQPlp5QWZTIkedFB8agBO8E18dfbP5RkSCehQWEl0yseki000PdAqBvgx"
);
const express = require("express");
const app = express();
app.use(express.static("public"));

const YOUR_DOMAIN = "https://f1-cuts.vercel.app/";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1MscOEL3trnqtSBBQ4u7ixIX",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log("Running on port 4242"));
