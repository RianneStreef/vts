import React from "react";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact content">
      <h2>Contact</h2>
      <hr className="title-underline" />

      <h3>Let's Talk!</h3>
      <div className="contact-total">
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
            <textarea id="message" name="message" rows="8" required></textarea>
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
    </div>
  );
};

export default Contact;
