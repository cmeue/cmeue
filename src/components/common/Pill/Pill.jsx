import React from "react";
import "./PillStyles.css";

class Pill extends React.Component {
    render() {
        return(
            <div className="pill-component">{this.props.children} <span className={this.props.cross === "true" ? "glyphicon glyphicon-remove" : ""}></span></div>
        );
    }
}

export default Pill;
