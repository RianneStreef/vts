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
          className="subscribe-form"
          name="subscribe"
          method="post"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <p>Would you like to receive an information package?</p>
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="mail"
              label="email-input"
              placeholder="Your e-mail address"
              required
            />
          </div>
          <div>
            <button
              type="button"
              aria-label="Subscribe"
              onClick={() => handleSubmit()}
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
