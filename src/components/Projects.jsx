import React from "react";
import { content } from "../content/languages";

import "../styles/Projects.css";

import SebGourmetBackground from "../images/backgroundSebGourmet.png";
import ClaireTurnerBackground from "../images/backgroundClaireTurner.png";
import CoreMoveBackground from "../images/backgroundCoreMove.png";

import SebGourmet from "../images/icons/seb-gourmet-traiteur-logo.png";
import ClaireTurner from "../images/icons/claire-turner-design-logo.png";
import CoreMove from "../images/icons/core-move-logo.png";

const Projects = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <>
      <h2>{languageToUse.projects}</h2>
      <h3>{languageToUse.projectsUnderTitle}</h3>
      <div id="projects" className="projects">
        <div class="flip-card project-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Claire Turner Design</h2>
              <p>{languageToUse.claireTurnerDesignDescription}</p>{" "}
            </div>
            <div class="flip-card-back claire-turner"></div>
          </div>
        </div>
        <div class="flip-card project-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Seb Gourmet Traiteur</h2>
              <p>{languageToUse.sebGourmetDescription}</p>
            </div>
            <div class="flip-card-back seb-gourmet"></div>
          </div>
        </div>
        <div class="flip-card project-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Core Move</h2>
              <p>{languageToUse.coreMoveDescription}</p>
            </div>
            <div class="flip-card-back core-move"></div>
          </div>
        </div>
        <div class="flip-card project-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Le Caribou</h2>
              <p>Coming Soon! </p>
            </div>
            <div class="flip-card-back"></div>
          </div>
        </div>
      </div>
      <div className="client-icons">
        <img
          src={SebGourmet}
          alt="Seb Gourmet Traiteur"
          className="client-icon"
        />
        <img
          src={ClaireTurner}
          alt="Claire Turner Design"
          className="client-icon"
        />
        <img src={CoreMove} alt="Core Move" className="client-icon" />
      </div>
    </>
  );
};

export default Projects;
