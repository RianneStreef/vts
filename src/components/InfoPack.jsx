import React from "react";
import "../styles/InfoPack.css";

function InfoPack() {
  return (
    <>
      <form className="info-form" name="info" method="post" data-netlify="true">
        <div>
          <p>Receive a commitment free information package</p>
        </div>
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
            Request
          </button>
        </div>
      </form>
    </>
  );
}

export default InfoPack;
