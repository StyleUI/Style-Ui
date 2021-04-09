import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="nav-style1 nav-black">
            <h3 className="logo">Style-UI</h3>
                <ul className="navlink">
                    <li className="hover-color1-txt">
                        <a href="./home" className="white-color default-item"> Home </a>
                    </li>

                    <li className="hover-color1-txt">
                        <a href="./home" className="white-color default-item"> About </a>
                    </li>
                    <li className="hover-color1-txt">
                        <a href="./home" className="white-color default-item"> Privacy </a>
                    </li>
                </ul>
                <div className="burger right">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
    )
}