// import Navbar from './Components/Navbar/StyleOne/'
import './Components/css/Navigation.css'
import './Components/css/Sidebars.css'
import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'

export default function App() {
  return (
    <div>
      <nav>
        <ul className="bg-dark dark-hover-bg">
          <li><div className="brand-name"> Style-UI </div></li>
          <div className="item-align-auto">
            <li className="item-auto"><a href="" className="active-bg-red"> Home </a></li>
            <li><a href=""> About </a></li>
            <li><a href="" className="active-bg-green"> Service </a></li>
          </div>
        </ul>
      </nav>

      <div className="sidebar-right wd-2x ">
        <a href="#"> Item 1 </a>
        <a href='#'> Item 2 </a>
        <a href='#'> Item 3 </a>
        <a href='#'> Item 4 </a>
      </div>
    </div>
  )
}



