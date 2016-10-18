import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./FilterBarStyles.css";

class FilterBar extends React.Component {
    render() {
        return (
            <div className="student-page-filter-bar">
                <div className="filter-bar-college btn-group dropup">
                    <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>
                            <i className="fa fa-filter" aria-hidden="true"></i> Branch
                        </span>
                    </span>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#" data-value="option1" tabIndex="-1">
                                <input type="checkbox"/>&nbsp;CSE
                            </a>
                        </li>
                        <li>
                            <a href="#" data-value="option1" tabIndex="-1">
                                <input type="checkbox"/>&nbsp;IT
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="filter-bar-year btn-group dropup">
                    <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>
                            <i className="fa fa-filter" aria-hidden="true"></i> Year
                        </span>
                    </span>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#" data-value="option1" tabIndex="-1">
                                <input type="checkbox"/>&nbsp;1<sup>st</sup> Year
                            </a>
                        </li>
                        <li>
                            <a href="#" data-value="option1" tabIndex="-1">
                                <input type="checkbox"/>&nbsp;2<sup>nd</sup> Year
                            </a>
                        </li>
                        <li>
                            <a href="#" data-value="option1" tabIndex="-1">
                                <input type="checkbox"/>&nbsp;3<sup>rd</sup> Year
                            </a>
                        </li>
                        <li>
                            <a href="#" data-value="option1" tabIndex="-1">
                                <input type="checkbox"/>&nbsp;4<sup>th</sup> Year
                            </a>
                        </li>
                        <li>
                            <a href="#" data-value="option1" tabIndex="-1">
                                <input type="checkbox"/>&nbsp;Alumni
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default FilterBar;
