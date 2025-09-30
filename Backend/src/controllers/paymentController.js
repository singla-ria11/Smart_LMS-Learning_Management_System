import stripe from "stripe";

const Stripe = new stripe(process.env.STRIPE_SECRET_KEY)

export const createPaymentIntent = async (req, res) => {
  const { amount } = req.body;
  try {
    const args = {
      amount: amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    };

    // create payment intent
    const paymentIntent = await Stripe.paymentIntents.create(args);
    // get client secret from intent
    console.log(paymentIntent.client_secret);

    //return client secret to FE
    return res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return res.status(500).json({ message: "Server error!" });
  }
};
