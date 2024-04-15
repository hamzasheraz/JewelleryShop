import React from "react";
import Beforeline from "./Beforeline";
import Menu from "./Menu";
import Footer from "./Layout/Footer/Footer";

function Confirmation() {
  return (
    <>
      <Beforeline />
      <Menu />

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
                <a href="shop.html" class="btn btn-main mt-20">
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Confirmation;
