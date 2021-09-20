import React from "react";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us!</h2>
      <div className="contact-total">
        <div className="contact-left">
          <form
            className="contact-form"
            name="contact"
            method="post"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="form-items">
              <label htmlFor="name">Name:</label> <br />
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
            <p className="form-items">
              <label htmlFor="email">Email:</label> <br />
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                required
              />
            </p>
            <p className="form-items">
              <label htmlFor="message">Message:</label> <br />
              <textarea id="message" name="message" required></textarea>
            </p>
            <div className="button-container">
              <button
                className="custom_button"
                type="submit"
                value="Submit message"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="contact-right">
          <p>
            For any questions, remarks or requests, please do not hesitate to
            contact us. We will get back to you as soon as we can.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
