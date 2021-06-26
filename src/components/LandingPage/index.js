import React from "react";
import { Link } from "gatsby";

import ChooseLanguage from "../ChooseLanguage/index";

import { LandingContainer, ComingSoon, Vts, Devis } from "./style";

import { content } from "../content/languages";

const LandingPage = (props) => {
  let { language, setLanguage } = props;

  let languageToUse = content.english;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <LandingContainer>
      <ChooseLanguage language={language} setLanguage={setLanguage} />
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
