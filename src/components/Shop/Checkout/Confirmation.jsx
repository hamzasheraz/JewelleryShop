import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Confirmation() {
  const authToken = JSON.parse(localStorage.getItem('authtokens'));
  useEffect(()=>{
    deleteallcart();
  },[])

  let deleteallcart = async (id1) => {
    console.log('Bearer ' + String(authToken.access), "Sending this");
    let response = await fetch('http://127.0.0.1:8000/deleteallcart', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authToken.access)
      }
    });
  }
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
