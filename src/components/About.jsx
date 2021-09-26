import React from "react";
import "../styles/About.css";
import { content } from "../content/languages";

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
    </div>
  );
};

export default About;
