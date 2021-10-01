import React from "react";
import { Link } from "gatsby";
import "../styles/Welcome.css";
import LogoWelcomeFR from "../images/logo-vertical-white.png";
import LogoWelcomeEN from "../images/logo-tagline-white-EN.png";

import quoteIcon from "../images/icons/devis-icon.png";
import envelopeIcon from "../images/icons/contact-icon.png";
import instagramIcon from "../images/icons/instagram-icon.png";

const Welcome = (props) => {
  let { language } = props;

  console.log("language in welcome");
  console.log(language);

  return (
    <div className="welcome ">
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
      <div>
        <div className="contact-links">
          <a
            href="https://instagram.com/vtswebdesign"
            alt="Our Instagram account"
            target="blank"
          >
            <img
              src={instagramIcon}
              alt="Check out our Instagram"
              className="welcome-contact-icon w3-animate-bottom"
            />{" "}
          </a>
          <a href="mailto:contact@vts-webdesign.com" alt="Email us">
            <img
              src={envelopeIcon}
              alt="Send an email"
              className="welcome-contact-icon w3-animate-bottom"
            />{" "}
          </a>
          <Link to="/intake" className="intake-link tooltip">
            <img
              src={quoteIcon}
              alt="Get a quote"
              className="welcome-contact-icon w3-animate-bottom"
            />{" "}
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
