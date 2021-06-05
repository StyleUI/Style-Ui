<<<<<<< HEAD
import './App.css';
import Button from './lib/Button'

function App() {
  return (
    <div className="App">
      <Button class="ui-button red-basic-button">
        Hello 
      </Button>
    </div>
  );
}

export default App;
=======
import React from "react";
import Button from "./Components/Buttons/Buttons";
import Navbar from "./Components/NavigationBar/Navbar";
import NavItem from "./Components/NavigationBar/Navitem";
import Footer from "./Components/Footers/Footer";
import Product from "./Components/Product/Product";
import Hover from "./Components/Hover/Hover";
import Form from "./Components/Forms/forms";

export default function App() {
  return (
    <>
      <div>
        <Navbar
          bg="nav-style2 nav-black divider"
          brand_name="Style-UI"
          display="no"
        >
          <NavItem
            item="home"
            as="/home"
            color="white-color"
            hover="hover-color1-txt"
            icon_class="fas fa-home"
          />
          <NavItem
            item="About"
            as="/about"
            color="white-color"
            hover="hover-color1-txt"
            icon_class="fas fa-user"
          />
          <NavItem
            item="About"
            as="/home"
            color="white-color"
            hover="hover-color1-txt"
            icon_class="fas fa-user"
          />
          <input
            type="text"
            placeholder="search here"
            className="input-type1"
          />
          <Button class="ui-button green-basic-button radius-r">
            <i class="fas fa-search"></i>
          </Button>
        </Navbar>
      </div>
    </>
  );
}
>>>>>>> b7f3d6d6e4687b26f9edb8cafe67c9deac5366af
