import React from "react";

import { Link } from "gatsby";

import { content } from "../content/languages";

import "../styles/Copyright.css";

const Copyright = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="copyright">
      <p>
        Copyright
        <sup> </sup> {languageToUse.copyright}
      </p>
      <p>
        <Link to="/legal">{languageToUse.mentionsLegal}</Link>
      </p>
    </div>
  );
};

export default Copyright;
