import * as React from "react";
import { useState } from "react";

import Layout from "../components/Layout/index";
import IntakeForm from "../components/IntakeForm/index";

const Devis = () => {
  // let languageStoredInLocalStorage = localStorage.getItem("language");

  // let [language, setLanguage] = useState(
  //   languageStoredInLocalStorage ? languageStoredInLocalStorage : "english"
  // );

  let [language, setLanguage] = useState("english");

  return (
    <Layout language={language} setLanguage={setLanguage}>
      <IntakeForm language={language} />
    </Layout>
  );
};

export default Devis;
