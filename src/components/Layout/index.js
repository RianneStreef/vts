import * as React from "react";
import { LandingPage, ComingSoon, Vts, Devis } from "./style";
import { Link } from "gatsby";

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
        <div>
          <ComingSoon>Coming soon</ComingSoon>
          <Vts>VTS Web Design</Vts>
        </div>
        <Devis>
          <p>
            Would you like to fill out an intake form? Click{" "}
            <Link to="/devis">HERE</Link>{" "}
          </p>
        </Devis>
      </LandingPage>
    </>
  );
};

export default Layout;
