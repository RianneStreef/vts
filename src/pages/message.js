import React from "react";
import Layout from "../components/Layout.js";
import styled from "styled-components";

const Thanks = styled.div`
  margin-top: 100px;
`;

const MessagePage = () => {
  return <Thanks>Thanks </Thanks>;
};

MessagePage.Layout = Layout;
export default MessagePage;
