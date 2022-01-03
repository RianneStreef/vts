import React, { useEffect } from "react";
import "../styles/Projects3.css";
import { content } from "../content/languages";

import SebGourmet from "../images/icons/seb-gourmet-traiteur-logo.png";
import ClaireTurner from "../images/icons/claire-turner-design-logo.png";
import CoreMove from "../images/icons/core-move-logo.png";
import FaceOuest from "../images/icons/logo-FO.png";
import Caribou from "../images/icons/caribou-logo.png";

const Projects3 = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  console.log(languageToUse);
  console.log(languageToUse.sebGourmetDescription);

  useEffect(() => {
    const scrollElements = document.querySelectorAll(".fade-in-bottom");

    const elementInView = (scrollElements, dividend = 1) => {
      const elementTop = scrollElements.getBoundingClientRect().top;

      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const elementOutofView = (scrollElements) => {
      const elementTop = scrollElements.getBoundingClientRect().top;

      return (
        elementTop >
        (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
      element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else if (elementOutofView(el)) {
          hideScrollElement(el);
        }
      });
    };

    window.addEventListener("scroll", () => {
      handleScrollAnimation();
    });
  });

  return (
    <>
      <h2 id="projects">{languageToUse.projects}</h2>
      <h3>{languageToUse.projectsUnderTitle}</h3>
      <div className="projects row content scroll-container">
        <div className="column c1">
          <div className="project-card-placeholder" />
          <div className="project-card fade-in-bottom">
            <div className="project-card-title">
              <img
                src={SebGourmet}
                alt="Seb Gourmet Traitreur logo"
                className="client-logo"
              />
              <h2>Seb Gourmet Traiteur</h2>
            </div>
            <p>{languageToUse.sebGourmetDescription}</p>
            <div className="button-container-projects">
              <a
                href="https://www.sebgourmet-traiteur.com"
                target="blank"
                className="button"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="project-card bottom-card fade-in-bottom no-border-mobile">
            <div className="project-card-title">
              <img
                src={FaceOuest}
                alt="La Face Ouest logo"
                className="client-logo"
              />
              <h2>Restaurant La Face Ouest</h2>
            </div>
            <p>{languageToUse.foDescription}</p>
            <div className="button-container-projects">
              <a href="https://www.menu-lafaceouest.com" className="button">
                Learn more
              </a>
            </div>
          </div>
          <div className="project-card-placeholder" />
        </div>
        <div className="column c2">
          <div className="project-card fade-in-bottom">
            <div className="project-card-title ">
              <img
                src={ClaireTurner}
                alt="Claire Turner logo"
                className="client-logo"
              />
              <h2>Claire Turner</h2>
            </div>
            <p>{languageToUse.claireTurnerDesignDescription}</p>
            <div className="button-container-projects">
              <a
                href="https://www.claireturner-design.com"
                target="blank"
                className="button"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="project-card   fade-in-bottom">
            <div className="project-card-title">
              <img
                src={CoreMove}
                alt="Core Move logo"
                className="client-logo"
              />
              <h2>Core Move</h2>
            </div>
            <p>{languageToUse.coreMoveDescription}</p>
            <div className="button-container-projects">
              <a
                href="https://www.coremove.nl"
                className="button"
                target="blank"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="project-card bottom-card  fade-in-bottom">
            <div className="project-card-title">
              <img src={Caribou} alt="Caribou logo" className="client-logo" />
              <h2>Chalet du Caribou</h2>
            </div>
            <p>{languageToUse.caribouDescription}</p>
            <div className="button-container-projects">
              {/* <a href="https://chalet-du-caribou.com" className="button">
                Learn more
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects3;
