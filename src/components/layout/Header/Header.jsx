import React from "react";
import NavBar from "../NavBar/NavBar";
import NavTabs from "../NavTabs/NavTabs";
import "./HeaderStyles.css";

class Header extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="navigation-tabs">
                    <NavTabs />
                </div>
            </div>
        );
    }
}

export default Header;
