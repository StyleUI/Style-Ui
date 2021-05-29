import React from 'react'
import './main.css'


export default function Button(probs) {
    return (
        <div>
            <button className={probs.class}>{probs.children}</button>
        </div>
    )
}
