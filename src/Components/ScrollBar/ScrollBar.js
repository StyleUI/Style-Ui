import React from "react";
import "./main.scss";

const ScrollBar = (probs) => {
  return (
    <div>
        <div className="scrollbar" id={probs.style}>
          <div className="force-overflow"></div>
        </div>
    </div>
  );
};

export default ScrollBar;
