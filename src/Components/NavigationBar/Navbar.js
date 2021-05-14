import React, { useState } from 'react'
import '../NavigationBar/main.css'


export function Navbar(probs) {
    const bars = "fas fa-align-justify"
    const close = "fas fa-times-circle"
    const mobile_class = "navlink active"

    const [click, newclick] = useState(bars);
    const [mobile_menue, set_mobile_menue] = useState("navlink")

    const icon_click_handler = (event) => {
        event.preventDefault();
        if (click === bars) {
            set_mobile_menue(mobile_class)
            newclick(close)
        } else {
            set_mobile_menue("navlink")
            newclick(bars)
        }
    }

    return (
        <div>
            <div className="Navbar">
                <nav className={probs.bg}>
                    <h3 className="logo">{probs.brand_name}</h3>
                    <img class={probs.brand_image} />
                    <ul className={mobile_menue}>
                        {probs.children}
                    </ul>
                    <div onClick={icon_click_handler} className="burger right">
                        <i className={click} />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;