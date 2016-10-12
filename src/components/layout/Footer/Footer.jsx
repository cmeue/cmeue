import React from "react";
import "./FooterStyles.css";
import logo from "../../../utils/icons/logo.png";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <span>
                        <a href="#"><img className="footer-logo" alt="footer logo" src={logo}/></a>
                        © 2016 CMEUE.
                    </span>
                    <p className="footer-block">
                        <span className="footer-menu-link">
                            <a href="#" target="_blank">Terms</a>
                        </span>
                        <span className="footer-menu-link">
                            <a href="#" target="_blank">Privacy</a>
                        </span>
                        <span className="footer-menu">
                            <a href="#" target="_blank">Blog</a>
                        </span>
                        <span className="footer-menu">
                            <a href="#" target="_blank">About</a>
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;
