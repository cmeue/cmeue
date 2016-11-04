import React from "react";
import "./DropDownStyles.css";

class DropDown extends React.Component {
    render() {
        let dropDownElems = [];

        for (let i = 0; i < this.props.contents.length; i++) {
            dropDownElems.push(
                <option key={i} className="form-control">
                    {this.props.contents[i]}
                </option>
            );
        }

        return (
            <div className="form-group col-sm-6 col-xs-6 drop-down-component">
                <label htmlFor={this.props.dropDownTitle}>{this.props.dropDownTitle}</label>
                <select className="form-control drop-down-blue" id={this.props.dropDownTitle}>
                    {dropDownElems}
                </select>
            </div>
        );
    }
}

export default DropDown;
