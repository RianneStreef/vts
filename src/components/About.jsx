import React from "react";
import "../styles/About.css";
import { content } from "../content/languages";

import Windows from "../images/icons/window-icon.png";
import Adobe from "../images/icons/ADOBE-icon.png";
import AI from "../images/icons/AI-icon.png";
import ID from "../images/icons/ID-icon.png";
import PR from "../images/icons/PR-icon.png";
import PS from "../images/icons/PS-icon.png";
import XD from "../images/icons/XD-icon.png";
import HTML from "../images/icons/HTML-5-icon.png";
import CSS from "../images/icons/CSS-icon.png";
import JS from "../images/icons/JS-icon.png";
import ReactIcon from "../images/icons/REACT-icon.png";
import Gatsby from "../images/icons/GATSBY-icon.png";
import Contentful from "../images/icons/contentful-icon.png";
import Git from "../images/icons/GIT-icon.png";
import Apple from "../images/icons/Apple-icon.png";

const About = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div id="about" className="content about">
      <div className="our-descriptions">
        <div className="padding">
          <h2>{languageToUse.design}</h2>
          <p className="centered-text">{languageToUse.xavier}</p>
          <div className="signature">
            <p>- Xavier</p>
          </div>
        </div>
        <div className="padding">
          <h2>{languageToUse.code}</h2>
          <p className="centered-text">{languageToUse.rianne}</p>
          <div className="signature">
            <p>- Rianne</p>
          </div>
        </div>
      </div>
      <div className="competence-icons">
        <img src={Windows} alt="Windows" className="competence-icon" />
        <img src={Adobe} alt="Adobe" className="competence-icon" />
        <img src={AI} alt="Illustrator" className="competence-icon" />
        <img src={ID} alt="In Design" className="competence-icon" />
        <img src={PR} alt="Premier Pro" className="competence-icon" />
        <img src={PS} alt="Photo Shop" className="competence-icon" />
        <img src={XD} alt="Experience design" className="competence-icon" />
        <img src={HTML} alt="HTML 5" className="competence-icon" />
        <img src={CSS} alt="CSS 3" className="competence-icon" />
        <img src={JS} alt="JavaScript" className="competence-icon" />
        <img src={ReactIcon} alt="React" className="competence-icon" />
        <img src={Gatsby} alt="Gatsby" className="competence-icon" />
        <img src={Contentful} alt="Contentful" className="competence-icon" />
        <img src={Git} alt="GitHub" className="competence-icon" />
        <img src={Apple} alt="iOS" className="competence-icon" />
      </div>
    </div>
  );
};

export default About;
