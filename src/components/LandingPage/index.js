import React from "react";
import { Link } from "gatsby";

import { LandingContainer, ComingSoon, Vts, Devis } from "./style";

import { content } from "../content/languages";

const LandingPage = (props) => {
  console.log(props);
  let { language } = props;
  let languageToUse = content.english;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  console.log("in landing component" + language);
  return (
    <LandingContainer>
      <div>
        <ComingSoon>{languageToUse.coming}</ComingSoon>
        <Vts>VTS Web Design</Vts>
      </div>
      <Devis>
        <p>
          Would you like to fill out an intake form? Click{" "}
          <Link to="/devis">HERE</Link>{" "}
        </p>
      </Devis>
    </LandingContainer>
  );
};

export default LandingPage;
