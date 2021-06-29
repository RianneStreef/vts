import styled from "styled-components";

export const LandingContainer = styled.div`
  background-color: #3e3e3e;
  color: #ffffff;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ComingSoon = styled.h1`
  text-align: center;
`;

export const Vts = styled.h2`
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
