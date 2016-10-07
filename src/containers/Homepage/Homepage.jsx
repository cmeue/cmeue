import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs"
import List from "../../components/List/List";

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <BreadCrumbs directory={["ecb", "4th-Year", "Ishan"]}/>
                <List entries={["Engineering College Bikaner", "MIT", "Stanford"]}/>
            </div>
        );
    }
}

export default Homepage;
