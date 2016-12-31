import React from "react";
import "./TextInputWithIconStyles.css";

class TextInputWithIcon extends React.Component {
    render() {
        return (
            <div className="text-input-with-icon">
                <div className="embossed">
                    <span className={this.props.glyph || "glyphicon glyphicon-user"}></span>
                </div>
                <input type={this.props.type || "text"} className="form-control text-input-with-icon-input" placeholder={this.props.placeHolder || "Example Placeholder"} name={this.props.name}/>
            </div>
        );
    }
}

export default TextInputWithIcon
