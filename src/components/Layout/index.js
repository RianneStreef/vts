import * as React from "react";

import { createGlobalStyle } from "styled-components";

import Header from "../Header/index";
import Footer from "../Footer/index";

import { LayoutContainer } from "./style";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: "Montserrat", sans-serif;
    line-height: 1.2;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    height: auto;
  }

`;

const Layout = (props) => {
  let { language, setLanguage } = props;
  // let languageStoredInLocalStorage = localStorage.getItem("language");
  // let [language, setLanguage] = useState(
  //   languageStoredInLocalStorage ? languageStoredInLocalStorage : "english"
  // );

  return (
    <LayoutContainer>
      <GlobalStyle />
      <Header language={language} setLanguage={setLanguage} />
      {props.children}
      <Footer language={language} />
    </LayoutContainer>
  );
};

export default Layout;
