import React from "react";
import Logo from "./Logo";
import Greetings from "./Greetings";
import Calculator from "./Calculator";
const Hero = () => {
  return (
    <div className="hero container">
      <Logo />
      <div className="hero__flex">
        <Greetings />
        <Calculator />
      </div>
      <div className="bg-color"></div>
    </div>
  );
};

export default Hero;
