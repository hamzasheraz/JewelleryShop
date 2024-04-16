import React from "react";
import Header from "../../Layout/Page-Header/Header";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      <Header title="Contact Us" page="contact" />
      <section className="page-wrapper">
        <div className="contact-section">
          <div className="container">
            <div className="row">
              {/* <!-- Contact Form --> */}
              <ContactForm />

              {/* <!-- Contact Details --> */}
              <ContactDetails />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
