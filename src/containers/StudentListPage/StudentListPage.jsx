import React from "react";
import InfoCard from "../../components/studentListPage/InfoCard/InfoCard";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs"

class StudentListPage extends React.Component {
    render() {
        return (
            <div>
                <BreadCrumbs directory={["College", "ECB"]}/>
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
            </div>
        );
    }
}

export default StudentListPage;
