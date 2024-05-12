import React, { useEffect } from "react";
import "./css/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./plugins/animate/animate.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";
import { REACT_APP_STRIPE_KEY } from "./config";
import { useDispatch } from "react-redux";
import {
  fetchCartItems,
  fetchCartNoItems,
} from "./redux/slices/CartSlice/cartSlice";
import { fetchUserDetails } from "./redux/slices/UserSlice/userSlice";
import { fetchProductDetails } from "./redux/slices/ProductSlice/productSlice";

const stripe_key = REACT_APP_STRIPE_KEY;
const stripePromise = loadStripe(stripe_key);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetails());
    dispatch(fetchProductDetails());
    dispatch(fetchCartItems());
    dispatch(fetchCartNoItems());
  }, []);
  return (
    <>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
    </>
  );
}

export default App;
