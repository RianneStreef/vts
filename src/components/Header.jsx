import React, { useEffect, useState } from "react";
import Navbar from "./nav/Navbar";

import { content } from "../content/languages";
import logo from "../images/small-logo-white-no-tag.png";

import "../styles/Header.css";

const Header = (props) => {
  const opacity = 0.1;
  let header;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (typeof window !== "undefined") {
        header = document.getElementById("header");
        const y = 1 + (window.scrollY || window.pageYOffset);
        const o = (opacity + y) / 600;
        header.style.backgroundColor = `rgb(0, 0, 0, ${o} `;
      }
    });
  });

  let { language, setLanguage, languageToUse } = props;

  console.log(pathname);

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  let [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
    console.log(pathname);
  });

  return (
    <div
      className={`header ${
        pathname == "/intake" || pathname === "/intake/" ? "show-header" : ""
      }`}
      id="header"
    >
      <img src={logo} alt="VTS logo" className="header-logo hidden-mobile " />
      <Navbar
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </div>
  );
};

export default Header;
