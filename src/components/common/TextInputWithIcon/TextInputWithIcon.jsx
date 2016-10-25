import React from "react";
import "./TextInputWithIconStyles.css";

class TextInputWithIcon extends React.Component {
    render() {
        return (
            <div className="text-input-with-icon">
                <button className="btn text-input-with-icon-btn">
                    <span className={this.props.glyph || "glyphicon glyphicon-user"}></span>
                </button>
                <input type={this.props.type || "text"} className="form-control text-input-with-icon-input" placeholder={this.props.placeHolder || "Example Placeholder"} name={this.props.name}/>
            </div>
        );
    }
}

export default TextInputWithIcon
