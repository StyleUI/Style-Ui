import React from 'react'
import './styles/Navbar.css'

const NavItem = (probs) => {
    return (
        <div>
            <li className={probs.hover}>
                <a href={probs.as} className={probs.color}><i class={probs.icon_class}></i> {probs.item} </a>
            </li>
            {probs.children}
        </div>
    )
}

export default NavItem;