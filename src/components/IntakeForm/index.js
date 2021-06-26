import React from "react";
import ChooseLanguage from "../ChooseLanguage";
import Form from "../Form";

import { IntakeTitle, IntakeHeader } from "./style";

import { content } from "../content/languages";

const IntakeForm = (props) => {
  let { language, setLanguage } = props;

  let languageToUse = content.english;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <>
      <IntakeHeader>
        <IntakeTitle>{languageToUse.intakeForm}</IntakeTitle>
        <ChooseLanguage language={language} setLanguage={setLanguage} />
      </IntakeHeader>
      <Form />
    </>
  );
};

export default IntakeForm;
