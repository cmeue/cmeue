/*eslint-disable no-unused-vars*/
import React from "react";
import GeneralInformationEditor from "../../components/editProfilePage/GeneralInformationEditor/GeneralInformationEditor";
import "./EditProfilePageStyles.css";
import Pill from "../../components/common/Pill/Pill";
import SkillArea from "../../components/common/SkillArea/SkillArea";
/*eslint-enable*/

class EditProfilePage extends React.Component {
    render() {
        return (
            <div className="container">
                <GeneralInformationEditor />
                <SkillArea skillSet={["C", "X++", "JavaScript", "JAVA", "PHP", "Node.js"]} />
            </div>
        );
    }
}

export default EditProfilePage;
