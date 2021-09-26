import React from "react";
import { content } from "../content/languages";

import "../styles/Projects.css";
import workspace from "../images/background-projects.jpeg";

const Projects = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div id="projects" className="projects">
      <img
        src={workspace}
        alt="workspace"
        className="workspace hidden-desktop"
      />
      <div className="content">
        <h2>{languageToUse.projects}</h2>
        <hr className="title-underline-white" />
        <h3>{languageToUse.projectsUnderTitle}</h3>
        <div className="project-container">
          <div className="project-card">Product description</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
