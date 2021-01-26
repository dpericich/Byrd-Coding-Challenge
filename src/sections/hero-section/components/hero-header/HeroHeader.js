import React from "react";
import "./hero-header.css";
import mainLogo from "../../../../assets/logo-main.png";

const HeroHeader = () => {
  return (
    <div className="hero-header">
      <div className="hero-header__links">
        <a href="#" className="hero-header__link">
          Store
        </a>
        <a href="#" className="hero-header__link">
          Tutorials
        </a>
      </div>
      <img src={mainLogo} alt="Main logo" className="hero-header__logo"></img>
      <div className="hero-header__links">
        <a href="#" className="hero-header__link">
          Blog
        </a>
        <a href="#" className="hero-header__link">
          Contact
        </a>
      </div>
    </div>
  );
};

export default HeroHeader;
