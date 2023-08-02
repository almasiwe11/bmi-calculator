import React from "react";

const Limit = ({ icon: Icon, title, children }) => {
  return (
    <div className="limit">
      <div className="limit-title">
        <Icon />
        {title}
      </div>
      {children}
    </div>
  );
};

export default Limit;
