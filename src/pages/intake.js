import React from "react";
import Layout from "../components/Layout";
import underConstruction from "../images/under-construction.png";

import "../styles/IntakePage.css";

const IntakePage = () => {
  return (
    <div className="intake">
      <img src={underConstruction} className="under-construction" />
    </div>
  );
};

IntakePage.Layout = Layout;
export default IntakePage;
