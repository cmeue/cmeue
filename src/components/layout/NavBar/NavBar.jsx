import React from "react";
import logo from "../../../utils/logo.png";
import "./NavBarStyles.css";

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed menu-button" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                          <span className="glyphicon glyphicon-menu-hamburger menu" aria-hidden="true"></span>
                        </button>
                        <a className="navbar-brand" href="#"><img alt="Cmeue" src={logo} /></a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default NavBar;
