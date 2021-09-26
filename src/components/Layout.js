import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./Header.jsx";
import Footer from "./Footer";

import "../styles/Layout.css";

const GlobalStyle = createGlobalStyle`

  body{
    line-height: 1.2;
    margin: 0;
    padding: 0;
    color: #000;
    font-family:"Noto Sans JP";
    font-size: 1.5rem;
  }
`;

const Layout = ({ children }) => {
  let [language, setLanguage] = useState("french");
  let languageToUse = "french";

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      language,
      setLanguage,
      languageToUse,
    })
  );
  return (
    <div className="layout">
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
    </div>
  );
};

export default Layout;
