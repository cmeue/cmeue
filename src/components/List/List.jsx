import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListStyles.css";
import ListElement from "../ListElement/ListElement";
import BreadCrumb from "../BreadCrumbs/BreadCrumbs";

class List extends React.Component {
    render() {
        let rows = [];
        for (let i = 0; i < 10; i++) {
            rows.push(<ListElement entryName={"List Item " + i} key={i}/>);
        }
        return (
            <ul className="list-group">
                <BreadCrumb directory={["ecb", "4th-Year", "Ishan"]}/> {rows}
            </ul>
        );
    }
}

export default List;
