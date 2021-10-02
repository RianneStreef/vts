import React from "react";
import { Link } from "gatsby";
import { content } from "../content/languages";

import "../styles/Contact.css";

const Contact = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div className="background-special-revers contact-total" id="contact">
      <div className="contact">
        <h2 className="h2">{languageToUse.contact}</h2>

        <h3>{languageToUse.contactUnderTitle}</h3>
        <div className="contact-total">
          <form
            className="contact-form"
            name="contact"
            method="post"
            data-netlify="true"
            action="/message.js"
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
      <div className="devis-container">
        <div className="devis">
          <h2>Devis</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            fringilla venenatis sem, non eleifend ex tincidunt a. Phasellus
            blandit, leo id finibus congue, orci felis elementum diam, ac
            venenatis mauris mi vitae mi. Mauris imperdiet leo a molestie
            tincidunt. Etiam sed massa in lacus egestas vehicula. Aliquam erat
            volutpat. Aliquam sollicitudin, eros ac laoreet posuere, dolor sem
            facilisis sapien, ac venenatis nibh nibh bibendum dolor. Vestibulum
            porttitor porta quam, consequat accumsan tellus ultricies vel. Donec
            efficitur orci id turpis interdum lacinia. Morbi neque mauris,
            tincidunt ultrices dui ac, dignissim venenatis libero. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Phasellus in aliquet
            nisl. Ut at neque ac nunc molestie egestas. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </p>
          <div className="button-container-projects">
            <Link to="/intake" className="button">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
