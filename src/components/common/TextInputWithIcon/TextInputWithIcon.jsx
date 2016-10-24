import React from "react";
import "./TextInputWithIconStyles.css";

class TextInputWithIcon extends React.Component {
    render() {
        return (
            <div>
                <input type="text" className="form-control" name={this.props.name} />
            </div>
        );
    }
}

export default TextInputWithIcon
