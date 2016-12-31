/*eslint-disable no-unused-vars*/
import React from "react";
import "./ListStyles.css";
import ListElement from "../ListElement/ListElement";
/*eslint-enable*/

class List extends React.Component {
    render() {
        let rows = this.props.entries;
        let rowElements = rows.map((x, i)=>{
            return <ListElement entryName={this.props.entries[i]} key={i}/>;
        });
        return (
            <ul className="list-group">
                {rowElements}
            </ul>
        );
    }
}

export default List;
