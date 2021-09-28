import React, { useState } from "react";
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

import logoVerticalWhite from "../images/logo-white-no-tag.png";

import "../styles/Footer.css";

const Footer = (props) => {
  let { language, setLanguage, languageToUse } = props;

  function handleSetLanguage(language) {
    console.log(language);
    setLanguage(language);
    setIsShown(false);
  }

  const Flag = styled.img`
    width: 30px;
  `;

  let [isShown, setIsShown] = useState(false);

  return (
    <div className="footer">
      <div className="footer-contact">
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
        <img
          src={logoVerticalWhite}
          alt="VTS Web Design"
          className="logo-footer"
        />
      </div>
      <div>
        <InfoPack language={language} languageToUse={languageToUse} />
      </div>
      <div className="footer-right">
        <p className="location">
          <FontAwesomeIcon className="location-icon" icon={faMapMarkerAlt} />{" "}
          Residence la Saponaire,
          <br /> Val Thorens, France
        </p>

        <div className="set-language-footer">
          {language === "french" ? (
            <p onClick={() => setIsShown(true)} className="language-option">
              <Flag
                className="language-icon-footer"
                src={flagFr}
                alt="Set language to French"
              />
              Français &or;
            </p>
          ) : (
            <p onClick={() => setIsShown(true)} className="language-option">
              <Flag
                className="language-icon-footer"
                src={flagEn}
                alt="Set language to English"
              />
              English &or;
            </p>
          )}

          {isShown && (
            <div className="select-language-menu">
              <p onClick={() => handleSetLanguage("french")}>
                <Flag
                  className="language-icon-footer"
                  src={flagFr}
                  alt="Set language to French"
                />
                Français
              </p>
              <p onClick={() => handleSetLanguage("english")}>
                <Flag
                  className="language-icon-footer"
                  src={flagEn}
                  alt="Set language to English"
                />
                English
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
