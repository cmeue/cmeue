import React from "react";
import InfoCardList from "../../components/studentListPage/InfoCardList/InfoCardList";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs"
import FilterBar from "../../components/studentListPage/FilterBar/FilterBar";

class StudentListPage extends React.Component {
    render() {
        return (
            <div>
                <BreadCrumbs directory={["College", "ECB"]}/>
                <InfoCardList />
                <FilterBar />
            </div>
        );
    }
}

export default StudentListPage;
