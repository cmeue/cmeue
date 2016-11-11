import React from "react";
import List from "../../components/common/List/List";

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <List entries={["Edit profile", "Feedback", "Blocked"]}/>
            </div>
        );
    }
}

export default Homepage;
