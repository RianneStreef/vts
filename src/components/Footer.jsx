import React, { useState } from "react";
import { content } from "../content/languages";

import InfoPack from "../components/InfoPack";

import logoVerticalWhite from "../images/logo-white-no-tag.png";

import mobile from "../images/mobile-white.png";
import envelope from "../images/envelope-white.png";
import insta from "../images/instagram-white.png";
import marker from "../images/map-marker-alt-solid-white.png";

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
          <div className="contact-icons">
            <a
              href="https://instagram.com/vtswebdesign"
              alt="Our Instagram account"
              target="blank"
            >
              <img src={insta} className="contact-icon" />
            </a>
            <a
              href="mailto:contact@vts-webdesign.com"
              alt="Email us"
              target="blank"
            >
              <img src={envelope} className="contact-icon" />
            </a>
            <a href="tel:0033682927855" alt="Call us" target="blank">
              <img src={mobile} className="contact-icon" />
            </a>
          </div>
        </div>
        <div>
          <InfoPack language={language} languageToUse={languageToUse} />
        </div>
        <div className="footer-right">
          <p className="location">
            <img src={marker} className="location-icon" />
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
