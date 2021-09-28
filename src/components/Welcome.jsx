import React from "react";
import { Link } from "gatsby";
import "../styles/Welcome.css";
import LogoWelcomeFR from "../images/logo-vertical-white.png";
import LogoWelcomeEN from "../images/logo-tagline-white-EN.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import quoteIcon from "../images/icons/devis-icon.png";

const Welcome = (props) => {
  let { language } = props;

  console.log("language in welcome");
  console.log(language);

  return (
    <div className="welcome">
      {language === "french" ? (
        <img
          src={LogoWelcomeFR}
          alt="Logo VTS web design"
          className="welcome-logo"
        />
      ) : (
        <img
          src={LogoWelcomeEN}
          alt="Logo VTS web design"
          className="welcome-logo"
        />
      )}
      <div>
        <div className="contact-links">
          <a
            href="https://instagram.com/vtswebdesign"
            alt="Our Instagram account"
            target="blank"
          >
            <FontAwesomeIcon
              className="welcome-contact-icon"
              icon={faInstagram}
            />
          </a>
          <a href="mailto:contact@vts-webdesign.com" alt="Email us">
            <FontAwesomeIcon
              className="welcome-contact-icon"
              icon={faEnvelope}
            />{" "}
          </a>
          <Link to="/intake" className="intake-link tooltip">
            <img src={quoteIcon} alt="Get a quote" className="quote-icon" />{" "}
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
