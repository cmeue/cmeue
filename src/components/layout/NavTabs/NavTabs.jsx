import React from "react";
import "./NavTabsStyles.css";

class NavTabs extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li role="presentation" className="active tab">
                        <a className="active" href="#">Colleges</a>
                    </li>
                    <li role="presentation" className="tab">
                        <a href="#">Chats</a>
                    </li>
                    <li role="presentation" className="tab">
                        <a href="#">Search</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavTabs;
