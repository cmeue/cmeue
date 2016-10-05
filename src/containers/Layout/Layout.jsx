import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}

export default Layout;
