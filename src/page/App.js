import React, { useState, useEffect } from "react";
import ContainerDashboard from "../components/Dashboard/Container/ContainerDashboard";
import Graph from "../components/Graph/Graph";
import ContainerResults from "../components/Results/Container/ContainerResults";
import axios from "axios";
import ContainerSearch from "../components/Search/Container/ContainerSearch";

function App() { 
  const [results, setResults] = useState([]); // trades of BNBBTC 
  const [filteredList, setFilteredList] = useState([]); // filteredList of results acc to text
  const [isLoading, setIsLoading] = useState(false); // to check if the results are loading
  const [isClicked, setIsClicked] = useState(false); // to check if the button is clicked or not 

  // background color changed to light pink
  document.body.style = "background: #f4f6fc";

  // fetching data from the API ,isLoading is true after fetching data
  const fetchData = async () => {
    const response = await axios.get(
      "https://api.binance.com/api/v3/trades?symbol=BNBBTC"
    );
    setResults(response.data.reverse());
    setIsLoading(true);
  };

  // fetching data from the API on component mount, interval of 1 second
  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 1000);
  }, []);

  return (
    <div className="App">
      <ContainerDashboard />
      <Graph />
      <ContainerSearch
        setIsClicked={setIsClicked}
        setFilteredList={setFilteredList}
        results={results}
      />
      <ContainerResults
        isClicked={isClicked}
        filteredList={filteredList}
        results={results}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
