import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./Header.jsx";
import Footer from "./Footer";
import Copyright from "./Copyright";

import "../styles/Layout.css";

const GlobalStyle = createGlobalStyle`

  body{
    line-height: 1.2 !important;
    margin: 0;
    padding: 0;
    color: #000;
    font-family:"Noto Sans JP" !important;
    font-size: 1.5rem !important;
  }
`;

const LayoutSize = styled.div`
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  let [language, setLanguage] = useState("french");
  let languageToUse = "";
  let languageInStorage = "";

  useEffect(() => {
    if (localStorage.getItem("languageInStorage")) {
      setLanguage(languageInStorage);
      console.log("language found");
      console.log(languageInStorage);
    }
  }, []);

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      language,
      setLanguage,
      languageToUse,
    })
  );
  return (
    <LayoutSize className="layout">
      <GlobalStyle />
      <Header
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
      <section className="main">{childrenWithProps}</section>

      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />

      <Copyright language={language} languageToUse={languageToUse} />
    </LayoutSize>
  );
};

export default Layout;
