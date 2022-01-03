import React from "react";
import { Link } from "gatsby";
import "../styles/Welcome.css";
import LogoWelcomeFR from "../images/logo-vertical-white.png";
import LogoWelcomeEN from "../images/logo-tagline-white-EN.png";

import LogoWelcomeFRBlack from "../images/logo-vertical.png";
import LogoWelcomeENBlack from "../images/logo_vts-webdesign-tagline-uk_1200x400px.png";

import quoteIcon from "../images/icons/devis-icon-blue.png";
import envelopeIcon from "../images/icons/contact-icon-blue.png";
import instagramIcon from "../images/icons/instagram-icon-blue.png";

import quoteIconLight from "../images/icons/devis-icon-pink.png";
import envelopeIconLight from "../images/icons/contact-icon-pink.png";
import instagramIconLight from "../images/icons/instagram-icon-pink.png";

const Welcome = (props) => {
  let { language, darkMode } = props;

  console.log("language in welcome");
  console.log(language);

  return (
    <div
      className={`welcome ${
        darkMode === false ? " welcome-dark" : "welcome-light"
      }`}
    >
      {!darkMode ? (
        <>
          {language === "french" ? (
            <img
              src={LogoWelcomeFR}
              alt="Logo VTS web design"
              className="welcome-logo w3-animate-bottom"
            />
          ) : (
            <img
              src={LogoWelcomeEN}
              alt="Logo VTS web design"
              className="welcome-logo w3-animate-bottom"
            />
          )}
        </>
      ) : (
        <>
          {language === "french" ? (
            <img
              src={LogoWelcomeFRBlack}
              alt="Logo VTS web design"
              className="welcome-logo w3-animate-bottom"
            />
          ) : (
            <img
              src={LogoWelcomeENBlack}
              alt="Logo VTS web design"
              className="welcome-logo w3-animate-bottom"
            />
          )}
        </>
      )}

      <div>
        <div className="contact-links">
          <a
            href="https://instagram.com/vtswebdesign"
            alt="Our Instagram account"
            target="blank"
          >
            {!darkMode ? (
              <img
                src={instagramIcon}
                alt="Check out our Instagram"
                className="welcome-contact-icon w3-animate-bottom"
              />
            ) : (
              <img
                src={instagramIconLight}
                alt="Check out our Instagram"
                className="welcome-contact-icon w3-animate-bottom"
              />
            )}
          </a>

          <a href="mailto:contact@vts-webdesign.com" alt="Email us">
            {!darkMode ? (
              <img
                src={envelopeIcon}
                alt="Send an email"
                className="welcome-contact-icon w3-animate-bottom"
              />
            ) : (
              <img
                src={envelopeIconLight}
                alt="Send an email"
                className="welcome-contact-icon w3-animate-bottom"
              />
            )}
          </a>
          <Link to="/intake" className="intake-link tooltip">
            {!darkMode ? (
              <img
                src={quoteIcon}
                alt="Get a quote"
                className="welcome-contact-icon w3-animate-bottom"
              />
            ) : (
              <img
                src={quoteIconLight}
                alt="Get a quote"
                className="welcome-contact-icon w3-animate-bottom"
              />
            )}

            {language === "french" ? (
              <span className="tooltiptext">Faire un devis</span>
            ) : (
              <span className="tooltiptext">Get a quote </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
