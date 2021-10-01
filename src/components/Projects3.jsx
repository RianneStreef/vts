import React from "react";
import "../styles/Projects3.css";
import { content } from "../content/languages";

import SebGourmet from "../images/icons/seb-gourmet-traiteur-logo.png";
import ClaireTurner from "../images/icons/claire-turner-design-logo.png";
import CoreMove from "../images/icons/core-move-logo.png";

const Projects3 = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  console.log(languageToUse);
  console.log(languageToUse.sebGourmetDescription);

  return (
    <div className="projects row content">
      <div className="column c1">
        <div className="project-card-placeholder" />
        <div className="project-card">
          <div className="project-card-title">
            <img
              src={SebGourmet}
              alt="Seb Gourmet Traitreur logo"
              className="client-logo"
            />
            <h2>Seb Gourmet Traiteur</h2>
          </div>
          <p>{languageToUse.SebGourmetDescription}</p>
        </div>
        <div className="project-card bottom-card">
          <div className="project-card-title">
            <h2>Chalet le Caribou</h2>
          </div>
          <p>{languageToUse.CoreMoveDescription}</p>
        </div>
      </div>
      <div className="column c2">
        <div className="project-card">
          <div className="project-card-title">
            <img
              src={ClaireTurner}
              alt="Claire Turner logo"
              className="client-logo"
            />
            <h2>Claire Turner</h2>
          </div>
          <p>{languageToUse.ClaireTurnerDesignDescription}</p>
        </div>
        <div className="project-card bottom-card">
          <div className="project-card-title">
            <img src={CoreMove} alt="Core Move logo" className="client-logo" />
            <h2>Core Move</h2>
          </div>
          <p>{languageToUse.CoreMoveDescription}</p>
          <div className="button-container">
            <a href="https://www.coremove.nl"> Learn more</a>
          </div>
        </div>
        <div className="project-card-placeholder" />
      </div>
    </div>
  );
};

export default Projects3;
