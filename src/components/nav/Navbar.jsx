import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

import "../../styles/global.css";

const Nav = styled.nav`
  height: 55px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
`;

const Navbar = (props) => {
  let { language, setLanguage, languageToUse } = props;
  return (
    <Nav>
      <Burger
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </Nav>
  );
};

export default Navbar;
