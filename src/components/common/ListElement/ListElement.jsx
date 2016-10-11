import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ListElementStyles.css";

class ListElement extends React.Component {
    render() {
        return (
            <li className="list-group-item">{this.props.entryName}</li>
        );
    }
}

export default ListElement;
