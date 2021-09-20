import React from "react";

import InfoPack from "../components/InfoPack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMobileAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <InfoPack />
      </div>
      <div>
        <a
          href="https://instagram.com/vtswebdesign"
          alt="Our Instagram account"
          target="blank"
        >
          <FontAwesomeIcon className="contact-icon" icon={faInstagram} />
        </a>
        <a
          href="mailto:contact@vts-webdesign.com"
          alt="Email us"
          target="blank"
        >
          <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
        </a>
        <a href="tel:0033682927855" alt="Call us" target="blank">
          <FontAwesomeIcon className="contact-icon" icon={faMobileAlt} />
        </a>
      </div>

      <div>
        <p>
          <FontAwesomeIcon className="location-icon" icon={faMapMarkerAlt} />
          Val Thorens, France
        </p>
      </div>
    </div>
  );
};

export default Footer;
