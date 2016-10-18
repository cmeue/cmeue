import React from "react";
import InfoCard from "../InfoCard/InfoCard";

class InfoCardList extends React.Component {
    constructor() {
        super();
        // temp data TODO: remove it when adding redux.
        const studentList = [
            {
                name: "Pikachu Pokemon",
                year: 3,
                college: "IIT Bombay",
                branch: "CSE",
                rating: 4.5,
                votes: 264,
                img: "http://placekitten.com/101/101",
            }, {
                name: "Raichu Digimon",
                year: 1,
                college: "IIT Bombay",
                branch: "ECE",
                rating: 3.2,
                votes: 264,
                img: "http://placekitten.com/100/100",
            }, {
                name: "Rajat Patwa",
                year: 2,
                college: "IIT Bombay",
                branch: "CSE",
                rating: 4.1,
                votes: 264,
                img: "http://placekitten.com/109/102",
            }, {
                name: "Atul Sharma",
                year: 4,
                college: "IIT Bombay",
                branch: "IT",
                rating: 4.0,
                votes: 264,
                img: "http://placekitten.com/200/200",
            }
        ];
        this.list = [];
        studentList.forEach((item, i) => {
            let element = <InfoCard key={i} studentData={item} />;
            this.list.push(element);
        });
    }

    render() {
        return (
            <div>
                {this.list}
            </div>
        );
    }
}

export default InfoCardList;
