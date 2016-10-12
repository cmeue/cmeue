import React from "react";
import NavBar from "../../components/layout/NavBar/NavBar";
import Footer from "../../components/layout/Footer/Footer";

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
