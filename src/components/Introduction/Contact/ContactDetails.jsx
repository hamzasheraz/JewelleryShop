import React from "react";
import Social from "../../Layout/Footer/Social";

const ContactDetails = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5480490037507!2d90.37958031445622!3d23.763490884582896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70fec6d17ad%3A0xa8e5c25e1042077f!2sKhaja%20Road%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1612339634658";
  return (
    <div className="contact-details col-md-6">
      <div className="google-map" style={{ height: "300px", width: "100%" }}>
        <iframe
          title="location-map"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <ul className="contact-short-info">
        <li>
          <i className="tf-ion-ios-home"></i>
          <span>Khaja Road, Bayzid, Chittagong, Bangladesh</span>
        </li>
        <li>
          <i className="tf-ion-android-phone-portrait"></i>
          <span>Phone: +880-31-000-000</span>
        </li>
        <li>
          <i className="tf-ion-android-globe"></i>
          <span>Fax: +880-31-000-000</span>
        </li>
        <li>
          <i className="tf-ion-android-mail"></i>
          <span>Email: hello@example.com</span>
        </li>
      </ul>
      <div className="social-icon">
        <Social />
      </div>
    </div>
  );
};

export default ContactDetails;
