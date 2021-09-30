import React from "react";
import { content } from "../content/languages";

import "../styles/Projects.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import workspace from "../images/background-projects.jpeg";

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

  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div class="flip-card" onDragStart={handleDragStart}>
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={SebGourmetBackground} className="website-img" />
        </div>
        <div class="flip-card-back">
          <h3>Seb Gourmet Traiteur</h3>
          <p>{languageToUse.SebGourmetDescription}</p>
        </div>
      </div>
    </div>,

    <div class="flip-card" onDragStart={handleDragStart}>
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={ClaireTurnerBackground} className="website-img" />
        </div>
        <div class="flip-card-back">
          <h3>Claire Turner Design</h3>
          <p>{languageToUse.ClaireTurnerDesignDescription}</p>
        </div>
      </div>
    </div>,

    <div class="flip-card" onDragStart={handleDragStart}>
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={CoreMoveBackground} className="website-img" />
        </div>
        <div class="flip-card-back">
          <h3>Core Move</h3>
          <p>{languageToUse.CoreMoveDescription}</p>
        </div>
      </div>
    </div>,
  ];

  return (
    <>
      <div id="projects" className="projects">
        <img
          src={workspace}
          alt="workspace"
          className="workspace hidden-desktop"
        />
        <div className="content">
          <AliceCarousel
            mouseTracking
            items={items}
            infinite={true}
            disableDotsControls={true}
          />
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
