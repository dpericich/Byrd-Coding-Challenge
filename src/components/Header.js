import React from "react";
import "./header.css";
import mainLogo from "../assets/logo-main.png";
import whiteLogo from "../assets/logo-white.png";

const Header = ({ color }) => {
  return (
    <div className="header">
      <div className="header__social-icons">
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
      </div>
      <img
        src={color === "orange" ? mainLogo : whiteLogo}
        alt="logo for header"
        className="header__logo"
      />
      <div className="header__dropdown-icon">
        <ion-icon name="reorder-two-outline"></ion-icon>
      </div>
    </div>
  );
};

export default Header;
