import React from "react";
import "../styles/Projects.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUtensils,
  faArrowRight,
  faChild,
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="work-container">
        <div className="work-item">
          <div className="project-title">
            <FontAwesomeIcon
              className="work-icon"
              icon={faUtensils}
              size="1x"
            />
            <h4 className="project-name">Seb Gourmet</h4>
          </div>
          <p className="product-description">
            Traiteur in the Belleville Valley
          </p>
          <a
            href="https://www.sebgourmet-traiteur.com"
            className="read-more"
            target="_blank"
            rel="noreferrer"
          >
            <h4>See more</h4>
            <FontAwesomeIcon
              className="work-icon"
              icon={faArrowRight}
              size="1x"
            />{" "}
          </a>
        </div>

        <div className="work-item">
          <div className="project-title">
            <FontAwesomeIcon className="work-icon" icon={faChild} size="1x" />{" "}
            <h4 className="project-name">Core Move</h4>
          </div>
          <p className="product-description">
            Physical Therapist to improve your core{" "}
          </p>

          <a
            href="https://www.coremove.nl"
            className="read-more"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Read more</h4>
            <FontAwesomeIcon
              className="work-icon"
              icon={faArrowRight}
              size="1x"
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
