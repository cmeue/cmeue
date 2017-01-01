/*eslint-disable no-unused-vars*/
import React from "react";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs"
import List from "../../components/common/List/List";
import * as firebase from "firebase";
/*eslint-enable*/

class Homepage extends React.Component {
    constructor() {
        super();
        this.state = {
            colleges: []
        };
    }

    componentDidMount() {
        const collegeRef = firebase.database().ref().child("colleges");
        collegeRef.on("value", (snap)=>{
            let collegeList = [];
            snap.forEach((x)=>{
                collegeList.push(x.val().name);
            });
            this.setState({
                colleges: collegeList
            });
        });
    }

    render() {
        return (
            <div>
                <BreadCrumbs directory={["ecb", "4th-Year", "Ishan"]}/>
                <List entries={this.state.colleges}/>
            </div>
        );
    }
}

export default Homepage;
