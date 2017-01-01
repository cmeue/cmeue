import React from "react";
import "./RatingStarStyles.css";
import BlankStar from "../../../utils/Rating_Icons/star_3.png";

class RatingStar extends React.Component {

    render() {
        return (
            <div id="star">
                <h4 className="header">Rate your buddy
                </h4>
                <span id="rating">
                    <span>
                        <img src={BlankStar} alt="blankstar" value="1"/></span>
                    <span>
                        <img src={BlankStar} alt="blankstar" value="2"/></span>
                    <span>
                        <img src={BlankStar} alt="blankstar" value="3"/></span>
                    <span>
                        <img src={BlankStar} alt="blankstar" value="4"/></span>
                    <span>
                        <img src={BlankStar} alt="blankstar" value="5"/></span>
                </span>

            </div>
        );
    }
}
export default RatingStar;
