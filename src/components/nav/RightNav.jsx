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
  align-items: flex-end;
  z-index: 10;
  background-color: #d31376;

  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    background-color: transparent;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    color: #000;

    @media (min-width: 768px) {
      a {
        color: #000;
        transition: color 500ms ease-in;
        text-decoration: none;
      }
      a:visited {
        color: #000;
        text-decoration: none;
      }
      a:hover {
        color: var(--color-dark);
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
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #494949;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const Flag = styled.img`
  width: 30px;
  margin-right: 20px;
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
  }

  useEffect(() => {
    window.onscroll = () => handleScroll(headerClassName);
  }, [headerClassName]);

  return (
    <Ul open={open}>
      <li className="menu-item">
        <AnchorLink to="/#about" title="Our team">
          <span>About Us</span>
        </AnchorLink>
      </li>
      <span className="dash">-</span>
      <li className="menu-item">
        <AnchorLink to="/#projects" title="Our projects">
          <span>Projects</span>
        </AnchorLink>
      </li>
      <span className="dash">-</span>

      <li className="menu-item">
        <AnchorLink to="/#contact" title="Contact">
          <span>Contact</span>
        </AnchorLink>
      </li>
      <li>
        <Link to="/devis">Devis</Link>
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
