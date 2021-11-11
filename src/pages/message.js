import React from "react";
import Layout from "../components/Layout.js";

import { Link } from "gatsby";

import "../styles/MessagePage.css";

import { content } from "../content/languages";

const MessagePage = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div className="message">
      <div className="message-card">
        {" "}
        <p>{languageToUse.thanks} </p>
        <Link to="/">
          <p> &#8592; {languageToUse.back}</p>
        </Link>
      </div>
    </div>
  );
};

MessagePage.Layout = Layout;
export default MessagePage;
