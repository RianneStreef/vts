import React from "react";

import { Link } from "gatsby";
import { content } from "../content/languages";

import ChooseLanguage from "../ChooseLanguage/index";

import "./Header.css";

const Header = (props) => {
  let { language, setLanguage } = props;
  let languageToUse = content.english;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div className="header">
      <p>{languageToUse.Vts}</p>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">{languageToUse.home}</Link>
            </li>
            <li>
              <Link to="/devis">{languageToUse.intake}</Link>
            </li>
            <ChooseLanguage language={language} setLanguage={setLanguage} />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
