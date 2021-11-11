import React from "react";
import Burger from "./Burger";

import "../../styles/Nav.css";

const Navbar = (props) => {
  let { language, setLanguage, languageToUse } = props;
  return (
    <div className="nav-bar" id="navbar">
      <Burger
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </div>
  );
};

export default Navbar;
