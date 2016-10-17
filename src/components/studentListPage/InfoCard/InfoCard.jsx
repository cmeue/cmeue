import React from "react";
import "./InfoCardStyles.css";

class InfoCard extends React.Component {
    render() {
        return (
            <a href="#" className="list-group-item info-card">
                <div className="pull-left   info-card-pic">
                    <img src="http://placekitten.com/100/100" className="img-responsive info-card-pic-img" alt="student pic"/>
                </div>
                <div className="student-short-info">
                    <h4 className="list-group-item-heading info-card-inner-content">Pikachu Pokemon&nbsp;
                        <small>(3<sup>rd</sup>Year)</small>
                    </h4>
                    <p className="list-group-item-text info-card-sub-content info-card-inner-content info-card-header">Govt. Engineering College Bikaner
                    </p>
                    <p className="list-group-item-text info-card-sub-content info-card-inner-content">Computer Science Engineering &nbsp;| &nbsp;
                        <span>
                            <i className="fa fa-star" aria-hidden="true"></i> 4.6
                        </span>
                        &nbsp;(230)
                    </p>
                </div>
            </a>
        );
    }
}

export default InfoCard;
