import React from "react";
import "./FilterBarStyles.css";

class FilterBar extends React.Component {
    render() {
        return (
            <div className="student-page-filter-bar">
                <div className="filter-bar-college btn-group dropup">
                    <button type="button" className="btn btn-default student-page-filter-bar-btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span><i className="fa fa-filter" aria-hidden="true"></i>&nbsp;Branch</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <div className="checkbox filter-bar-checkbox col-md-12">
                                <label>
                                    <input type="checkbox" value="CSE"/>&nbsp;Computer Science
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox filter-bar-checkbox col-md-12">
                                <label>
                                    <input type="checkbox" />&nbsp;Information Technology
                                </label>
                            </div>
                        </li>
                  </ul>
                </div>
                <div className="filter-bar-year btn-group dropup">
                    <button type="button" className="btn btn-default student-page-filter-bar-btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span><i className="fa fa-filter" aria-hidden="true"></i>&nbsp;College</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <div className="checkbox filter-bar-checkbox col-md-12">
                                <label>
                                    <input type="checkbox" value="CSE"/>&nbsp;1<sup>st</sup>Year
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox filter-bar-checkbox col-md-12">
                                <label>
                                    <input type="checkbox" value="CSE"/>&nbsp;2<sup>nd</sup>Year
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox filter-bar-checkbox col-md-12">
                                <label>
                                    <input type="checkbox" value="CSE"/>&nbsp;3<sup>rd</sup>Year
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox filter-bar-checkbox col-md-12">
                                <label>
                                    <input type="checkbox" value="CSE"/>&nbsp;4<sup>th</sup>Year
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox filter-bar-checkbox col-md-12">
                                <label>
                                    <input type="checkbox" value="CSE"/>&nbsp;Alumni
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default FilterBar;
