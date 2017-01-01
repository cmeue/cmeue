import React from "react";
import "./AboutStudentStyles.css";

class AboutStudent extends React.Component {
    render() {
        let des = this.props.description;
        return (
            <div className="container text">
                <h4>About</h4>
                {des}
            </div>
        );
    }
}
export default AboutStudent;
