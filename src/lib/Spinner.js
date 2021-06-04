import React from "react";
import './styles/Spinner.css'

const Spinner = (probs) => {
  return (
    <div>
      <div className={probs.color}>
        <div class={probs.type}>
          <svg
            className={probs.size}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="7" stroke-width="2" />
          </svg>
        </div>
      </div>
      <div class={probs.type}>
          <div className="grey"></div>
      </div>
    </div>
  );
};

export default Spinner;
