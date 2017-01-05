/*eslint-disable no-unused-vars*/
import React from "react";
import GeneralInformationEditor from "../../components/editProfilePage/GeneralInformationEditor/GeneralInformationEditor";
import "./EditProfilePageStyles.css";
import Pill from "../../components/common/Pill/Pill";
import SkillArea from "../../components/common/SkillArea/SkillArea";
import * as help from "../../helper/firebaseHelper";
/*eslint-enable*/

class EditProfilePage extends React.Component {
    constructor() {
        super();
        this.state = {
            branches: [],
            colleges: []
        };
    }

    componentDidMount() {
        help.getAllBrancheNamesFromCollegeId(1, (bNames)=>{
            this.setState({
                branches: bNames,
                colleges: []
            });
        });
    }

    render() {
        return (
            <div className="container">
                <GeneralInformationEditor branchNames={this.state.branches}/>
                <SkillArea skillSet={["C", "X++", "JavaScript", "JAVA", "PHP", "Node.js"]} />
            </div>
        );
    }
}

export default EditProfilePage;
