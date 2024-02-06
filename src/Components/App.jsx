import react from "react"
import "../CSS/App.css"
import Header from "./Header";
import SearchBar from "./Search";
import List from "./List"

function App() {
  return (
    <div className="App">
     <div className = "container">
        <div className="header">
          <Header />
        </div>
        <div className = "search">
          <SearchBar />
        </div>
        <div className = "search-results">
          <List />
        </div>
     </div>
    </div>
  );
}

export default App;
