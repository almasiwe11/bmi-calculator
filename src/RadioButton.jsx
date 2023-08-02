import React from "react";

const RadioButton = ({ name, handleSwitch, tab }) => {
  return (
    <div className="calculator__radio">
      <input
        type="radio"
        id={name}
        checked={tab === name}
        onChange={(e) => handleSwitch(e.target)}
        value={name}
      />
      <label htmlFor={name} onClick={(e) => handleSwitch(e.target.control)}>
        {name}
      </label>
    </div>
  );
};

export default RadioButton;
