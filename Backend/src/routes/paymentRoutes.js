import express from "express";
import { createPaymentIntent } from "../controllers/paymentController";

const paymentRouter = express.Router();

// get payment intent
paymentRouter.post("/create-payment-intent", createPaymentIntent);


export default paymentRouter;
