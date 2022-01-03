import React, { useEffect, useState } from "react";
import Navbar from "./nav/Navbar";

import { content } from "../content/languages";
import logo from "../images/small-logo-white-no-tag.png";
import logoBlack from "../images/logo-no-tag.png";

import "../styles/Header.css";

const Header = (props) => {
  const opacity = 0.1;
  let header;

  let { language, setLanguage, languageToUse, darkMode, setDarkMode } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  let [pathname, setPathname] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPathname(window.location.pathname);

      if (typeof window !== "undefined") {
        header = document.getElementById("header");
        const y = 1 + (window.scrollY || window.pageYOffset);
        const o = (opacity + y) / 600;
        if (darkMode == false) {
          header.style.backgroundColor = `rgb(0, 0, 0, ${o} `;
        } else {
          header.style.backgroundColor = `rgb(255, 255, 255, ${o} `;
        }
      }
    });
  });

  //getting the styles from root of the css file
  var cardsColor = document.documentElement.style;
  var backgroundColor = document.documentElement.style;
  var specialColor = document.documentElement.style;
  var inverseColor = document.documentElement.style;
  var backgroundGradientColor = document.documentElement.style;
  //run this function when we change darkMode input
  function handleDarkMode() {
    let checkboxDarkMode = document.getElementById("darkMode");
    if (checkboxDarkMode === true) {
      checkboxDarkMode.checked = false;
    }
    if (checkboxDarkMode === false) {
      checkboxDarkMode.checked = true;
    }
    if (darkMode == true) {
      //changing the value of root property
      cardsColor.setProperty("--cards", "white");
      backgroundColor.setProperty("--background", "#000");
      specialColor.setProperty("--color-special", "#40c8e0");
      inverseColor.setProperty("--color-inverse", "#fff");
      backgroundGradientColor.setProperty(
        "--background-gradient",
        "rgba(69, 69, 69, 0.8)"
      );

      setDarkMode(false);
    } else {
      //changing the value of root property
      cardsColor.setProperty("--cards", "rgb(224, 201, 166)");
      backgroundColor.setProperty("--background", "#fff");
      specialColor.setProperty("--color-special", "#EF5097");
      inverseColor.setProperty("--color-inverse", "#000");
      backgroundGradientColor.setProperty(
        "--background-gradient",
        "rgba(224, 201, 166, 0.6)"
      );

      setDarkMode(true);

      console.log(darkMode);
    }
  }

  return (
    <div
      className={`header ${
        pathname == "/intake" || pathname === "/intake/" ? "show-header" : ""
      }`}
      id="header"
    >
      {darkMode ? (
        <img
          src={logoBlack}
          alt="VTS logo"
          className="header-logo hidden-mobile "
        />
      ) : (
        <img src={logo} alt="VTS logo" className="header-logo hidden-mobile " />
      )}
      <div>
        <div>
          <label class="switch">
            <input
              type="checkbox"
              onChange={handleDarkMode}
              id="darkMode"
              name="darkMode"
              value="true"
            />
            <span class="slider round" />
          </label>
        </div>
        <Navbar
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

export default Header;
