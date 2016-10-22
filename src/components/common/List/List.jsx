import React from "react";
import "./ListStyles.css";
import ListElement from "../ListElement/ListElement";

class List extends React.Component {
    render() {
        let rows = [];
        for (let i = 0; i < this.props.entries.length; i++) {
            rows.push(<ListElement entryName={this.props.entries[i]} key={i}/>);
        }
        return (
            <ul className="list-group">
                {rows}
            </ul>
        );
    }
}

export default List;
