import React from "react";
import Pill from "../Pill/Pill";
import "./SkillAreaStyles.css";

class SkillArea extends React.Component {
    render() {
        let mySkills = this.props.skillSet;
        let skillArray = [];

        for(let i=0; i < mySkills.length; i++) {
            skillArray.push(<div className="left-margin"><Pill key={i}>{mySkills[i]}</Pill></div>);
        }

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
