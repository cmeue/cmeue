/*eslint-disable no-unused-vars*/
import React from "react";
import "./GeneralInformationEditorStyles.css";
import ChangeProfilePicture from "../ChangeProfilePicture/ChangeProfilePicture";
import TextInputWithIcon from "../../common/TextInputWithIcon/TextInputWithIcon";
import TextArea from "../../common/TextArea/TextArea";
import DropDown from "../../common/DropDown/DropDown";
import SkillArea from "../../common/SkillArea/SkillArea";
/*eslint-disable*/

class GeneralInformationEditor extends React.Component {
    handleAddSkill(e) {
        let skillbox = document.getElementById("skillbox");
        if(skillbox.value && this.props.onSkillAdd) {
            this.props.onSkillAdd(skillbox.value);
        }
        skillbox.value = "";
    }

    render() {
        //Mock data for testing purpose only!
        let student = this.props.student;
        return (
            <div className="general-information-editor">
                <ChangeProfilePicture imgSrc={student.profilePic}/>
                <div className="student-detail">
                    <h4>{student.name}</h4>
                    <h4 id="user-name">{"( " + student.userName + " )"}</h4>
                    <br></br>
                    <h4 id="branch">{student.branch}</h4>
                    <br></br>
                    <h4 id="college">{student.college}</h4>
                </div>
                <h4>General</h4>
                <div>
                    <TextInputWithIcon disabled={true} name="email" type="email" glyph="glyphicon glyphicon-envelope" placeHolder={student.email ? student.email : "johndoe@example.com"}/>
                    <TextInputWithIcon disabled={false} name="phone" type="phone" glyph="glyphicon glyphicon-phone" placeHolder={student.phoneNumber ? student.phoneNumber : "Phone Number (Optional)"} />
                    <TextArea placeHolder="Tell other students about yourself !">{student.bio}</TextArea>
                    <div className="skill-add">
                        <input type="text" id="skillbox" className="form-control" placeholder="Add a new Skill"/>
                        <button className="btn btn-primary"><span className="glyphicon glyphicon-ok" onClick={this.handleAddSkill.bind(this)}></span></button>
                    </div>
                </div>
                <SkillArea skillSet={student.skills} />
                <button className="btn btn-primary submit-button">Submit</button>
            </div>
        );
    }
}

export default GeneralInformationEditor;
