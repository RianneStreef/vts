import React from "react";
import { content } from "../content/languages";

import "../styles/Projects2.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import SebGourmet from "../images/icons/seb-gourmet-traiteur-logo.png";
import ClaireTurner from "../images/icons/claire-turner-design-logo.png";
import CoreMove from "../images/icons/core-move-logo.png";

const Projects2 = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div className="claire-turner project-card" onDragStart={handleDragStart}>
      <div className="project-description">
        <h2>Claire Turner Design</h2>
        <p>{languageToUse.claireTurnerDesignDescription}</p>
      </div>
    </div>,
    <div className="seb-gourmet project-card" onDragStart={handleDragStart}>
      <div className="project-description">
        <h2>Seb Gourmet Traiteur</h2>
        <p>{languageToUse.sebGourmetDescription}</p>
      </div>
    </div>,
    <div className="core-move project-card" onDragStart={handleDragStart}>
      <div className="project-description">
        <h2>Core Move</h2>
        <p>{languageToUse.coreMoveDescription}</p>
      </div>
    </div>,
  ];

  return (
    <>
      <div id="projects" className="projects">
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

export default Projects2;
