import React from "react";

import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/Layout";

const IndexPage = (props) => {
  let { language } = props;

  console.log("index page language " + language);
  return (
    <div>
      <h2>About Us</h2>
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
