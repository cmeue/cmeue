import React from "react";
import logo from "../../../utils/logo.svg";
import "./NavBarStyles.css";

class NavBar extends React.Component {
    render() {
        return (
          <div><h1>NavigationBar</h1> <span><img src={logo} /></span></div>
        );
    }
}
export default NavBar;
