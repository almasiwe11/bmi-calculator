import React, { useEffect, useState } from "react";

const Imperial = ({ calcBmi, setHeight }) => {
  const [height, setHeightft] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {
    if (height && weight) {
      const newHeight = height.ft * 30.48 + height.inch * 2.54;
      const newWeight = weight.st * 6.35029 + weight.lb * 0.453592;
      calcBmi(newHeight, newWeight);
      setHeight(newHeight);
    }
  }, [height, weight]);
  return (
    <>
      <p>Height</p>
      <div className="imperial-container">
        <div className="inp">
          <input
            type="number"
            name="height-ft"
            placeholder="0"
            value={height.ft}
            onChange={(e) => {
              setHeightft((prev) => ({ ...prev, ft: e.target.value }));
            }}
          />
          <span className="units">ft</span>
        </div>
        <div className="inp">
          <input
            type="number"
            name="heigt-inch"
            placeholder="0"
            value={height.inch}
            onChange={(e) => {
              setHeightft((prev) => ({ ...prev, inch: e.target.value }));
            }}
          />
          <span className="units">in</span>
        </div>
      </div>
      <p>Weight</p>
      <div className="imperial-container">
        <div className="inp">
          <input
            type="number"
            name="weight-st"
            placeholder="0"
            value={weight.st}
            onChange={(e) => {
              setWeight((prev) => ({ ...prev, st: e.target.value }));
            }}
          />
          <span className="units">st</span>
        </div>
        <div className="inp">
          <input
            type="number"
            name="weight-lbs"
            placeholder="0"
            value={weight.lb}
            onChange={(e) => {
              setWeight((prev) => ({ ...prev, lb: e.target.value }));
            }}
          />
          <span className="units">lb</span>
        </div>
      </div>
    </>
  );
};

export default Imperial;
