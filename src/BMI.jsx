import React from "react";

const BMI = ({ bmi, feedback }) => {
  return (
    <div className="result">
      <div className="bmi">
        <h3>Your BMI is... </h3>
        <h1>{bmi}</h1>
      </div>
      <div className="description">{feedback}</div>
    </div>
  );
};

export default BMI;
