import React from "react";
import "./RatingStarStyles.css";

class RatingStar extends React.Component {

    render() {
        return (
            <div className="profile-page-star">
                <h4 className="profile-page-header">Rate your buddy</h4>
                <div className="profile-page-rating profile-page-center-star">
                    <input type="radio" id="star5" name="rating" value="5"/>
                    <label className="profile-page-full" htmlFor="star5" title="Awesome - 5 stars"></label>
                    <input type="radio" id="star4" name="rating" value="4"/>
                    <label className="profile-page-full" htmlFor="star4" title="Pretty good - 4 stars"></label>
                    <input type="radio" id="star3" name="rating" value="3"/>
                    <label className="profile-page-full" htmlFor="star3" title="Meh - 3 stars"></label>
                    <input type="radio" id="star2" name="rating" value="2"/>
                    <label className="profile-page-full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
                    <input type="radio" id="star1" name="rating" value="1"/>
                    <label className="profile-page-full" htmlFor="star1" title="Sucks big time - 1 star"></label>
                </div>
            </div>
        );
    }
}
export default RatingStar;
