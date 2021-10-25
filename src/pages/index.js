import React from "react";

import Layout from "../components/Layout";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Projects3 from "../components/Projects3";
import Contact from "../components/Contact";

import "../styles/IndexPage.css";

// import footerBanner from "../images/footer-banner.jpeg";

import { Helmet } from "react-helmet";

const IndexPage = (props) => {
  let { language, languageToUse } = props;

  return (
    <>
      <Helmet>
        <title>VTS Web Design</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Creator of digital solutions" />
        <meta
          name="keywords"
          content=" Graphic Design, Web Design, Val Thorens"
        />
        <link rel="canonical" href="https://www.vts-webdesign.com/" />
      </Helmet>
      <div>
        <Welcome language={language} />
        <div className="background-placeholder" />
        <About language={language} languageToUse={languageToUse} />
        <Projects3 language={language} languageToUse={languageToUse} />
        <div className="background-placeholder" />
        <Contact language={language} languageToUse={languageToUse} />
        {/* <div className="banner-container">
          <img className="banner" src={footerBanner} />
        </div> */}
      </div>
    </>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
