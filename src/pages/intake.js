import React from "react";
import Layout from "../components/Layout";

import { content } from "../content/languages";

import "../styles/IntakePage.css";

const IntakePage = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="intake">
      <div className="header-placeholder" />
      <p>{languageToUse.intake}</p>
    </div>
  );
};

IntakePage.Layout = Layout;
export default IntakePage;
