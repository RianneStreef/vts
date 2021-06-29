import React from "react";
import { useState } from "react";

import { useForm, ValidationError } from "@formspree/react";

import "./Form.css";

import { content } from "../content/languages";

const Form = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const [socialOption, setSocialOption] = useState(false);

  const [basic, setBasic] = useState(false);
  const [standard, setStandard] = useState(false);
  const [premium, setPremium] = useState(false);
  const [pageOption, setPageOption] = useState(false);
  const [liveFeedOption, setLiveFeedOption] = useState(false);
  const [contactFormOption, setContactFormOption] = useState(false);
  const [appViewOption, setAppViewOption] = useState(false);
  const [reviewOption, setReviewOption] = useState(false);
  const [emailOption, setEmailOption] = useState(false);

  function handleSetBasic(changeEvent) {
    setBasic(true);
    setStandard(false);
    setPremium(false);
  }

  function handleSetStandard(changeEvent) {
    setStandard(true);
    setBasic(false);
    setPremium(false);
  }

  function handleSetPremium(changeEvent) {
    setPremium(true);
    setBasic(false);
    setStandard(false);
  }

  function handleSetSocialOption(changeEvent) {
    setSocialOption(JSON.parse(changeEvent.target.value));
  }

  function handleSetPageOption(changeEvent) {
    setPageOption(JSON.parse(changeEvent.target.value));
  }

  function handleSetLiveFeedOption(changeEvent) {
    setLiveFeedOption(JSON.parse(changeEvent.target.value));
  }

  function handleSetContactFormOption(changeEvent) {
    setContactFormOption(JSON.parse(changeEvent.target.value));
  }

  function handleSetAppViewOption(changeEvent) {
    setAppViewOption(JSON.parse(changeEvent.target.value));
  }

  function handleSetReviewOption(changeEvent) {
    setReviewOption(JSON.parse(changeEvent.target.value));
  }

  function handleSetEmailOption(changeEvent) {
    setEmailOption(JSON.parse(changeEvent.target.value));
  }

  const [state, handleSubmit] = useForm("xvodqzkz");
  if (state.succeeded) {
    return <p>{languageToUse.thanks}</p>;
  }

  return (
    <div className="form-layout" onSubmit={handleSubmit}>
      <h2>{languageToUse.siteInfo}</h2>
      <h3>{languageToUse.personalInfo}</h3>
      <label htmlFor="name">{languageToUse.name}</label>
      <input id="name" type="text" name="name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="phone">{languageToUse.phone}</label>
      <input id="phone" type="text" name="phone" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="email">{languageToUse.email}</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="package">{languageToUse.package}</label>
      <div className="radio-buttons package-buttons">
        <input
          type="radio"
          value={"basic"}
          name="introOption"
          onChange={handleSetBasic}
        />{" "}
        {languageToUse.basic}
        <input
          type="radio"
          value={"standard"}
          name="introOption"
          onChange={handleSetStandard}
        />{" "}
        {languageToUse.standard}
        <input
          type="radio"
          value={"premium"}
          name="introOption"
          onChange={handleSetPremium}
        />{" "}
        {languageToUse.premium}
      </div>
      <p>{languageToUse.provideContent}</p>

      <label htmlFor="contentT1">{languageToUse.contentT1}</label>
      <input id="contentT1" type="text" name="contentT1" />
      <ValidationError
        prefix="contentT1"
        field="contentT1"
        errors={state.errors}
      />
      {languageToUse.content}

      <textarea id="content1" name="content1" />
      <ValidationError
        prefix="Content1"
        field="content1"
        errors={state.errors}
      />
      <label htmlFor="contentT1">{languageToUse.contentT2}</label>
      <input id="contentT2" type="text" name="contentT2" />
      <ValidationError
        prefix="contentT2"
        field="contentT2"
        errors={state.errors}
      />
      {languageToUse.content}

      <textarea id="content2" name="content2" />
      <ValidationError
        prefix="Content2"
        field="content2"
        errors={state.errors}
      />
      <label htmlFor="contentT1">{languageToUse.contentT3}</label>
      <input id="contentT3" type="text" name="contentT3" />
      <ValidationError
        prefix="contentT3"
        field="contentT3"
        errors={state.errors}
      />
      {languageToUse.content}

      <textarea id="content3" name="content3" />
      <ValidationError
        prefix="Content3"
        field="content3"
        errors={state.errors}
      />
      <p>{languageToUse.social}</p>
      <div className="radio-buttons">
        <input
          type="radio"
          value={true}
          name="socialOption"
          onChange={handleSetSocialOption}
        />{" "}
        {languageToUse.yes}
        <input
          type="radio"
          value={false}
          name="socialOption"
          onChange={handleSetSocialOption}
        />{" "}
        {languageToUse.no}
      </div>

      {socialOption && (
        <div className="social-input">
          <p>{languageToUse.google}</p>
          <input
            className="intake-input-field"
            type="text"
            id="googleInput"
            name="googleInput"
          />
          <p>{languageToUse.facebook}</p>
          <input
            className="intake-input-field"
            type="text"
            id="googleInput"
            name="googleInput"
          />
          <p>{languageToUse.insta}</p>
          <input
            className="intake-input-field"
            type="text"
            id="googleInput"
            name="googleInput"
          />
        </div>
      )}

      {standard && (
        <>
          <p>{languageToUse.pages}</p>
          <div className="radio-buttons">
            <input
              type="radio"
              value={true}
              name="pageOption"
              onChange={handleSetPageOption}
            />{" "}
            {languageToUse.yes}
            <input
              type="radio"
              value={false}
              name="pageOption"
              onChange={handleSetPageOption}
            />{" "}
            {languageToUse.no}
          </div>

          {pageOption && (
            <>
              <label htmlFor="contentT1">{languageToUse.page2D}</label>
              <input id="page2D" type="text" name="page2D" />
              <ValidationError
                prefix="page2D"
                field="page2D"
                errors={state.errors}
              />
              {languageToUse.page2C}
              <textarea id="page2C" name="page2C" />
              <ValidationError
                prefix="page2C"
                field="page2C"
                errors={state.errors}
              />
              <label htmlFor="page3D">{languageToUse.page3D}</label>
              <input id="page3D" type="text" name="page3D" />
              <ValidationError
                prefix="page3D"
                field="page3D"
                errors={state.errors}
              />
              {languageToUse.page3C}
              <textarea id="page3C" name="page3C" />
              <ValidationError
                prefix="page3C"
                field="page3C"
                errors={state.errors}
              />
              <label htmlFor="page4D">{languageToUse.page4D}</label>
              <input id="page4D" type="text" name="page4D" />
              <ValidationError
                prefix="page4D"
                field="page4D"
                errors={state.errors}
              />
              {languageToUse.page4C}
              <textarea id="page4C" name="page4C" />
              <ValidationError
                prefix="page4C"
                field="page4C"
                errors={state.errors}
              />
              <p>{languageToUse.morePages}</p>
            </>
          )}

          <p>{languageToUse.liveFeed}</p>
          <div className="radio-buttons">
            <input
              type="radio"
              value={true}
              name="liveFeedOption"
              onChange={handleSetLiveFeedOption}
            />{" "}
            {languageToUse.yes}
            <input
              type="radio"
              value={false}
              name="liveFeedOption"
              onChange={handleSetLiveFeedOption}
            />{" "}
            {languageToUse.no}
          </div>
          {liveFeedOption && (
            <>
              <label htmlFor="account">{languageToUse.account}</label>
              <input id="account" type="text" name="account" />
              <ValidationError
                prefix="account"
                field="account"
                errors={state.errors}
              />
            </>
          )}

          <p>{languageToUse.contactForm}</p>
          <div className="radio-buttons">
            <input
              type="radio"
              value={true}
              name="contactFormOption"
              onChange={handleSetContactFormOption}
            />{" "}
            {languageToUse.yes}
            <input
              type="radio"
              value={false}
              name="contactFormOption"
              onChange={handleSetContactFormOption}
            />{" "}
            {languageToUse.no}
          </div>
          {contactFormOption && (
            <>
              <label htmlFor="contactMail">{languageToUse.contactMail}</label>
              <input id="contactMail" type="text" name="contactMail" />
              <ValidationError
                prefix="contactMail"
                field="contactMail"
                errors={state.errors}
              />
            </>
          )}

          <p>{languageToUse.appView}</p>
          <div className="radio-buttons">
            <input
              type="radio"
              value={true}
              name="appViewOption"
              onChange={handleSetAppViewOption}
            />{" "}
            {languageToUse.yes}
            <input
              type="radio"
              value={false}
              name="appViewOption"
              onChange={handleSetAppViewOption}
            />{" "}
            {languageToUse.no}
          </div>
          {appViewOption && (
            <>
              <label htmlFor="appView">
                {languageToUse.appViewDescription}
              </label>
              <input id="appView" type="text" name="appView" />
              <ValidationError
                prefix="appView"
                field="appView"
                errors={state.errors}
              />
            </>
          )}
        </>
      )}

      {premium && (
        <>
          <p>{languageToUse.pages}</p>
          <div className="radio-buttons">
            <input
              type="radio"
              value={true}
              name="pageOption"
              onChange={handleSetPageOption}
            />{" "}
            {languageToUse.yes}
            <input
              type="radio"
              value={false}
              name="pageOption"
              onChange={handleSetPageOption}
            />{" "}
            {languageToUse.no}
          </div>

          {pageOption && (
            <>
              <label htmlFor="contentT1">{languageToUse.page2D}</label>
              <input id="page2D" type="text" name="page2D" />
              <ValidationError
                prefix="page2D"
                field="page2D"
                errors={state.errors}
              />
              {languageToUse.page2C}
              <textarea id="page2C" name="page2C" />
              <ValidationError
                prefix="page2C"
                field="page2C"
                errors={state.errors}
              />
              <label htmlFor="page3D">{languageToUse.page3D}</label>
              <input id="page3D" type="text" name="page3D" />
              <ValidationError
                prefix="page3D"
                field="page3D"
                errors={state.errors}
              />
              {languageToUse.page3C}
              <textarea id="page3C" name="page3C" />
              <ValidationError
                prefix="page3C"
                field="page3C"
                errors={state.errors}
              />
              <label htmlFor="page4D">{languageToUse.page4D}</label>
              <input id="page4D" type="text" name="page4D" />
              <ValidationError
                prefix="page4D"
                field="page4D"
                errors={state.errors}
              />
              {languageToUse.page4C}
              <textarea id="page4C" name="page4C" />
              <ValidationError
                prefix="page4C"
                field="page4C"
                errors={state.errors}
              />
              <p>{languageToUse.morePages}</p>
            </>
          )}

          <p>{languageToUse.liveFeed}</p>
          <div className="radio-buttons">
            <input
              type="radio"
              value={true}
              name="liveFeedOption"
              onChange={handleSetLiveFeedOption}
            />{" "}
            {languageToUse.yes}
            <input
              type="radio"
              value={false}
              name="liveFeedOption"
              onChange={handleSetLiveFeedOption}
            />{" "}
            {languageToUse.no}
          </div>
          {liveFeedOption && (
            <>
              <label htmlFor="account">{languageToUse.account}</label>
              <input id="account" type="text" name="account" />
              <ValidationError
                prefix="account"
                field="account"
                errors={state.errors}
              />
            </>
          )}

          <p>{languageToUse.contactForm}</p>
          <div className="radio-buttons">
            <input
              type="radio"
              value={true}
              name="contactFormOption"
              onChange={handleSetContactFormOption}
            />{" "}
            {languageToUse.yes}
            <input
              type="radio"
              value={false}
              name="contactFormOption"
              onChange={handleSetContactFormOption}
            />{" "}
            {languageToUse.no}
          </div>
          {contactFormOption && (
            <>
              <label htmlFor="contactMail">{languageToUse.contactMail}</label>
              <input id="contactMail" type="text" name="contactMail" />
              <ValidationError
                prefix="contactMail"
                field="contactMail"
                errors={state.errors}
              />
            </>
          )}

          <p>{languageToUse.appView}</p>
          <div className="radio-buttons">
            <input
              type="radio"
              value={true}
              name="appViewOption"
              onChange={handleSetAppViewOption}
            />{" "}
            {languageToUse.yes}
            <input
              type="radio"
              value={false}
              name="appViewOption"
              onChange={handleSetAppViewOption}
            />{" "}
            {languageToUse.no}
          </div>
          {appViewOption && (
            <>
              <label htmlFor="appView">
                {languageToUse.appViewDescription}
              </label>
              <input id="appView" type="text" name="appView" />
              <ValidationError
                prefix="appView"
                field="appView"
                errors={state.errors}
              />
            </>
          )}
          <p>{languageToUse.review}</p>
          <div className="radio-buttons">
            <input
              type="radio"
              value={true}
              name="reviewOption"
              onChange={handleSetReviewOption}
            />{" "}
            {languageToUse.yes}
            <input
              type="radio"
              value={false}
              name="reviewOption"
              onChange={handleSetReviewOption}
            />{" "}
            {languageToUse.no}
          </div>
          {reviewOption && (
            <>
              <label htmlFor="review">{languageToUse.reviewSite}</label>
              <input id="appView" type="text" name="appView" />
              <ValidationError
                prefix="appView"
                field="appView"
                errors={state.errors}
              />
              <p>{languageToUse.reviewOptions}</p>
            </>
          )}

          <p>{languageToUse.personalizedEmail}</p>
          <div className="radio-buttons">
            <input
              type="radio"
              value={true}
              name="emailOption"
              onChange={handleSetEmailOption}
            />{" "}
            {languageToUse.yes}
            <input
              type="radio"
              value={false}
              name="emailOption"
              onChange={handleSetEmailOption}
            />{" "}
            {languageToUse.no}
          </div>
          {emailOption && (
            <>
              <label htmlFor="review">{languageToUse.emailPrefix}</label>
              <input id="emailPrefix" type="text" name="emailPrefix" />
              <ValidationError
                prefix="emailPrefix"
                field="emailPrefix"
                errors={state.errors}
              />
            </>
          )}
        </>
      )}
      <div className="button-container">
        <button
          className="form-submit"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
