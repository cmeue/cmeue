import React from "react";
import { Link } from "react-router";
import "./NavTabsStyles.css";

class NavTabs extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li role="presentation" className="tab">
                        <Link to="/" activeClassName="inner-tab-link" className="inner-tabs">Colleges</Link>
                    </li>
                    <li role="presentation" className="tab">
                        <Link to="2" activeClassName="inner-tab-link" className="inner-tabs">Chats</Link>
                    </li>
                    <li role="presentation" className="tab">
                        <Link to="3" activeClassName="inner-tab-link" className="inner-tabs">Search</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavTabs;
