import React from "react";
import "./StudentInfoStyles.css";

class StudentInfo extends React.Component {
    render() {
        let studentInfo = this.props.studentInfo;

        return (
            <div className="profile-page-student-Info">
                <h3 className="name">{studentInfo.name}</h3>
                <p className="profile-page-size">{studentInfo.year}
                    <sup>rd</sup>
                    <span>Year</span>
                </p>
                <p className="profile-page-size">{studentInfo.branch}</p>
                <p className="profile-page-size">{studentInfo.college}</p>
                <span className="profile-page-rating">
                    <span className="profile-page-imagesize">
                        <i className="fa fa-star fa-1x" aria-hidden="true"></i>
                    </span>
                    <span>{studentInfo.Rating}({studentInfo.people})</span>
                </span>
            </div>
        );
    }
}
export default StudentInfo;
