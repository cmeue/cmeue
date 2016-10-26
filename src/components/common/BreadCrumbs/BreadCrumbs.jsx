import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BreadCrumbsStyles.css";

class BreadCrumb extends React.Component {
    render() {
        let rows = [];
        let i;
        for (i = 0; i < this.props.directory.length - 1; i++) {
            rows.push(
                <li key={i}>
                    <a href="#">{this.props.directory[i]}</a>
                </li>
            );
        }
        //Last Directory will be active
        rows.push(
            <li key={i} className="active">{this.props.directory[i]}</li>
        );
        return (
            <ol className="breadcrumb no-margin-breadcrumb">
                {rows}
            </ol>
        );
    }
}

export default BreadCrumb;
