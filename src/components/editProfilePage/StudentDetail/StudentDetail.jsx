import React from "react";
import "./StudentDetailStyles.css";

class StudentDetail extends React.Component {
    render() {
        let student = this.props.student;
        return (
            <div className="student-detail">
                <h4>{student.name}</h4>
                <h4 id="user-name">( {student.userName} )</h4>
                <br></br>
                <h4 id="branch">{student.branch}</h4>
                <br></br>
                <h4 id="college">{student.college}</h4>
            </div>
        );
    }
}

export default StudentDetail;
