import React from "react";
import "./hero-section.css";
import HeroHeader from "./components/hero-header/HeroHeader";
import HeroCopy from "./components/hero-copy/HeroCopy";
import Shadow from "../../assets/shadow.png";
import Drone from "../../assets/drone.png";

const Hero = () => {
  return (
    <div className="hero-section">
      <HeroHeader />
      <div className="header__dropdown-icon header__menu-icon">
        <ion-icon name="reorder-two-outline"></ion-icon>
      </div>
      <img src={Drone} alt="drone" className="drone-image" />
      <img src={Shadow} alt="drone shadow" className="drone-shadow" />
      <HeroCopy />
    </div>
  );
};

export default Hero;
