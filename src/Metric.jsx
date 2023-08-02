import React from "react";

const Metric = ({ height, setHeight, weight, setWeight }) => {
  return (
    <>
      <div className="inp">
        <p className="onTop">Height</p>
        <input
          className="metric-input"
          type="text"
          name="height"
          placeholder="0"
          value={height}
          onChange={(e) => setHeight(+e.target.value)}
        />
        <span className="units">cm</span>
      </div>
      <div className="inp">
        <p className="onTop">Weight</p>
        <input
          className="metric-input"
          type="text"
          name="weight"
          placeholder="0"
          value={weight}
          onChange={(e) => setWeight(+e.target.value)}
        />
        <span className="units">kg</span>
      </div>
    </>
  );
};

export default Metric;
