import * as React from "react";
import { useState } from "react";

import Layout from "../components/Layout/index";
import LandingPage from "../components/LandingPage/index";

const IndexPage = () => {
  let [language, setLanguage] = useState("english");

  return (
    <>
      <Layout language={language} setLanguage={setLanguage}>
        <LandingPage language={language} />
      </Layout>
    </>
  );
};

export default IndexPage;
