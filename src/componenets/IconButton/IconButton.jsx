import React from "react";
import "./IconButton-style.scss";
const IconButton = ({ onClick, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div role={"button"} onClick={handleClick} className="IconButton">
      {children}
    </div>
  );
};

export default IconButton;
