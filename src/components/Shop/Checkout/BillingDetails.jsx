// BillingDetails.jsx
import React from "react";

const BillingDetails = () => {
  return (
    <div className="block billing-details">
      <h4 className="widget-title">Billing Details</h4>
      <form className="checkout-form">
        <div className="form-group">
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="full_name"
            placeholder=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_address">Address</label>
          <input
            type="text"
            className="form-control"
            id="user_address"
            placeholder=""
          />
        </div>
        <div className="checkout-country-code clearfix">
          <div className="form-group">
            <label htmlFor="user_post_code">Zip Code</label>
            <input
              type="text"
              className="form-control"
              id="user_post_code"
              name="zipcode"
              value=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_city">City</label>
            <input
              type="text"
              className="form-control"
              id="user_city"
              name="city"
              value=""
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="user_country">Country</label>
          <input
            type="text"
            className="form-control"
            id="user_country"
            placeholder=""
          />
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
