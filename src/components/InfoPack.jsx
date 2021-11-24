import React from "react";
import { content } from "../content/languages";

import "../styles/InfoPack.css";

function InfoPack(props) {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <>
      <form
        className="info-form"
        name="info"
        method="post"
        data-netlify="true"
        action="/message"
        netlify-honeypot="bot-field"
      >
        <div>
          <p className="centered-text">{languageToUse.infoPack}</p>
        </div>
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="contact" />

        <p className="form-items">
          <input
            className="info-pack-input"
            type="email"
            id="email"
            name="email"
            placeholder="Your email address.."
            required
          />
        </p>

        <div className="button-container">
          <button
            className="custom_button"
            type="submit"
            value="Submit message"
          >
            {languageToUse.request}
          </button>
        </div>
      </form>
    </>
  );
}

export default InfoPack;
