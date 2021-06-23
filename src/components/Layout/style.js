import styled from "styled-components";

export const LandingPage = styled.div`
  font-family: "Montserrat", sans-serif;
  background-color: #3e3e3e;
  color: #ffffff;
  height: 100vh;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
`;

export const ComingSoon = styled.h1`
  text-align: center;
`;

export const Vts = styled.h3`
  text-align: center;
`;

export const Devis = styled.div`
  text-align: right;
  margin-right: 20px;
  > a:link,
  a:visited {
    color: lightgrey;
    text-decoration: none;
  }
`;
