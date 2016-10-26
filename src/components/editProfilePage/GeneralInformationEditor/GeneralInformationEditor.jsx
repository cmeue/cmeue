import React from "react";
import "./GeneralInformationEditorStyles.css";
import ChangeProfilePicture from "../ChangeProfilePicture/ChangeProfilePicture";
import TextInputWithIcon from "../../common/TextInputWithIcon/TextInputWithIcon";
import StudentDetail from "../StudentDetail/StudentDetail";
import TextArea from "../../common/TextArea/TextArea";
import DropDown from "../../common/DropDown/DropDown";

class GeneralInformationEditor extends React.Component {
    render() {
        //Mock data for testing purpose only!
        let stud = {
            name: "John Doe",
            userName: "johndoe",
            college: "Govt. Engineering College Bikaner",
            branch: "Computer Science & Engineering"
        };

        return (
            <div>
                <ChangeProfilePicture/>
                <StudentDetail student={stud}/>
                <h4>General</h4>
                <div>
                    <TextInputWithIcon name="email" type="email" glyph="glyphicon glyphicon-envelope" placeHolder="johndoe@example.com"/>
                    <TextInputWithIcon name="phone" type="phone" glyph="glyphicon glyphicon-phone" placeHolder="Phone Number (Optional)" />
                    <TextArea placeHolder="Tell other students about yourself !"/>
                    <div className="row">
                        <DropDown dropDownTitle="Branch" contents={["CSE", "EE", "ME"]}/>
                        <DropDown dropDownTitle="College" contents={["StanFord", "MIT", "Mera College"]}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default GeneralInformationEditor;
