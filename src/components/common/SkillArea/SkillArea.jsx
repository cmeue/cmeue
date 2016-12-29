import React from "react";
import Pill from "../Pill/Pill"; //eslint-disable-line no-unused-vars
import "./SkillAreaStyles.css";

class SkillArea extends React.Component {
    render() {
        let skillArray = this.props.skillSet;

        skillArray = skillArray.map((x)=>{
            return (<div className="left-margin" key={x}><Pill key={x}>{x}</Pill></div>);
        });

        return (
            <div>
                <h4>Skills</h4>
                <div className="skill-area-full-width">
                    {skillArray}
                </div>
            </div>
        );
    }
}

export default SkillArea;
