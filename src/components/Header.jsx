import React, { useEffect } from "react";
import Navbar from "./nav/Navbar";

import { content } from "../content/languages";
import logo from "../images/logo.png";

import "../styles/Header.css";

const Header = (props) => {
  const opacity = 0.1;
  let header;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (typeof window !== "undefined") {
        header = document.getElementById("header");
        const y = 1 + (window.scrollY || window.pageYOffset);
        const o = (opacity + y) / 800;
        header.style.backgroundColor = `rgb(225, 225, 225, ${o} `;
      }
    });
  });

  let { language, setLanguage, languageToUse } = props;

  console.log(language);
  console.log(setLanguage);

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="header" id="header">
      <img src={logo} alt="VTS logo" className="header-logo hidden-mobile" />
      <Navbar
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </div>
  );
};

export default Header;
