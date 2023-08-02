import React, { useState, useEffect } from "react";
import Metric from "./Metric";
import Imperial from "./Imperial";
import RadioButton from "./RadioButton";
import BMI from "./BMI";
const Calculator = () => {
  const [tab, setTab] = useState("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [feedback, setFeedback] = useState("");

  function calcBmi(height, weight) {
    setBmi((weight / ((height / 100) * (height / 100))).toFixed(1));
  }

  function calcIdealWeight(bmi, height) {
    const minWeight = ((height / 100) * (height / 100) * 18.5).toFixed(1);
    const maxWeight = ((height / 100) * (height / 100) * 25).toFixed(1);
    if (tab === "metric") {
      return [`${minWeight}kg`, `${maxWeight}kg`];
    } else {
      const lbTotal = minWeight * 2.20462;
      const st = Math.round(lbTotal / 14);
      const lb = Math.round(lbTotal % 14);

      const maxst = Math.round((maxWeight * 2.20462) / 14);
      const maxlb = Math.round((maxWeight * 2.20462) % 14);
      console.log(maxst, maxlb);
      return [`${st}st ${lb}lb`, `${maxst}st ${maxlb}lb`];
    }
  }

  useEffect(() => {
    if (height && weight) {
      calcBmi(height, weight);
    } else {
      setBmi(false);
    }
  }, [height, weight]);

  useEffect(() => {
    console.log("feedback");
    const [minWeight, maxWeight] = calcIdealWeight(bmi, height);
    if (bmi < 16) {
      setFeedback(
        `Your BMI suggests you're SEVERE THIN. Your Ideal weight is between ${minWeight} - ${maxWeight}`
      );
    } else if (bmi >= 16 && bmi < 17) {
      setFeedback(
        `Your BMI suggests you're Moderate THIN. Your Ideal weight is between ${minWeight} - ${maxWeight}`
      );
    } else if (bmi >= 17 && bmi < 18.5) {
      setFeedback(
        `Your BMI suggests you're Mild THIN. Your Ideal weight is between ${minWeight} - ${maxWeight}`
      );
    } else if (bmi >= 18.5 && bmi < 25) {
      setFeedback(
        `Your BMI suggests you have a healthy weight. Your Ideal weight is between ${minWeight} - ${maxWeight}`
      );
    } else if (bmi >= 25 && bmi < 30) {
      setFeedback(
        `Your BMI suggests you're overweight. Your Ideal weight is between ${minWeight} - ${maxWeight}`
      );
    } else if (bmi >= 30 && bmi < 35) {
      setFeedback(
        `Your BMI suggests you're obese. Your Ideal weight is between ${minWeight} - ${maxWeight}`
      );
    } else if (bmi >= 35 && bmi < 40) {
      setFeedback(
        `Your BMI suggests you're Obese Class 2. Your Ideal weight is between ${minWeight} - ${maxWeight}`
      );
    } else if (bmi >= 40) {
      setFeedback(
        `Your BMI suggests you're Obese Class 3. Your Ideal weight is between ${minWeight} - ${maxWeight}`
      );
    }
  }, [bmi]);

  function handleSwitch(event) {
    setTab(event.value);
    setBmi("");
    setHeight("");
    setWeight("");
  }

  return (
    <div className="calculator">
      <h3 className="calculator__details">Enter your detail below</h3>
      <div className="calculator__radio-container">
        <RadioButton name="metric" handleSwitch={handleSwitch} tab={tab} />
        <RadioButton name="imperial" handleSwitch={handleSwitch} tab={tab} />
      </div>

      <div className={`${tab}-input-container`}>
        {tab === "metric" ? (
          <Metric
            height={height}
            setHeight={setHeight}
            weight={weight}
            setWeight={setWeight}
          />
        ) : (
          <Imperial calcBmi={calcBmi} setHeight={setHeight} />
        )}
      </div>

      <div className={`${bmi ? "result" : "welcome"} display`}>
        {bmi ? (
          <BMI bmi={bmi} feedback={feedback} />
        ) : (
          <>
            <h3>Welcome!</h3>
            <p>
              Enter your height and weight and you'll see your BMI result here{" "}
              {bmi}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Calculator;
