import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

import "../../styles/global.css";

const StyledBurger = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 20;

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      margin: ${({ open }) => (open ? 0 : "0 0 0 0")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      margin: ${({ open }) => (open ? 0 : "0 0 0 0")};
    }
  }
`;

const Burger = (props) => {
  let { language, setLanguage, languageToUse, darkMode } = props;

  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger
        open={open}
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        onClick={() => setOpen(!open)}
      >
        <div className={` ${darkMode ? "burger-line" : "burger-line-light"}`} />
        <div className={` ${darkMode ? "burger-line" : "burger-line-light"}`} />
        <div className={` ${darkMode ? "burger-line" : "burger-line-light"}`} />
      </StyledBurger>
      <RightNav
        open={open}
        setOpen={setOpen}
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </>
  );
};

export default Burger;
