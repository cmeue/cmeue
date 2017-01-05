import React from "react";
import "./ProfilePageStyles.css";
import Image from "../../components/profilePage/ProfileImage/ProfileImage";
import Info from "../../components/profilePage/StudentInfo/StudentInfo";
import AboutStudent from "../../components/profilePage/AboutStudent/AboutStudent";
import SkillSet from "../../components/common/SkillArea/SkillArea";
import RatingStar from "../../components/profilePage/RatingStar/RatingStar";
class ProfilePage extends React.Component {
    render() {
        let student = {
            name: "John Doe",
            userName: "johndoe",
            college: "Govt. Engineering College Bikaner",
            branch: "Computer Science & Engineering",
            year: "3",
            Rating: "3",
            people: "450",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            skills: [
                "C++",
                "C",
                "JavaScript",
                "Java",
                "PHP",
                "Angular.js",
                "Android"
            ]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-4 col-md-3 col-lg-4">
                        <Image/>
                    </div>
                    <div className="col-xs-8 col-md-9 col-lg-8">
                        <Info studentInfo={student}/>
                    </div>
                </div>
                <div className="row">
                    <AboutStudent description={student.description}/>
                    <RatingStar/>
                </div>
                <div>
                    <SkillSet skillSet={student.skills}/>
                </div>
            </div>
        );
    }
}
export default ProfilePage;
