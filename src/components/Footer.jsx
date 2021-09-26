import React from "react";
import styled from "styled-components";

import InfoPack from "../components/InfoPack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMobileAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

import "../styles/Footer.css";

const Footer = (props) => {
  let { language, setLanguage, languageToUse } = props;

  function handleSetLanguage(language) {
    console.log(language);
    setLanguage(language);
  }

  const Flag = styled.img`
    width: 30px;
  `;

  return (
    <div className="footer">
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
        <InfoPack language={language} languageToUse={languageToUse} />
      </div>
      <div>
        <p className="location">
          <FontAwesomeIcon className="location-icon" icon={faMapMarkerAlt} />
          Val Thorens, France{" "}
          <span className="set-language-footer">
            {language === "english" ? (
              <Flag
                className="language-icon"
                src={flagFr}
                onClick={() => handleSetLanguage("french")}
                alt="Set language to French"
              />
            ) : (
              <Flag
                className="language-icon"
                src={flagEn}
                onClick={() => handleSetLanguage("english")}
                alt="Set language to English"
              />
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
