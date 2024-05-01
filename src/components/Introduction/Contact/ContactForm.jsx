import React from "react";
import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [subject,setsubject]=useState("")
  const [message,setmessage]=useState("")

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/contactsubmit', {
       name:name,
       email:email,
       subject:subject,
       message:message
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
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
            value={name}
            onChange={(e)=>{setname(e.target.value)}}
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
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
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
            value={subject}
            onChange={(e)=>{setsubject(e.target.value)}}
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
            value={message}
            onChange={(e)=>{setmessage(e.target.value)}}
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
