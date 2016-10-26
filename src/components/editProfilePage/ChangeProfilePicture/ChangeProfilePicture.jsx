import React from "react";
import "./ChangeProfilePictureStyles.css";
import defaultProfilePic from "../../../utils/icons/account_pic.png";

class ChangeProfilePicture extends React.Component {
    render() {
        return (
            <div className="change-profile-picture">
                <img className="img-responsive img-circle" src={this.props.imgSrc || defaultProfilePic} alt={this.props.alt || "Am Image"}/>
                <button className="btn btn-primary">Change Picture</button>
            </div>
        );
    }
}

export default ChangeProfilePicture;
