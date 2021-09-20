import React, { useState } from "react";

function InfoPack() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      {submitted ? (
        <form>
          <div>
            <p>Thank your for your interest.</p>
          </div>
        </form>
      ) : (
        <form
          className="info-form"
          name="info"
          method="post"
          data-netlify="true"
        >
          <div>
            <p>Would you like to receive an information package?</p>
          </div>
          <input type="hidden" name="form-name" value="contact" />

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
      )}
    </>
  );
}

export default InfoPack;
