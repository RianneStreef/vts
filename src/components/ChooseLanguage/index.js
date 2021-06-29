import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import "../ChooseLanguage/ChooseLanguage.css";

const ChooseLanguage = (props) => {
  let { language, setLanguage } = props;

  function handleSetLanguage(language) {
    console.log(language);
    setLanguage(language);
    // storeLanguageInLocalStorage(language);
  }

  // function storeLanguageInLocalStorage(language) {
  //   localStorage.setItem("language", language);
  // }

  return (
    <li className="flag-container">
      {language === "english" ? (
        <StaticImage
          className="language-icon"
          src="../../images/icon-fr.png"
          alt="Set language to French"
          onClick={() => handleSetLanguage("french")}
        />
      ) : (
        <StaticImage
          className="language-icon"
          src="../../images/icon-en.png"
          alt="Set language to English"
          onClick={() => handleSetLanguage("english")}
        />
      )}
    </li>
  );
};

export default ChooseLanguage;
