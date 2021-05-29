import React from "react";
import "./main.css";

const Alert = (probs) => {
  return (
    <div>
      <div className={probs.type}>
        <div className={probs.color}> {probs.children} </div>
      </div>
    </div>
  );
};

export default Alert;
