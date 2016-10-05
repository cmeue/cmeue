import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../../components/layout/NavBar/NavBar";
import Footer from "../../components/layout/Footer/Footer";
import "bootstrap/dist/js/bootstrap.js";

class Layout extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Footer />
            </div>
        );
    }
}

export default Layout;
