import React from "react";

import Layout from "../components/Layout";
import Welcome from "../components/Welcome";
import About from "../components/About";
// import Projects from "../components/Projects";
import Contact from "../components/Contact";

import "../styles/IndexPage.css";

import footerBanner from "../images/footer-banner.jpeg";

const IndexPage = (props) => {
  let { language, languageToUse } = props;

  return (
    <>
      <div>
        <Welcome language={language} />
        <div className="background-placeholder" />
        <About language={language} languageToUse={languageToUse} />
        {/* <Projects language={language} languageToUse={languageToUse} /> */}
        <div className="background-placeholder" />
        <Contact language={language} languageToUse={languageToUse} />
        <div className="banner-container">
          <img className="banner" src={footerBanner} />
        </div>
      </div>
    </>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
