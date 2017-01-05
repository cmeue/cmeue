import React from "react";
import "./AboutStudentStyles.css";

class AboutStudent extends React.Component {
    render() {
        let des = this.props.description;
        return (
            <div className="container profile-page-text">
                <h4>About</h4>
                <p>{des}</p>
            </div>
        );
    }
}
export default AboutStudent;
