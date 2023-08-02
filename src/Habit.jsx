import React from "react";

const Habit = ({ icon: Icon, title, children }) => {
  return (
    <div className="habit">
      <Icon />
      <h3>{title}</h3>
      <p> {children}</p>
    </div>
  );
};

export default Habit;
