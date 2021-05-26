import React from "react";
import Button from "./Components/Buttons/Buttons";
import Form from "./Components/Forms/forms";
import Codeview from "./Components/Codeview/Codeview";
import Navbar from "./Components/NavigationBar/Navbar";
import NavItem from "./Components/NavigationBar/Navitem";
import Product from "./Components/Product/Product";
import Logo from "./Components/images/my-logo.svg";
import Tables from "./Components/Tables/Tables";
import ScrollBar from "./Components/ScrollBar/ScrollBar";
import Spinner from "./Components/Spinner/Spinner";
import Alert from "./Components/Alert/Alert";

export default function App() {
  return (
    <>
      <div>
      <Navbar bg="nav-style2 nav-black divider" brand_name="Style-UI" display="no">
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
        <Alert type="static-alert" color="primary">
          <i class="fas fa-exclamation-circle"></i> Simple Primary Alert{" "}
        </Alert>
      </div>
    </>
  );
}
