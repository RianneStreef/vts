import React from "react";

import flagEn from "../../images/icon-en.png";
import flagFr from "../../images/icon-fr.png";

import { FlagContainer, LanguageIcon } from "../ChooseLanguage/style";

const ChooseLanguage = (props) => {
  let { language, setLanguage } = props;

  function handleSetLanguage(language) {
    console.log(language);
    setLanguage(language);
    storeLanguageInLocalStorage(language);
  }

  function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language);
  }

  return (
    <FlagContainer>
      {language === "english" ? (
        <LanguageIcon
          src={flagFr}
          onClick={() => handleSetLanguage("french")}
          alt="Set language to French"
        />
      ) : (
        <LanguageIcon
          src={flagEn}
          onClick={() => handleSetLanguage("english")}
          alt="Set language to English"
        />
      )}
    </FlagContainer>
  );
};

export default ChooseLanguage;
