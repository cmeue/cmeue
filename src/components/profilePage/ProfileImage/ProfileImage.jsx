import React from "react";
import "./ProfileImagesStyles.css";
import defaultPic from "../../../utils/icons/account_pic.png";

class ProfileImage extends React.Component {

    render() {
        return (
            <div className="profile-picture">
                <img className="img-responsive size-of-dp" src={this.props.imgSrc || defaultPic} alt={this.props.alt || "profile image"}/>
                <button className="btn btn-primary">CONTACT</button>
            </div>
        );
    }
}
export default ProfileImage;
