import React, { useState } from "react";
import { content } from "../content/languages";

import InfoPack from "../components/InfoPack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMobileAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import logoVerticalWhite from "../images/logo-white-no-tag.png";

import "../styles/Footer.css";

const Footer = (props) => {
  let { language, setLanguage, languageToUse } = props;

  function handleSetLanguage(language) {
    console.log(language);
    setLanguage(language);
    setIsShown(false);
    localStorage.setItem("languageInStorage", language);
  }

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  let [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="background-placeholder" />
      <div className="footer">
        <div className="footer-contact">
          <img
            src={logoVerticalWhite}
            alt="VTS Web Design"
            className="logo-footer"
          />
          <h3>{languageToUse.footerContact}</h3>
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
                Français &or;
              </p>
            ) : (
              <p onClick={() => setIsShown(true)} className="language-option">
                English &or;
              </p>
            )}

            {isShown && (
              <div className="select-language-menu">
                <p onClick={() => handleSetLanguage("french")}>Français</p>
                <p onClick={() => handleSetLanguage("english")}>English</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
