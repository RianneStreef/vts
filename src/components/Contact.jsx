import React from "react";
import { content } from "../content/languages";

import "../styles/Contact.css";

const Contact = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div className="contact-container">
      <div id="contact" className="contact content">
        <h2 className="h2">{languageToUse.contact}</h2>

        <h3>{languageToUse.contactUnderTitle}</h3>
        <div className="contact-total">
          <form
            className="contact-form"
            name="contact"
            method="post"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="form-items">
              <label htmlFor="name">{languageToUse.name}:</label> <br />
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
            <p className="form-items">
              <label htmlFor="email">{languageToUse.email}:</label> <br />
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                required
              />
            </p>
            <p className="form-items">
              <label htmlFor="message">{languageToUse.message}:</label> <br />
              <textarea
                id="message"
                name="message"
                rows="8"
                required
              ></textarea>
            </p>
            <div className="button-container">
              <button
                className="custom_button"
                type="submit"
                value="Submit message"
              >
                {languageToUse.send}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
