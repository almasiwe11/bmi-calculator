import React, { useState, useEffect } from "react";
import LimitsDesktop from "./LimitsDesktop";
import LimitsMobileTablet from "./LimitsMobileTablet";
const Limitations = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  let desktop = false;
  if (screenWidth > 1023) {
    desktop = true;
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(screenWidth);
  return desktop ? <LimitsDesktop /> : <LimitsMobileTablet />;
};

export default Limitations;
