import React from "react";

import Layout from "../components/Layout";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Projects2 from "../components/Projects2";
import Contact from "../components/Contact";

const IndexPage = (props) => {
  let { language, languageToUse } = props;

  return (
    <div>
      <Welcome language={language} />
      <About language={language} languageToUse={languageToUse} />
      <Projects2 language={language} languageToUse={languageToUse} />
      <Contact language={language} languageToUse={languageToUse} />
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
