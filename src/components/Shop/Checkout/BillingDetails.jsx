import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { postBillingDetails } from "../../../redux/slices/BillSlice/billSlice";

const BillingDetails = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(postBillingDetails({ email, address, zipCode, city, country }));
    // try {
    //   const response = await axios.post("http://127.0.0.1:8000/billing-details", {
    //     email:email,
    //     address:address,
    //     Zip_Code: zipCode,
    //     City: city,
    //     Country: country
    //   });
    //   console.log("Response:", response.data);
    //   if(response){
    //     alert("Details submitted sucessfully")
    //   }
    //   // Handle success or redirect to another page
    // } catch (error) {
    //   console.error("Error:", error);
    //   // Handle error
    // }
  };

  return (
    <div className="block billing-details">
      <h4 className="widget-title">Billing Details</h4>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_address">Address</label>
          <input
            type="text"
            className="form-control"
            id="user_address"
            placeholder=""
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_city">City</label>
            <input
              type="text"
              className="form-control"
              id="user_city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BillingDetails;
