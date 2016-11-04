import React from "react";
import GeneralInformationEditor from "../../components/editProfilePage/GeneralInformationEditor/GeneralInformationEditor";
import "./EditProfilePageStyles.css";
import Pill from "../../components/common/Pill/Pill";
import SkillArea from "../../components/common/SkillArea/SkillArea";

class EditProfilePage extends React.Component {
    render() {
        return (
            <div className="container">
                <GeneralInformationEditor />
                <SkillArea skillSet={["C", "X++", "JavaScript", "Fucking", "Shitting", "Tatti Khajoor"]} />
            </div>
        );
    }
}

export default EditProfilePage;
