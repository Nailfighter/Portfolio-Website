import React from "react";

import { SolarSystem } from "./SolarSystem";

import "./scss/Hero.scss";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <h3 className="hero-intro">HI THERE, I AM</h3>
        <h1 className="hero-title">SHREYANSH</h1>
        <div className="hero-subtitle">
          <h5>Frontend Developer</h5>
          <h5>Game Developer</h5>
        </div>
        {/* <SolarSystem /> */}
      </div>
    </>
  );
};

export default Hero;
