import * as React from "react";
import { useState } from "react";

import LandingPage from "../LandingPage/index";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body{
    font-family: 'Montserrat', sans-serif;
    line-height: 1.2;
    margin: 0;
    padding: 0;
  }
  
`;

const Layout = () => {
  let languageStoredInLocalStorage = localStorage.getItem("language");

  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "english"
  );

  console.log(language);
  return (
    <>
      <GlobalStyle />
      <LandingPage language={language} setLanguage={setLanguage} />
    </>
  );
};

export default Layout;
