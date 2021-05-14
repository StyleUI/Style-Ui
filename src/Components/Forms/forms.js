import React, { useState } from 'react'
import './main.css'
import Button from '../Buttons/Buttons'

const Form = (probs) => {
    const disable_state = "form-toggle-button"
    const active_state = "form-toggle-button active"
    const signup_active = "signup_section"
    const signup_disable = "signup_section_disable"
    const signin_active = "signin_section"
    const signin_diable = "signin_section_disable"

    const [signup_form_active, set_signup_form_actve] = useState(disable_state) // for button toggle
    const [signin_form_active, set_signin_form_active] = useState(active_state) // for button toggle
    const [display_signup, set_display_signup] = useState(signup_active) // for signup block
    const [display_signin, set_display_signin] = useState(signin_active) // for signin block

    const signup = (event) => {
        event.preventDefault();
        if (signin_form_active == disable_state) {
            set_signup_form_actve(disable_state)
            set_signin_form_active(active_state)
            set_display_signup(signup_disable)
            set_display_signin(signin_active)
        } else {
            set_signin_form_active(disable_state)
            set_signup_form_actve(active_state)
            set_display_signup(signup_active)
            set_display_signin(signin_diable)
        }
    }

    return (
        <div>
            <form>
                <div className="form-group1">
                    <div className="form-name"> Sign Up </div>
                    <lable className="form-name1"> Username </lable>
                    <input type="text" placeholder="username" className="form-input1" />
                    <lable className="form-name1"> Email </lable>
                    <input type="email" className="form-input1" placeholder="Email" />
                    <lable className="form-name1"> Password </lable>
                    <input type="password" className="form-input1" placeholder="password" />
                    <Button class="ui-button green-basic-button radius-r"> Sign Up </Button>
                </div>
            </form>


            <form>
                <div className="form-group2">
                    <div className="bg-color">
                        <div className="bar-left" />
                        <div className="bar-right" />
                        <div className="form-name"> Register </div>
                        <div className="form-item">
                            <div className="form-item-row">
                                <input type="text" placeholder="First Name" className="form-input2" />
                                <input type="text" placeholder="Last Name" className="form-input2" />
                            </div>
                            <input type="email" placeholder="Email" className="form-input3" />
                            <input type="password" placeholder="Password" className="form-input3" />
                            <input type="password" placeholder="Confirm Password" className="form-input3" />
                            <Button class="ui-button green-basic-button radius-r full-width"> Sign Up </Button>
                        </div>
                    </div>
                </div>
            </form>



            <form>
                <div className="form-group3">
                    <h2> Sign Up </h2>
                    <h4> Please enter the below information </h4>
                    <hr noshade="noshade" />
                    <div className="form-item-row">
                        <input type="text" placeholder="First Name" className="form-input2" />
                        <input type="text" placeholder="Last Name" className="form-input2" />
                    </div>
                    <input type="email" placeholder="Email" className="form-input3" />
                    <input type="password" placeholder="Password" className="form-input3" />
                    <input type="password" placeholder="Confirm Password" className="form-input3" />
                    <p className="center"><input type="checkbox" /> I accept the <a href="#"> Terms </a> and <a href="#"> Privacy Policy </a></p>
                    <Button class="ui-button blue-basic-button"> Sign Up </Button>
                </div>
            </form>



            <div className="form-group3" >
                <div className="form-item-row">
                    <a href="#" className={signup_form_active} onClick={signup}> Sign Up  </a>
                    <a href="#" className={signin_form_active} onClick={signup}> sign in </a>
                </div>
                <div className={display_signup}>
                    <input type="text" placeholder="Username" className="form-input3" />
                    <input type="email" placeholder="Email Id" className="form-input3" />
                    <input type="password" placeholder="Password" className="form-input3" />
                    <h4> <a href="#" style={{ color: "red" }}> Forgot password ? </a></h4>
                    <p className="center"><input type="checkbox" /> I accept the <a href="#"> Terms </a> and <a href="#"> Privacy Policy </a></p>
                    <Button class="ui-button green-basic-button full-width"> Sign Up </Button>
                </div>
                <div className={display_signin}>
                    <input type="text" placeholder="Username" className="form-input3" />
                    <input type="password" placeholder="Password" className="form-input3" />
                    <h4> <a href="#" style={{ color: "red" }}> Forgot password ? </a></h4>
                    <Button class="ui-button blue-basic-button full-width"> Sign In </Button>
                </div>
            </div>
        </div>
    );
}

export default Form;