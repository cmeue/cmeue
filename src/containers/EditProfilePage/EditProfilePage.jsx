import React from "react";
import GeneralInformationEditor from "../../components/editProfilePage/GeneralInformationEditor/GeneralInformationEditor";
import "./EditProfilePageStyles.css";

class EditProfilePage extends React.Component {
    render() {
        return (
            <div className="container">
                <GeneralInformationEditor />
            </div>
        );
    }
}

export default EditProfilePage;
