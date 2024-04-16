import React from "react";

const ContactForm = () => {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic here
  };

  return (
    <div className="contact-form col-md-6">
      <form
        id="contact-form"
        method="post"
        action=""
        role="form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            className="form-control"
            name="name"
            id="name"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Your Email"
            className="form-control"
            name="email"
            id="email"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Subject"
            className="form-control"
            name="subject"
            id="subject"
            required
          />
        </div>

        <div className="form-group">
          <textarea
            rows="6"
            placeholder="Message"
            className="form-control"
            name="message"
            id="message"
            required
          ></textarea>
        </div>

        <div id="mail-success" className="success">
          Thank you. The Mailman is on His Way :)
        </div>

        <div id="mail-fail" className="error">
          Sorry, don't know what happened. Try later :(
        </div>

        <div id="cf-submit">
          <input
            type="submit"
            id="contact-submit"
            className="btn btn-transparent"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
