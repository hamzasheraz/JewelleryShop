import React from "react";
import "./css/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./plugins/animate/animate.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js/pure"
import { REACT_APP_STRIPE_KEY } from "./config";

const stripe_key = REACT_APP_STRIPE_KEY
const stripePromise = loadStripe(stripe_key)

function App() {
  return (
    <>
     <Elements stripe={stripePromise} >

      <RouterProvider router={router} />
     </Elements>
    </>
  );
}

export default App;
