import React from 'react'
import './styles/Buttons.css'

const Button = (probs) => {
    return (
        <div>
            <button className={probs.class}>{probs.children}</button>
        </div>
    )
}

export default Button