import React from "react";
import "../styles/Welcome.css";
import LogoWelcome from "../images/logo-vertical-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
  return (
    <div className="welcome">
      <img
        src={LogoWelcome}
        alt="Logo VTS web design"
        className="welcome-logo"
      />
      <div>
        <div className="social-links">
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
        </div>
      </div>
    </div>
  );
};

export default Welcome;
