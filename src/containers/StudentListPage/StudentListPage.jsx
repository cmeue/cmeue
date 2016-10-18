import React from "react";
import InfoCardList from "../../components/studentListPage/InfoCardList/InfoCardList";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs"

class StudentListPage extends React.Component {
    render() {
        return (
            <div>
                <BreadCrumbs directory={["College", "ECB"]}/>
                <InfoCardList />
            </div>
        );
    }
}

export default StudentListPage;
