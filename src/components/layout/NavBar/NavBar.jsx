import React from "react";
import logo from "../../../utils/icons/4.png";
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
                                <a href="#">Profile</a>
                            </li>
                            <li>
                                <a href="#about">Sign in</a>
                            </li>
                            <li>
                                <a href="#contact">Sign up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default NavBar;
