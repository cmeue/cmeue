import React from "react";
import "./DropDownStyles.css";

class DropDown extends React.Component {
    render() {
        let dropDownContent = this.props.contents;
        let dropDownElements = dropDownContent.map((x, index)=>{
            return <option key={index} className="form-control">
                {x}
            </option>;
        });

        return (
            <div className="form-group col-sm-6 col-xs-6 drop-down-component">
                <label htmlFor={this.props.dropDownTitle}>{this.props.dropDownTitle}</label>
                <select className="form-control drop-down-blue" id={this.props.dropDownTitle}>
                    {dropDownElements}
                </select>
            </div>
        );
    }
}

export default DropDown;
