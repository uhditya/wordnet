import React from "react";
import "../CSS/App.css";
import Header from "./Header";
import SearchBar from "./Search";
import List from "./List";
import fetchData from "../Data/FetchData";
import { useState } from "react";

const App = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [searched, setSearched] = useState(false);

  const getResults = (word) => {
    fetchData(word)
      .then((fetchedData) => {
        setFetchedData(fetchedData);
        setSearched(true);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setSearched(true);
      })
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="search">
          <SearchBar onSearch={getResults} />
        </div>
        <div className="search-results">
          <List queryResult={fetchedData} searched = {searched}/>
        </div>
      </div>
    </div>
  );
};

export default App;
