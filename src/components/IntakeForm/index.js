import React from "react";
import Form from "../Form";

import { FormContainer, IntakeTitle, IntakeHeader } from "./style";

import { content } from "../content/languages";

const IntakeForm = (props) => {
  let { language } = props;

  let languageToUse = content.english;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <FormContainer>
      <IntakeHeader>
        <IntakeTitle>{languageToUse.intakeForm}</IntakeTitle>
      </IntakeHeader>
      <Form language={language} languageToUse={languageToUse} />
    </FormContainer>
  );
};

export default IntakeForm;
