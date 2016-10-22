import React from "react";
import { Link } from "react-router";
import logo from "../../../utils/icons/logo-transparent.png";
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
                        <a className="navbar-brand" href="#"><img alt="Cmeue" src={logo}/></a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="#">Profile</a>
                            </li>
                            <li>
                                <a data-toggle="modal" data-target="#modal">Sign in</a>
                            </li>
                            <li>
                                <a data-toggle="modal" data-target="#modal">Sign up</a>
                            </li>
                            <li className="active">
                                <Link to="/settingspage">Settings</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default NavBar;
