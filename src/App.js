import React from 'react'
import Button from './Components/Buttons/Buttons'
import Form from './Components/Forms/forms'
import Codeview from './Components/Codeview/Codeview'
import Navbar from './Components/NavigationBar/Navbar'
import NavItem from './Components/NavigationBar/Navitem'
import Product from './Components/Product/Product'


export default function App() {
  return (
    <>
      <Navbar bg="nav-style1 nav-black divider" brand_name="Style-UI">
        <NavItem item="home" as="/home" color="white-color" hover="hover-color1-txt" icon_class="fas fa-home" />
        <NavItem item="About" as="/about" color="white-color" hover="hover-color1-txt" icon_class="fas fa-user" />
        <NavItem item="About" as="/home" color="white-color" hover="hover-color1-txt" icon_class="fas fa-user" />
        <input type="text" placeholder="search here" className="input-type1" />
        <Button class="ui-button green-basic-button radius-r"><i class="fas fa-search"></i></Button>
      </Navbar>
      <Codeview />
    </>
  )
}



