/*eslint-disable no-unused-vars*/
import React from "react";
import GeneralInformationEditor from "../../components/editProfilePage/GeneralInformationEditor/GeneralInformationEditor";
import "./EditProfilePageStyles.css";
import * as help from "../../helper/firebaseHelper";
/*eslint-enable*/

class EditProfilePage extends React.Component {
    constructor() {
        super();
        this.state = {
            skills: [],
            branch: "",
            college: ""
        };
    }

    addSkill(skillValue) {
        this.setState({
            ...this.state,
            skills: [...this.state.skills, skillValue]
        });
        help.addNewSkillToStudent(this.id, skillValue);
    }

    componentDidMount() {
        this.id = 1;
        help.getStudentFromStudentId(this.id, (studentPojo)=>{
            this.setState({
                ...studentPojo
            });
            help.getCollegeFromCollegeId(studentPojo.collegeId, (collegePojo)=>{
                this.setState({
                    ...this.state,
                    college: collegePojo.name
                });
            });
            help.getBranchNameFromBranchId(studentPojo.branch, (branchPojo)=>{
                this.setState({
                    ...this.state,
                    branch: branchPojo.name
                });
            });
        });
    }

    render() {
        return (
            <div className="container">
                <GeneralInformationEditor student={this.state} onSkillAdd={this.addSkill.bind(this)} />
            </div>
        );
    }
}

export default EditProfilePage;
