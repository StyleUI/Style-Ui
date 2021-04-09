import React from 'react'

export default function Sidebar() {
    return (
        <div>
            <div className="sidebar sidebar-grey-background">
                <ul className="sidebar-items">
                    <h2 className="sidebar-heading"> Style-UI </h2>
                    <input type="text" name="" id="" placeholder="search" className="sidebar-input"/>
                    <li className="sidebar-link-style"><a href="#"> Home </a></li>
                    <li className="sidebar-link-style"><a href="#"> About </a></li>
                    <li className="sidebar-link-style"><a href="#"> project </a></li>
                    <li className="sidebar-link-style"><a href="#"> Privacy </a></li>
                </ul>
            </div>
        </div>
    )
}
