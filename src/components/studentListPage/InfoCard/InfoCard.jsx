import React from "react";
import "./InfoCardStyles.css";

class InfoCard extends React.Component {
    sup(year) {
        if (year === 1)
            return "st";
        else if (year === 2)
            return "nd";
        else if (year === 3)
            return "rd";
        else
            return "th";
    }

    render() {
        const studentData = this.props.studentData;
        return (
            <a href="#" className="list-group-item info-card">
                <div className="pull-left info-card-pic">
                    <img src={studentData.img} className="img-responsive info-card-pic-img" alt={studentData.name}/>
                </div>
                <div className="student-short-info">
                    <h5 className="list-group-item-heading info-card-header">{studentData.name}&nbsp;
                        <small>
                            ({studentData.year}
                            <sup>{this.sup(studentData.year)}</sup>&nbsp;Year)
                        </small>
                    </h5>
                    <p className="list-group-item-text info-card-sub-content">{studentData.college}
                    </p>
                    <p className="list-group-item-text info-card-sub-content">{studentData.branch}
                    </p>
                    <p className="list-group-item-text info-card-sub-content">
                        <span >
                            <i className="fa fa-star" aria-hidden="true"></i>
                            &nbsp;{studentData.rating}&nbsp;({studentData.votes})
                        </span>
                    </p>
                </div>
            </a>
        );
    }
}

export default InfoCard;
