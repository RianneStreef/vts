import addToMailchimp from "gatsby-plugin-mailchimp";
import React, { useState } from "react";

function MailChimp() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function errorHandling(data) {
    // your error handling
  }

  const handleSubmit = () => {
    addToMailchimp(email).then((data) => {
      if (data.result === "error") {
        errorHandling(data);
      } else {
        setSubmitted(true);
      }
    });
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
        <form>
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
              onChange={(e) => setEmail(e.target.value)}
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

export default MailChimp;
