import React from "react";
import Button from "./Components/Buttons/Buttons";
import Navbar from "./Components/NavigationBar/Navbar";
import NavItem from "./Components/NavigationBar/Navitem";
import Footer from "./Components/Footers/Footer";

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
        
        <Footer>
          <div className="simple-footer">
            <div className="bg-blue white">
              The sample text goes here. This is the dummy text of the footer
            </div>
          </div>
        </Footer>

      </div>
    </>
  );
}
