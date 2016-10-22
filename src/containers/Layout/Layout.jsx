import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import Header from "../../components/layout/Header/Header";
import Modal from "../../components/common/Modal/Modal";
import "./LayoutStyles.css";

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Modal />
            </div>
        );
    }
}

export default Layout;
