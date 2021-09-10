import React from "react";
import Navbar from "./nav/Navbar";

import { content } from "../content/languages";
import logo from "../images/logo.png";

import "../styles/Header.css";

const Header = (props) => {
  let { language, setLanguage, languageToUse } = props;

  console.log(language);
  console.log(setLanguage);

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="header">
      <img src={logo} alt="VTS logo" className="header-logo" />
      <Navbar
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </div>
  );
};

export default Header;
