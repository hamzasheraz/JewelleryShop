import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletAllCartItem } from "../../../redux/slices/CartSlice/cartSlice";

function Confirmation() {
  const dispatch = useDispatch();
  const authToken = JSON.parse(localStorage.getItem("authtokens"));
  useEffect(() => {
    dispatch(deletAllCartItem());
  }, []);
  return (
    <>
      <section class="page-wrapper success-msg">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3">
              <div class="block text-center">
                <i class="tf-ion-android-checkmark-circle"></i>
                <h2 class="text-center">Thank you! For your payment</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Inventore, sed.
                </p>
                <Link to="/shop" class="btn btn-main mt-20">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Confirmation;
