import React from "react";

const Cancel = () => {
  return (
    <section class="page-wrapper error-msg">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="block text-center">
              <i class="tf-ion-android-close-circle"></i>
              <h2 class="text-center">Payment Failed</h2>
              <p>
                Unfortunately, your payment could not be processed at this time.
                Please check your payment details and try again later.
              </p>
              <a href="/shop" class="btn btn-main mt-20">
                Return to Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cancel;
