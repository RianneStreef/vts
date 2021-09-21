import React from "react";
import "../styles/Welcome.css";
import LogoWelcome from "../images/logo-vertical-white.png";

const Welcome = () => {
  return (
    <div className="welcome">
      <img src={LogoWelcome} alt="Logo VTS web design" />{" "}
    </div>
  );
};

export default Welcome;
