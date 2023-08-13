import React from "react";

const Limit = ({ icon: Icon, title, children }) => {
  return (
    <div className="limit">
      <div className="limit-title">
        <Icon />
        <h3>{title} </h3>
      </div>
      <p> {children}</p>
    </div>
  );
};

export default Limit;
