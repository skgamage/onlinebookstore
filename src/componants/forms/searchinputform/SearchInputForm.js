import React from "react";
import './searchinputform.styles.css'

const SearchInputForm = () => {
    return (
        <div className="search-input-form-container">
            <input type="text" className="search-input" placeholder="Search Books" />
            <button className="search-button">search</button>
        </div>
    )
}

export default SearchInputForm;