
import './Components/sidabars/main.css'
import './Components/Buttons/main.css'
import './Components/Tables/main.css'
import './Components/Product/main.css'
// import './Components/SidebarType2/main.css'
import './Components/ProsCons/main.css'
import React from 'react'
import Navbar from './Components/js/Navbar'
import Sidebar from './Components/js/Sidebar'
import Buttons from './Components/js/Buttons'
import Table from './Components/js/Tables'
import Product from './Components/js/Product'
import ProsCons from './Components/js/ProsCons'
import SidebarType2 from './Components/js/SidebarType2'

import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Router>
        <Navbar
          bg="nav-style1 nav-grey divider"
          link1="Home"
          link1_ic="fas fa-home"
          link2="About"
          link2_ic="fas fa-user"
          placeholder="search here ...."
        > Style-UI
        <Buttons class="ui-button green-basic-button radius-r"> Red </Buttons>
        </Navbar>
        {/* <Codeview></Codeview> */}
        {/* <SidebarType2></SidebarType2>
        <Sidebar></Sidebar> */}
        {/* <ProsCons></ProsCons> */}
        {/* <Product></Product> */}
        
        {/* <Table></Table> */}
      </Router>
    </>
  )
}



