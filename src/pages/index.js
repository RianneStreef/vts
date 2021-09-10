import React from "react";

import Layout from "../components/Layout";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage = (props) => {
  let { language } = props;

  console.log("index page language " + language);
  return (
    <div>
      <About /> <Projects /> <Contact />
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
