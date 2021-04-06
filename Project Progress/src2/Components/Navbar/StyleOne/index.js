import React from 'react'
import { NavPurple, NavLink, Bars, NavMenu, NavBtnLink, NavBtn } from './NavPurple'

const Navbar = () => {
    return ( 
        <>
            <NavPurple>
                <NavLink to="/">
                <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About Us
                    </NavLink>
                <NavLink to="/services" activeStyle>
                    Services
                </NavLink>

                <NavLink to="/contact" activeStyle>
                    Contact Us
                </NavLink>

                <NavLink to="/sign-up" activeStyle>
                    Sign Up
                </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Sign In
                    </NavBtnLink>
                
                </NavBtn>
            </NavPurple>
        </>
    )
}


export default Navbar
