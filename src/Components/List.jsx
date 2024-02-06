import React from "react";
import "../CSS/List.css";
import searchResults from "../Data/searchResults";
import ListItem from "./ListItem";

const List = () => {
    return (
      <div className="list-space">
        <div className="list">
          {searchResults.map((item) => (
            <ListItem
              key={item.id}
              lemma={item.lemma}
              meaning={item.english_meaning}
            />
          ))}
        </div>
      </div>
    );
  };
  

export default List;
