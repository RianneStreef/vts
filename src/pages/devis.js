import * as React from "react";
import { useState } from "react";

import IntakeForm from "../components/IntakeForm/index";

const Devis = () => {
  let languageStoredInLocalStorage = localStorage.getItem("language");

  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "english"
  );
  return <IntakeForm language={language} setLanguage={setLanguage} />;
};

export default Devis;
