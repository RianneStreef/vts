import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

import "../../styles/global.css";

import flagEn from "../../images/icon-en.png";
import flagFr from "../../images/icon-fr.png";

import { content } from "../../content/languages";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  z-index: 10;
  flex-direction: column;
  align-items: flex-end;
  background-color: var(--background);

  position: fixed;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  padding-top: 5rem;
  margin-top: 0;
  transition: transform 0.3s ease-in-out;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 20px 0;

    a {
      color: var(--color-inverse);
      transition: color 500ms ease-in;
      text-decoration: none;
      font-size: 20px;
    }

    a:hover {
      color: #ccc;
      transition: color 500ms ease-in;
    }

    p {
      margin-top: 0;
    }
    justify-content: center;
    align-items: center;
    img {
      width: 30px;
    }
  }
`;

const Flag = styled.img`
  width: 30px;
`;

const RightNav = (props) => {
  let { open, setOpen, language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const [headerClassName, setHeaderClassName] = useState("");

  const handleScroll = (headerClassName) => {
    if (headerClassName !== "header-background" && window.pageYOffset >= 750) {
      setHeaderClassName("header-background");
    } else if (
      headerClassName === "header-background" &&
      window.pageYOffset < 750
    ) {
      setHeaderClassName("");
    }
  };

  function handleSetLanguage(language) {
    console.log(language);
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  useEffect(() => {
    window.onscroll = () => handleScroll(headerClassName);
  }, [headerClassName]);

  return (
    <Ul open={open}>
      <li className="menu-item" onClick={() => setOpen(!open)}>
        <AnchorLink to="/#about" title="Our team">
          <span>{languageToUse.about}</span>
        </AnchorLink>
      </li>
      <li className="menu-item" onClick={() => setOpen(!open)}>
        <AnchorLink to="/#projects" title="Our projects">
          <span>{languageToUse.projects}</span>
        </AnchorLink>
      </li>

      <li className="menu-item" onClick={() => setOpen(!open)}>
        <AnchorLink to="/#contact" title="Contact">
          <span>{languageToUse.contact}</span>
        </AnchorLink>
      </li>
      <li className="menu-item" onClick={() => setOpen(!open)}>
        <Link to="/intake">Intake</Link>
      </li>

      <li>
        {languageToUse.language === "english" ? (
          <Flag
            className="language-icon"
            src={flagFr}
            onClick={() => handleSetLanguage("french")}
            alt="Set language to French"
          />
        ) : (
          <Flag
            className="language-icon"
            src={flagEn}
            onClick={() => handleSetLanguage("english")}
            alt="Set language to English"
          />
        )}
      </li>
    </Ul>
  );
};

export default RightNav;
