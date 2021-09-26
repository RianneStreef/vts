import React from "react";
import { content } from "../content/languages";

import "../styles/Projects.css";

const Projects = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div id="projects" className="projects">
      <div className="content">
        <h2 className="white-font">{languageToUse.projects}</h2>
        <hr className="title-underline-white" />
        <h3 className="white-font">{languageToUse.projectsUnderTitle}</h3>
        <div className="project-container">
          <div className="project-card white-font">Product description</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
