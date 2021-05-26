import React from "react";
import "./main.css";

const Alert = (probs) => {
  return (
    <div>
      <div className={probs.type}>
        <div className={probs.color}> {probs.children} </div>
      </div>

      <div class="row">
        <div class="style-alert style-info">
          <div class="style-alert-header">
            <div class="style-alert-number">1</div>
            <div class="style-alert-content">
              <div class="style-alert-title">What is the information.?</div>
              <div class="style-alert-main">
              this is the dummy text of style-ui simply print some information. 
              you can edit it according to your need
              </div>
            </div>
          </div>
        </div>

        <div class="style-alert style-successful">
          <div class="style-alert-header">
            <div class="style-alert-number">1</div>
            <div class="style-alert-content">
              <div class="style-alert-title">What is Done.?</div>
              <div class="style-alert-main">
              this is the dummy text of style-ui simply print some information. 
                you can edit it according to your need
              </div>
            </div>
          </div>
        </div>

        <div class="style-alert style-danger">
          <div class="style-alert-header">
            <div class="style-alert-number">1</div>
            <div class="style-alert-content">
              <div class="style-alert-title">What is the Error.?</div>
              <div class="style-alert-main">
                this is the dummy text of style-ui simply print some information. 
                you can edit it according to your need
              </div>
            </div>
          </div>
        </div>

        <div class="style-alert style-warning">
          <div class="style-alert-header">
            <div class="style-alert-number">1</div>
            <div class="style-alert-content">
              <div class="style-alert-title">What is the warning.?</div>
              <div class="style-alert-main">
                this is the dummy text of style-ui simply print some information.
                you can edit it according to your need
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Alert;
