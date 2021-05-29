import React, { useState } from "react";
import "./main.css";
import Button from "../Buttons/Buttons";

const Form = (probs) => {
  const disable_state = "form-toggle-button";
  const active_state = "form-toggle-button active";
  const signup_active = "signup_section";
  const signup_disable = "signup_section_disable";
  const signin_active = "signin_section";
  const signin_diable = "signin_section_disable";

  const [signup_form_active, set_signup_form_actve] = useState(disable_state); // for button toggle
  const [signin_form_active, set_signin_form_active] = useState(active_state); // for button toggle
  const [display_signup, set_display_signup] = useState(signup_active); // for signup block
  const [display_signin, set_display_signin] = useState(signin_active); // for signin block

  const signup = (event) => {
    event.preventDefault();
    if (signin_form_active == disable_state) {
      set_signup_form_actve(disable_state);
      set_signin_form_active(active_state);
      set_display_signup(signup_disable);
      set_display_signin(signin_active);
    } else {
      set_signin_form_active(disable_state);
      set_signup_form_actve(active_state);
      set_display_signup(signup_active);
      set_display_signin(signin_diable);
    }
  };

  return (
    <div>
      {probs.children}
    </div>
  );
};

export default Form;
