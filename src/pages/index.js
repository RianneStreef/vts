import * as React from "react";
import { useState } from "react";

import Layout from "../components/Layout/index";
import LandingPage from "../components/LandingPage/index";

import styled from "styled-components";

const IndexPage = () => {
  let [language, setLanguage] = useState("english");

  const Wrapper = styled.div`
    display: flex;
    height: auto;
    min-height: 100%;
  `;

  return (
    <Wrapper>
      <Layout language={language} setLanguage={setLanguage}>
        <LandingPage language={language} />
      </Layout>
    </Wrapper>
  );
};

export default IndexPage;
