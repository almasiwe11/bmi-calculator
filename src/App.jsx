import { useState } from "react";
import Hero from "./Hero";
import WhatMeans from "./WhatMeans";
import Limitations from "./Limitations";
import Improve from "./Improve";
function App() {
  return (
    <>
      <Hero />
      <WhatMeans />
      <Improve />
      <Limitations />
    </>
  );
}

export default App;
