import React from "react";
import hero1 from "../assets/images/heidi-bruce-hero.png";

const Hero = () => {
  return (
    <div>
      <img src={hero1} alt="school of fish" />
      <div className="blackScreen"></div>
      <h2>weSellFish</h2>
      <button>find out more!</button>
    </div>
  );
};

export default Hero;
