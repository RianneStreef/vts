import * as React from "react";
import { LandingPage, ComingSoon } from "./style";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body{
    font-family: 'Montserrat', sans-serif;
    line-height: 1.2;
    margin: 0;
    padding: 0;
    
  }
  h1{
    font-size: 2em;
  }
`;

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <LandingPage>
        <ComingSoon>Coming soon</ComingSoon>
      </LandingPage>
    </>
  );
};

export default Layout;
