import React from "react";
import "../CSS/SearchBar.css"
import magnifyingGlass from "../Assests/Images/mag-glass.png"
import { useState } from "react";

const SearchBar = () => {

    const [query, setQuery] = useState("");

    console.log(query)

    return(
        <div className = "search-bar">
            <div className = "search-button">
                <button className="drop-btn">Lemma</button>
                <div className="dropdown-content">
                    <p>Lemma</p>
                    <p>Identifier</p>
                    <p>Interlingual Identifier</p>
                </div>
            </div>
            <div className = "search-input">
                <input placeholder="Please enter the word" type = "text" onChange={(event) => {setQuery(event.target.value)}}/>
            </div>
            <div className = "search-icon">
                <img src = {magnifyingGlass} id = "magnifying-glass" alt = "magnifying glass"/>
            </div>
        </div>
    )
}

export default SearchBar;