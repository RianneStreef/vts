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
      <div id="projects" className="projects">
        <div class="flip-card project-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Claire Turner</h2>
            </div>
            <div class="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
        <div className="claire-turner project-card">
          <div className="project-description">
            <h2>Claire Turner Design</h2>
            <p>{languageToUse.claireTurnerDesignDescription}</p>
          </div>
        </div>
        <div className="seb-gourmet project-card">
          <div className="project-description">
            <h2>Seb Gourmet Traiteur</h2>
            <p>{languageToUse.sebGourmetDescription}</p>
          </div>
        </div>
        <div className="core-move project-card">
          <div className="project-description">
            <h2>Core Move</h2>
            <p>{languageToUse.coreMoveDescription}</p>
          </div>
        </div>{" "}
        <div className="claire-turner project-card">
          <div className="project-description">
            <h2>Claire Turner Design</h2>
            <p>{languageToUse.claireTurnerDesignDescription}</p>
          </div>
        </div>
        <div className="seb-gourmet project-card">
          <div className="project-description">
            <h2>Seb Gourmet Traiteur</h2>
            <p>{languageToUse.sebGourmetDescription}</p>
          </div>
        </div>
        <div className="core-move project-card">
          <div className="project-description">
            <h2>Core Move</h2>
            <p>{languageToUse.coreMoveDescription}</p>
          </div>
        </div>{" "}
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
