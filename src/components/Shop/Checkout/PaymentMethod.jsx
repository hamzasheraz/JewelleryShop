// PaymentMethod.jsx
import React from "react";

const PaymentMethod = () => {
  return (
    <div className="block">
      <h4 className="widget-title">Payment Method</h4>
      <p>Credit Card Details (Secure payment)</p>
      <div className="checkout-product-details">
        <div className="payment">
          <div className="card-details">
            <form className="checkout-form">
              <div className="form-group">
                <label htmlFor="card-number">
                  Card Number <span className="required">*</span>
                </label>
                <input
                  id="card-number"
                  className="form-control"
                  type="tel"
                  placeholder="•••• •••• •••• ••••"
                />
              </div>
              <div className="form-group half-width padding-right">
                <label htmlFor="card-expiry">
                  Expiry (MM/YY) <span className="required">*</span>
                </label>
                <input
                  id="card-expiry"
                  className="form-control"
                  type="tel"
                  placeholder="MM / YY"
                />
              </div>
              <div className="form-group half-width padding-left">
                <label htmlFor="card-cvc">
                  Card Code <span className="required">*</span>
                </label>
                <input
                  id="card-cvc"
                  className="form-control"
                  type="tel"
                  maxLength="4"
                  placeholder="CVC"
                />
              </div>
              <a href="confirmation.html" className="btn btn-main mt-20">
                Place Order
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
