import React from "react";
import "./styles/Alert.css"

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
