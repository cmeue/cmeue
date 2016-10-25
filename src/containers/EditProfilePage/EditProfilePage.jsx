import React from "react";
import TextInputWithIcon from "../../components/common/TextInputWithIcon/TextInputWithIcon";
import "./EditProfilePageStyles.css";

class EditProfilePage extends React.Component {
    render() {
        return (<TextInputWithIcon name="ishan" type="email" glyph="glyphicon glyphicon-envelope" placeHolder="johndoe@example.com"/>);
    }
}

export default EditProfilePage;
