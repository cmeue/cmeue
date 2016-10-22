import React from "react";
import "./SearchBarStyles.css";

class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar-block">
                <input type="seach" className="form-control" placeholder="Search" />
            </div>
        );
    }
}

export default SearchBar;
