import React from "react";

import { content } from "../content/languages";
import "./Footer.css";

const Footer = (props) => {
  let { language } = props;
  let languageToUse = content.english;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return <div className="footer">{languageToUse.footer}</div>;
};

export default Footer;
