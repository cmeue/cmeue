import React from "react";
import "./TextAreaStyles.css";

class TextArea extends React.Component {
    render() {
        return (<textarea className="form-control text-area-component" name={this.props.name || ""} rows={this.props.row || "5"} placeholder={this.props.placeHolder || "This is a placeholder"}/>);
    }
}

export default TextArea;
