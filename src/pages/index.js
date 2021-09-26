import React from "react";

import Layout from "../components/Layout";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage = (props) => {
  let { language, languageToUse } = props;

  return (
    <div>
      <Welcome />
      <About language={language} languageToUse={languageToUse} />
      <Projects language={language} languageToUse={languageToUse} />
      <Contact language={language} languageToUse={languageToUse} />
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
