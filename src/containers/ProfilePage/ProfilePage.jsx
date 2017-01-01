import React from "react";
import "./ProfilePageStyles.css";
import Image from "../../components/profilePage/ProfileImage/ProfileImage";
import Info from "../../components/profilePage/StudentInfo/StudentInfo";
import AboutStudent from "../../components/profilePage/AboutStudent/AboutStudent";
import SkillSet from "../../components/common/SkillArea/SkillArea";
import RatingStar from "../../components/profilePage/RatingStar/RatingStar";
import fullStar from "../../utils/Rating_Icons/star_1.png";
class ProfilePage extends React.Component {
    render() {
        let stud = {
            name: "John Doe",
            userName: "johndoe",
            college: "Govt. Engineering College Bikaner",
            branch: "Computer Science & Engineering",
            year: "3rd",
            Rating: "3",
            people :"450",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            skills: ["c++","c","JavaScript","java","PHP","Angular.js","Android"]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-4 col-md-3 col-lg-4 Image">
                        <Image name={stud.name}/>
                    </div>
                    <div className="col-xs-8 col-md-9 col-lg-8 Info">
                        <Info studentInfo={stud}/>
                        <span className="starblock">
                            <span className="imagesize"><img src={fullStar} alt="star"/></span>
                            <span>{stud.Rating}({stud.people})</span>
                        </span>
                    </div>
                </div>
                <div className="row">
                    <AboutStudent description={stud.description}/>
                    <RatingStar/>
                </div>
                <div>
                    <SkillSet skillSet={stud.skills}/>
                </div>
            </div>
        );
    }
}
export default ProfilePage;
